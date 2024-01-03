import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';
import { SimplePost } from '@/models/post';
import PostGridCard from './PostGridCard';

type Props = {
  userid: string;
  query: string;
};

export default function PostGrid({ userid, query }: Props) {
  // 그 상태를 이용해 데이터를 가져오자
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<SimplePost[]>(`/api/users/${userid}/${query}`);
  return (
    <div className="w-full text-center">
      {loading && <GridSpinner />}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => {
            return (
              <li key={post.id}>
                <PostGridCard post={post} priority={index < 6} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
