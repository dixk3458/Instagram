import { ProfileUser } from '@/models/user';

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  return (
    <>
      <p>{user.userid}</p>
    </>
  );
}
