import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthenticationHelper } from 'src/authentication/authenticationhelper.service';
import { CreateUserInput, UpdateUserInput } from 'src/schema/graphql.schema';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private authenticationHelper: AuthenticationHelper,
  ) {}

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (user) {
      return user;
    }
    throw new NotFoundException(`User ${id} does not exist`);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    const hashedPassword = this.authenticationHelper.generatePasswordHash(
      createUserInput.password,
    );

    const newUser = await this.userRepository.create({
      ...createUserInput,
      password: hashedPassword,
    });
    const createdUser: User = await this.userRepository.save(newUser);

    const savedUser = await this.userRepository.findOne(createdUser.id);
    if (savedUser) {
      return savedUser;
    }
    throw new BadRequestException('Could not create user');
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const newUser = await this.userRepository.create(updateUserInput);
    await this.userRepository.update(id, newUser);
    const updatedUser = await this.findOne(id);
    return updatedUser;
  }

  async remove(id: string): Promise<User> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
    return { ...user, id: -1 };
  }

  async getUserDetailsByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: [{ phoneNumber: username }],
    });
    if (user) {
      return user;
    }
    throw new NotFoundException(`User with phone: ${username} does not exist`);
  }
}
