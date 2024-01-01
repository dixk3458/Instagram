'use client';

import { useState } from 'react';
import useSWR from 'swr';

export default function UserSearch() {
  // /api/search/${keyword}
  // 키워드가 있다면 동적으로 api 통신을 하고
  // 없다면 모든 사용자 받아오자

  const [keyword, setKeyword] = useState('');
  const { data, isLoading, error } = useSWR(`/api/search/${keyword}`);
  console.log(data);

  return <></>;
}
