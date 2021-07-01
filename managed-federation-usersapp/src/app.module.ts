import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGraphQLModule } from './graphql/graphql.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AppGraphQLModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
