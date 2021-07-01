import { Module } from '@nestjs/common';
import { AppGraphQLModule } from './graphql/graphql.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AppGraphQLModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
