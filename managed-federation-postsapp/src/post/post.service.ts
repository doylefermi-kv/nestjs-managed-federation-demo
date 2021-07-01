import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  posts = [
    {
      id: '1',
      title: 'Hello world',
      body: 'Body of Hello world',
      author: '1',
    },
    {
      id: '2',
      title: 'This is the second post!',
      body: 'Body of This is the second post!',
      author: '1',
    },
    {
      id: '3',
      title: 'Post 3 for user Fermi',
      body: 'Body of This is the second post!',
      author: '2',
    },
    {
      id: '4',
      title: 'Post 4 for user Test',
      body: 'Body of This is the second post!',
      author: '3',
    },
  ];

  findOne(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  findAll() {
    return this.posts;
  }
}
