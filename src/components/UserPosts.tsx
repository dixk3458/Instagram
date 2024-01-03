'use client';

import { ProfileUser } from '@/models/user';
import { useState } from 'react';
import useSWR from 'swr';
import PostIcon from './ui/icons/PostIcon';
import BookmarksIcon from './ui/icons/BookmarksIcon';
import HeartIcon from './ui/icons/HeartIcon';
import PostGrid from './PostGrid';

type Props = {
  user: ProfileUser;
};

const tabs = [
  { type: 'posts', icon: <PostIcon /> },
  { type: 'saved', icon: <BookmarksIcon className="w-3 h-3" /> },
  { type: 'liked', icon: <HeartIcon className="w-3 h-3" /> },
];

export default function UserPosts({ user: { userid } }: Props) {
  // user의 posts,bookmarks,likes한 post를 보여주면된다.

  // 어떤 탭을 선택했냐에 따라서 다른 데이터를 보여줘야한다.

  // 1.posts
  // /api/users/${userid}/posts

  // 2.liked
  // /api/users/${userid}/liked

  // 3.bookmarks
  // /api/users/${userid}/bookmarks

  // 어떤 탭을 선택했냐를 관리해야한다.
  const [query, setQuery] = useState(tabs[0].type);

  

  return (
    <section>
      <ul>
        {tabs.map(({ type, icon }) => {
          return (
            <li key={type} onClick={() => setQuery(type)}>
              <button>{icon}</button>
              <span>{type}</span>
            </li>
          );
        })}
      </ul>
      <PostGrid userid={userid} query={query} />
    </section>
  );
}
