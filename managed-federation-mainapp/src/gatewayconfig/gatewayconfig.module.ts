import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GatewayConfigService } from './gatewayconfig.service';

@Module({
  imports: [],
  providers: [GatewayConfigService, ConfigService],
  exports: [GatewayConfigService],
})
export class GatewayConfigModule {}
