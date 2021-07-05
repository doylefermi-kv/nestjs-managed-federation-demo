import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthenticationHelper {
  constructor(private configService: ConfigService) {}

  createToken(userDetails: User) {
    const expiresIn = 60 * 60;
    const secret = this.configService.get('JWT_SECRET');

    const dataStoredInToken = {
      username: userDetails.phoneNumber,
      id: userDetails.id,
    };
    return {
      expiresInSeconds: expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
      user: { ...userDetails, id: userDetails.id as unknown as string },
    };
  }

  isPasswordValid(plainTextPassword: string, hashedPassword: string) {
    return bcrypt.compareSync(plainTextPassword, hashedPassword);
  }

  generatePasswordHash(plainTextPassword: string, salt = 10) {
    return bcrypt.hashSync(plainTextPassword, salt);
  }
}
