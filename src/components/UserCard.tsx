import { ProfileUser } from '@/models/user';
import Link from 'next/link';
import Avatar from './Avatar';

type Props = {
  user: ProfileUser;
};

export default function UserCard({
  user: { name, userid, image, following, follower },
}: Props) {
  return (
    <Link
      className="flex items-center w-full rounded-sm border-2 bordear-neutral-400 mb-2 p-4 bg-white hover:bg-neutral-50"
      href={`/user/${userid}`}
    >
      <Avatar image={image} />
      <div className="text-neutral-500">
        <p className="text-black font-bold leading-4">{userid}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${follower} follower ${following} following`}</p>
      </div>
    </Link>
  );
}
