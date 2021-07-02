import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostInput, UpdatePostInput } from 'src/schema/graphql.schema';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async findOne(id: string): Promise<Post> {
    const post = await this.postRepository.findOne(id);
    if (post) {
      return post;
    }
    throw new NotFoundException(`Post ${id} does not exist`);
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const newPost = await this.postRepository.create({
      ...createPostInput,
      authorId: parseInt(createPostInput.author),
    });
    const createdPost: Post = await this.postRepository.save(newPost);

    const savedPost = await this.postRepository.findOne(createdPost.id);
    if (savedPost) {
      return savedPost;
    }
    throw new BadRequestException('Could not create post');
  }

  async update(id: string, updatePostInput: UpdatePostInput): Promise<Post> {
    const newPost = await this.postRepository.create({
      ...updatePostInput,
      authorId: parseInt(updatePostInput.author),
    });
    await this.postRepository.update(id, newPost);
    const updatedPost = await this.findOne(id);
    return updatedPost;
  }

  async remove(id: string): Promise<Post> {
    const post = await this.findOne(id);
    await this.postRepository.remove(post);
    return { ...post, id: -1 };
  }
}
