import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGraphQLModule } from './graphql/graphql.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AppGraphQLModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
