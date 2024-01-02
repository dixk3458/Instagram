import { getLikedPostsOf, getPostsOf, getSavedPostsOf } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: {
    slug: string[]; // slug/slug/slug
  };
};
export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse('Bad Request', { status: 400 });
  }

  const [userid, query] = slug;

  // 어떤 query인지에 따라서 request를 Pick해놓았다.
  let request = getPostsOf;
  if (query === 'saved') {
    request = getSavedPostsOf;
  } else if (query === 'liked') {
    request = getLikedPostsOf;
  }
  return request(userid).then(data => NextResponse.json(data));
}
