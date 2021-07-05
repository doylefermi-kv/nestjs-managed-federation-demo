import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { ForbiddenException, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GATEWAY_BUILD_SERVICE } from '@nestjs/graphql'; // https://github.com/apollographql/federation/issues/334#issuecomment-819875013
import * as jwt from 'jsonwebtoken';

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  constructor({ url }, private configService: ConfigService) {
    super({ url });
  }
  async willSendRequest({ request, context }) {
    if (context.jwt) {
      try {
        const secret = this.configService.get('JWT_SECRET');
        const authToken = context.jwt.split(' ')[1];
        const { id } = jwt.verify(authToken, secret);
        request.http.headers.set('x-user-id', id);
      } catch (err) {
        throw new ForbiddenException(
          `Failed to authorize this user due to ${err}`,
        );
      }
    }
  }
}

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: AuthenticatedDataSource,
      useValue: AuthenticatedDataSource,
    },
    {
      provide: GATEWAY_BUILD_SERVICE,
      useFactory: (AuthenticatedDataSource, configService: ConfigService) => {
        return ({ name, url }) =>
          new AuthenticatedDataSource({ url }, configService);
      },
      inject: [AuthenticatedDataSource, ConfigService],
    },
  ],
  exports: [GATEWAY_BUILD_SERVICE],
})
export class BuildServiceModule {}
