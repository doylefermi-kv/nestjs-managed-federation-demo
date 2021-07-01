import { Module } from '@nestjs/common';
import { AppGraphQLModule } from './graphql/graphql.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AppGraphQLModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
