import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserLoginInput } from 'src/schema/graphql.schema';
import { AuthenticationService } from './authentication.service';

@Resolver()
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Mutation('login')
  login(@Args('user') userLoginInput: UserLoginInput) {
    return this.authenticationService.login(userLoginInput);
  }
}
