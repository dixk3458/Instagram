'use client';

import { DetailUser } from '@/models/user';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';

export default function FollowingBar() {
  // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴 (following)
  // 4. 여기에서 , 클라이언트 컴포넌트에서 following의 정보를 UI에 보여줌
  // (image,username)

  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');

  const users = data?.following;
  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 min-h-[90px] rounded-lg overflow-x-auto relative z-0">
      {loading ? (
        <PropagateLoader size={8} color="orange" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ userid, image }) => {
            return (
              <Link
                key={userid}
                href={`/user/${userid}`}
                className="flex flex-col justify-center items-center w-20"
              >
                <Avatar image={image} hightlight={true} />
                <p className="w-full text-sm text-ellipsis overflow-hidden">
                  {userid}
                </p>
              </Link>
            );
          })}
        </ScrollableBar>
      )}
    </section>
  );
}
