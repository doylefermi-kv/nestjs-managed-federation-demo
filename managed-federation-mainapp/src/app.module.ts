import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GATEWAY_BUILD_SERVICE, GraphQLGatewayModule } from '@nestjs/graphql';
import { BuildServiceModule } from './gatewaybuildservice/buildservice.module';
import { GatewayConfigModule } from './gatewayconfig/gatewayconfig.module';
import { GatewayConfigService } from './gatewayconfig/gatewayconfig.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLGatewayModule.forRootAsync({
      useClass: GatewayConfigService,
      imports: [GatewayConfigModule, BuildServiceModule, ConfigModule],
      inject: [GatewayConfigService, GATEWAY_BUILD_SERVICE],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
