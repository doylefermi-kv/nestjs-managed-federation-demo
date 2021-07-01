import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
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

  @ResolveField('author')
  author(@Parent() post: any) {
    return { __typename: 'User', id: post.author };
  }
}
