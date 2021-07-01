import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { UserResolver } from './user.resolver';

@Module({
  providers: [PostResolver, PostService, UserResolver],
})
export class PostModule {}
