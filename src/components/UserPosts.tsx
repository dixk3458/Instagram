'use client';

import { ProfileUser } from '@/models/user';
import { useState } from 'react';
import useSWR from 'swr';

type Props = {
  user: ProfileUser;
};

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
  const [tab, setTab] = useState('posts');

  // 그 상태를 이용해 데이터를 가져오자
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR(`/api/users/${userid}/${tab}`);

  console.log(posts);

  return <></>;
}
