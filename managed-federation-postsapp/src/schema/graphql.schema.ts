
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreatePostInput {
    title: string;
    body: string;
}

export interface UpdatePostInput {
    title?: string;
    body?: string;
}

export interface IMutation {
    createPost(createPostInput: CreatePostInput): Post | Promise<Post>;
    updatePost(id: string, updatePostInput: UpdatePostInput): Post | Promise<Post>;
    removePost(id: string): Post | Promise<Post>;
}

export interface Post {
    id: string;
    title: string;
    body: string;
    author?: User;
}

export interface IQuery {
    getPost(id: string): Post | Promise<Post>;
    getPosts(): Post[] | Promise<Post[]>;
    me(): Post[] | Promise<Post[]>;
}

export interface User {
    id: string;
    posts?: Post[];
}
