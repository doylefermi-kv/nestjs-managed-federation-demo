import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
    { id: '1', name: 'Doyle', phoneNumber: '1234567890' },
    { id: '2', name: 'Fermi', phoneNumber: '9767432458' },
    { id: '3', name: 'Test', phoneNumber: '6538902373' },
  ];

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  findAll() {
    return this.users;
  }
}
