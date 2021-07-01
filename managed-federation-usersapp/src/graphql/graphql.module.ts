import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/schema/graphql.schema.ts'),
      },
    }),
  ],
})
export class AppGraphQLModule {}
