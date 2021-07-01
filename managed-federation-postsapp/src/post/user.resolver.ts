import { ResolveField, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField('posts')
  posts(user) {
    const posts = this.postService.findAll();
    return posts.filter((post) => post.author === user.id);
  }
}
