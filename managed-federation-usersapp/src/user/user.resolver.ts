import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('getUser')
  findOne(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Query('getUsers')
  findAll() {
    return this.userService.findAll();
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.userService.findOne(reference.id);
  }
}
