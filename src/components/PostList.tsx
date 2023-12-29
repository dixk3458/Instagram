'use client';

import { SimplePost } from '@/models/post';
import useSWR from 'swr';

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>('/api/posts');

  return (
    <ul>
      {posts &&
        posts.map(post => (
          <li key={post.id}>
            <img src={post.image} alt="Post Image" />
          </li>
        ))}
    </ul>
  );
}
