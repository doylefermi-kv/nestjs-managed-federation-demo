import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext();
    if (ctx) {
      const user = this.authenticationService.validateContext(ctx);
      if (user) {
        ctx.user = user;
        return true;
      }
    }
    return false;
  }
}
