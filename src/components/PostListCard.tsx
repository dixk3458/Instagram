import { SimplePost } from '@/models/post';
import Link from 'next/link';
import Avatar from './Avatar';
import Image from 'next/image';
import HeartIcon from './ui/icons/HeartIcon';
import BookmarksIcon from './ui/icons/BookmarksIcon';
import { parseDate } from '@/util/date';
import SmileIcon from './ui/icons/SmileIcon';

type Props = {
  post: SimplePost;
};

export default function PostListCard({ post }: Props) {
  const { userid, id, userImage, image, text, comments, likes, createdAt } =
    post;
  return (
    <>
      <div>
        <Avatar image={userImage} hightlight={true} />
        <span>{userid}</span>
      </div>
      <Image src={image} alt={`photo by ${userid}`} width={500} height={500} />
      <div>
        <HeartIcon />
        <BookmarksIcon />
      </div>
      <div>
        <p>{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        <p>
          <span>{userid}</span>
          {text}
        </p>
        <p>{parseDate(createdAt)}</p>
        <form action="">
          <SmileIcon />
          <input type="text" placeholder='Add a comment' />
          <button>Post</button>
        </form>
      </div>
    </>
  );
}
