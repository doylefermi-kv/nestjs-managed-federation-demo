
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    id: string;
    name: string;
    phoneNumber?: string;
}

export interface IQuery {
    getUser(id: string): User | Promise<User>;
    getUsers(): User[] | Promise<User[]>;
}
