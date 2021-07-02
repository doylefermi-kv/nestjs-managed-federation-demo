import { ResolveField, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField('posts')
  async posts(user) {
    const posts = await this.postService.findAll();
    return posts.filter((post) => post.authorId === user.id);
  }
}
