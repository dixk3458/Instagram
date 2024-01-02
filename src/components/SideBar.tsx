import { AuthUser } from '@/models/user';
import Avatar from './Avatar';

type Props = {
  user: AuthUser;
};

export default function SideBar({
  user: { userid, name, email, image },
}: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{userid}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About • Help • API • jobs • Privacy • Terms • Location • Language
      </p>
      <p className="text-sm text-neutral-500 font-bold mt-8">
        © 2023 Jaewoong Jeong. All Rights Reserved.
      </p>
    </>
  );
}
