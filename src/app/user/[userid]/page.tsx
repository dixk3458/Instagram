import UserPosts from '@/components/UserPosts';
import UserProfile from '@/components/UserProfile';
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';

type Props = {
  params: { userid: string };
};
export default async function UserPage({ params: { userid } }: Props) {
  // 상단: 사용자의 프로필 이미지와 정보(userid,name,숫자)
  // 하단 :posts,liked,bookmarks

  // 해당 컴포넌트가 클라이언트 컴포넌트인지 서버 컴포넌트인지 구분하기

  const user = await getUserForProfile(userid);

  if (!user) {
    notFound();
  }

  // user가 있다면 user를 보여주는 컴포넌트

  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}
