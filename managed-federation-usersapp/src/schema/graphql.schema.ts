
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateUserInput {
    name: string;
    phoneNumber?: string;
    password: string;
}

export interface UpdateUserInput {
    name?: string;
    phoneNumber?: string;
}

export interface UserLoginInput {
    phoneNumber: string;
    password: string;
}

export interface IMutation {
    login(user: UserLoginInput): UserAuthResult | Promise<UserAuthResult>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(id: string, updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: string): User | Promise<User>;
}

export interface User {
    id: string;
    name: string;
    phoneNumber: string;
    password: string;
}

export interface UserAuthResult {
    expiresInSeconds: number;
    token: string;
    user: User;
}

export interface IQuery {
    getUser(id: string): User | Promise<User>;
    getUsers(): User[] | Promise<User[]>;
}
