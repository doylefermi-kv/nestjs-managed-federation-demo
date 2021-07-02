
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
}

export interface UpdateUserInput {
    name?: string;
    phoneNumber?: string;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(id: string, updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: string): User | Promise<User>;
}

export interface User {
    id: string;
    name: string;
    phoneNumber?: string;
}

export interface IQuery {
    getUser(id: string): User | Promise<User>;
    getUsers(): User[] | Promise<User[]>;
}
