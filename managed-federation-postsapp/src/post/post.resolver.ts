import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreatePostInput, UpdatePostInput } from 'src/schema/graphql.schema';
import { PostService } from './post.service';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query('getPost')
  findOne(@Args('id') id: string) {
    return this.postService.findOne(id);
  }

  @Query('getPosts')
  findAll() {
    return this.postService.findAll();
  }

  @Mutation('createPost')
  create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Mutation('updatePost')
  update(
    @Args('id') postId,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postService.update(postId, updatePostInput);
  }

  @Mutation('removePost')
  remove(@Args('id') id: string) {
    return this.postService.remove(id);
  }

  @ResolveField('author')
  author(@Parent() post: any) {
    return { __typename: 'User', id: post.authorId };
  }
}
