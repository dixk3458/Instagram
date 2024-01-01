import { parseDate } from '@/util/date';
import BookmarksIcon from './ui/icons/BookmarksIcon';
import HeartIcon from './ui/icons/HeartIcon';

type Props = {
  likes: string[];
  text: string;
  userid: string;
  createdAt: string;
};

export default function ActionBar({ likes, text, userid, createdAt }: Props) {
  return (
    <>
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
      </div>
    </>
  );
}
