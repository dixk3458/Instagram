'use client';

import { ProfileUser } from '@/models/user';
import { FormEvent, useState } from 'react';
import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';
import UserCard from './UserCard';
import useDebounce from '@/hooks/debounce';

export default function UserSearch() {
  // /api/search/${keyword}
  // 키워드가 있다면 동적으로 api 통신을 하고
  // 없다면 모든 사용자 받아오자

  const [keyword, setKeyword] = useState('');

  // Debounce 구현
  const debouncedKeyword = useDebounce(
    keyword.includes('*')
      ? keyword.replace(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/, '')
      : keyword,
    1000
  );

  const {
    data: users,
    isLoading: loading,
    error,
  } = useSWR<ProfileUser[]>(`/api/search/${debouncedKeyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form className="w-full mb-4" onSubmit={e => onSubmit(e)}>
        <input
          className="w-full text-xl p-3 outline-none border border-gray-400"
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
      <ul className="w-full p-4">
        {users &&
          users.map(user => {
            return (
              <li key={user.userid}>
                <UserCard user={user} />
              </li>
            );
          })}
      </ul>
    </section>
  );
}
