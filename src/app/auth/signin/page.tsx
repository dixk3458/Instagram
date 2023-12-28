import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import Signin from '@/components/Signin';
import { redirect } from 'next/navigation';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  // 만약 유저가 이미 있다면 redirect
  // 서버 측에서 필요한 정보를 받음
  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  // 클릭 이벤트 등을 처리해주는 클라이언트 컴포넌트에서 provider를 순회하면서 만듬
  return <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />;
}
