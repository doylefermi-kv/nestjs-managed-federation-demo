import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AuthGaurd } from 'src/authentication/authentication.gaurd';
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
  @UseGuards(AuthGaurd)
  create(
    @Args('createPostInput') createPostInput: CreatePostInput,
    @Context('user') userId,
  ) {
    return this.postService.create(createPostInput, userId);
  }

  @Mutation('updatePost')
  @UseGuards(AuthGaurd)
  update(
    @Args('id') postId,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
    @Context('user') userId,
  ) {
    return this.postService.update(postId, updatePostInput, userId);
  }

  @Mutation('removePost')
  @UseGuards(AuthGaurd)
  remove(@Args('id') id: string, @Context('user') userId) {
    return this.postService.remove(id, userId);
  }

  @Query('me')
  @UseGuards(AuthGaurd)
  findAllFilterByUser(@Context('user') userId) {
    return this.postService.findAllFilterByUser(userId);
  }

  @ResolveField('author')
  author(@Parent() post: any) {
    return { __typename: 'User', id: post.authorId };
  }
}
