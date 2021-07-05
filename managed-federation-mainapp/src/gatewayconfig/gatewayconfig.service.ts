import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GatewayModuleOptions, GatewayOptionsFactory } from '@nestjs/graphql';
import formatGraphqlError from 'src/exception/exception.formatter';

@Injectable()
export class GatewayConfigService implements GatewayOptionsFactory {
  constructor(private configService: ConfigService) {}
  public createGatewayOptions(): Partial<GatewayModuleOptions> {
    return {
      server: {
        apollo: {
          graphId: this.configService.get('APOLLO_GRAPH_ID'),
          key: this.configService.get('APOLLO_KEY'),
        },
        formatError: formatGraphqlError,
        debug: true,
        cors: {
          credentials: true,
        },
        context: ({ req }) => ({
          jwt: req.headers.authorization,
        }),
      },
      gateway: {
        debug: true,
        // serviceList: [
        //   { name: 'users', url: 'http://localhost:3001/graphql' },
        //   { name: 'posts', url: 'http://localhost:3002/graphql' },
        // ],
      },
    };
  }
}
