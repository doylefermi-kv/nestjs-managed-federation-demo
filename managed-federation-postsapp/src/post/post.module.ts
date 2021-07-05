import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostResolver, PostService, UserResolver, AuthenticationService],
})
export class PostModule {}
