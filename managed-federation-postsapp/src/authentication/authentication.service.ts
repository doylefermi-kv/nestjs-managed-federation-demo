import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  validateContext(request) {
    return request.headers['x-user-id'];
  }
}
