import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'user', url: 'http://localhost:5001/graphql' },
          { name: 'post', url: 'http://localhost:5002/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
