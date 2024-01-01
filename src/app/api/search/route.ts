import { searchUser } from '@/service/user';
import { NextResponse } from 'next/server';

export async function GET() {
  // 사용자를 검색하는것은 로그인 없이도 이용가능하기때문에
  // 세션에대한 검사를 안해줘도 됨

  return searchUser().then(data => NextResponse.json(data));
}
