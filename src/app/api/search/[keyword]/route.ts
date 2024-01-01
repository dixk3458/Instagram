import { searchUser } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { keyword: string };
};

export async function GET(req: NextRequest, context: Context) {
  // 사용자를 검색하는것은 로그인 없이도 이용가능하기때문에
  // 세션에대한 검사를 안해줘도 됨

  return searchUser(context.params.keyword).then(data =>
    NextResponse.json(data)
  );
}
