
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Post {
    id: string;
    title: string;
    body: string;
    author?: User;
}

export interface IQuery {
    getPost(id: string): Post | Promise<Post>;
    getPosts(): Post[] | Promise<Post[]>;
}

export interface User {
    id: string;
    posts?: Post[];
}
