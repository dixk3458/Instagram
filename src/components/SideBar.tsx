import { User } from '@/models/user';
import Avatar from './Avatar';

type Props = {
  user: User;
};

export default function SideBar({
  user: { userid, name, email, image },
}: Props) {
  return (
    <>
      <div>
        {image && <Avatar image={image} />}
        <p>{userid}</p>
        <p>{name}</p>
      </div>
      <p>About • Help • API • jobs • Privacy • Terms • Location • Language</p>
      <p>© 2023 Jaewoong Jeong. All Rights Reserved.</p>
    </>
  );
}
