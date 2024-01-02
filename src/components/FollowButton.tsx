'use client';

import { HomeUser, ProfileUser } from '@/models/user';
import useSWR from 'swr';
import Button from './ui/Button';

type Props = {
  user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
  // 사용자페이지의 해당 사용자 정보를 가져와서
  // 내가 그 사용자를 following하는 사용자인지 검사해야한다.

  const { userid } = user;

  const { data: loggedInUser } = useSWR<HomeUser>('/api/me');

  // 해당 페이지가 나의 페이지라면 버튼을 안보여줌
  const showButton = loggedInUser && loggedInUser.userid !== user.userid;

  // following하는 대상인지 아닌지 검사
  const following =
    loggedInUser && loggedInUser.following.find(item => item.userid === userid);

  const text = following ? 'Unfollow' : 'Follow';
  return (
    <>
      {showButton && (
        <Button text={text} onClick={() => {}} red={text === 'Unfollow'} />
      )}
    </>
  );
}
