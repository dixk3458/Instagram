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
    <article className="rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center p-2">
        <Avatar image={userImage} size="medium" hightlight={true} />
        <span className="text-gray-900 font-bold ml-2">{userid}</span>
      </div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${userid}`}
        width={500}
        height={500}
      />
      <div className="flex justify-between my-2  px-4">
        <HeartIcon />
        <BookmarksIcon />
      </div>
      <div className="px-4 py-1">
        <p className="text-sm font-bold mb-2">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? 'likes' : 'like'
        }`}</p>
        <p>
          <span className="font-bold mr-1">{userid}</span>
          {text}
        </p>
        <p className="text-xs text-neutral-500 uppercase my-2">
          {parseDate(createdAt)}
        </p>
        <form className="flex items-center border-t border-neutral-300 ">
          <SmileIcon />
          <input
            className="w-full ml-2 border-none outline-none p-3"
            type="text"
            placeholder="Add a comment"
          />
          <button className='font-bold text-yellow-500 ml-2'>Post</button>
        </form>
      </div>
    </article>
  );
}
