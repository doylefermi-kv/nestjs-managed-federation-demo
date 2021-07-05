import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthenticationResolver } from './authentication.resolver';
import { AuthenticationService } from './authentication.service';
import { AuthenticationHelper } from './authenticationhelper.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    AuthenticationResolver,
    AuthenticationService,
    UserService,
    AuthenticationHelper,
    ConfigService,
  ],
  exports: [],
})
export class AuthenticationModule {}
