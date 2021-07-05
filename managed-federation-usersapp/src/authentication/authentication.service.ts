import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAuthResult, UserLoginInput } from 'src/schema/graphql.schema';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { AuthenticationHelper } from './authenticationhelper.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private userService: UserService,
    private authenticationHelper: AuthenticationHelper,
  ) {}

  async login(userLoginInput: UserLoginInput): Promise<UserAuthResult> {
    const userRecord: User = await this.userService.getUserDetailsByUsername(
      userLoginInput.phoneNumber,
    );

    const hashedPassword = userRecord.password;
    const plainTextPassword = userLoginInput.password;

    if (
      this.authenticationHelper.isPasswordValid(
        plainTextPassword,
        hashedPassword,
      )
    ) {
      const tokenData = this.authenticationHelper.createToken(userRecord);
      return tokenData;
    } else {
      throw new UnauthorizedException('Bad input credentials');
    }
  }
}
