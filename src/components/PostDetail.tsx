import { FullPost, SimplePost } from '@/models/post';
import useSWR from 'swr';

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userid, userImage, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  console.log(comments);
  return <></>;
}
