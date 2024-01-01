'use client';

import { ProfileUser } from '@/models/user';
import { FormEvent, useState } from 'react';
import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';

export default function UserSearch() {
  // /api/search/${keyword}
  // 키워드가 있다면 동적으로 api 통신을 하고
  // 없다면 모든 사용자 받아오자

  const [keyword, setKeyword] = useState('');
  const {
    data: users,
    isLoading: loading,
    error,
  } = useSWR<ProfileUser[]>(`/api/search/${keyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>무언가가 잘못되었다.</p>}
      {loading && <GridSpinner />}
      {!loading && !error && users?.length === 0 && (
        <p>찾는 사용자가 없습니다.</p>
      )}
      <ul>
        {users &&
          users.map(user => {
            return (
              <li key={user.userid}>
                <p>{user.userid}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
