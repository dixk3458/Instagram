import { ProfileUser } from '@/models/user';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  const { image, userid, name, follower, following, posts } = user;

  const info = [
    { title: 'posts', data: posts },
    { title: 'follower', data: follower },
    { title: 'following', data: following },
  ];
  return (
    <section>
      <Avatar image={image} hightlight={true} />
      <div>
        <h1>{userid}</h1>
        <FollowButton user={user} />
        <ul>
          {info.map(({ title, data }, index) => {
            return (
              <li key={index}>
                <span>{data}</span>
                {title}
              </li>
            );
          })}
        </ul>
        <p>{name}</p>
      </div>
    </section>
  );
}
