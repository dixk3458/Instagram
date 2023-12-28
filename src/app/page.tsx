import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import SideBar from '@/components/SideBar';
import { handler } from './api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  // 사용자의 세션 정보를 가져오는 방법은 두가지가있다.
  // 1. 서버측 => getServerSession()
  // 2. 클라이언트측 => useSession()
  const session = await getServerSession(handler);
  const user = session?.user;

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <section>
      <FollowingBar />
      <PostList />
      <SideBar user={user} />
    </section>
  );
}
