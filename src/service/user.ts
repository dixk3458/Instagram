import { User } from 'next-auth';
import { client } from './sanity';
import user from '../../sanity-studio/schemas/user';
import { ProfileUser } from '@/models/user';

type OAuthUser = {
  id: string;
  userid: string;
  name: string;
  email: string;
  image?: string | null;
};

export async function addUser({ id, userid, name, email, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    userid: userid,
    name: name,
    email: email,
    image: image,
    following: [],
    follower: [],
    bookmarks: [],
  });
}

export async function getUserByUserId(userid: string) {
  return client.fetch(`*[_type == 'user' && userid == "${userid}"][1]{
    ...,
    "id":_id,
    following[]->{userid,image},
    follower[]->{userid,image},
    "bookmarks":bookmarks[]->_id
  }`);
}

export async function searchUser(keyword?: string) {
  // 키워드가 있냐 없냐에 따라 query가 달라지기 때문에 처리를 해주자.

  const query = keyword
    ? `&& (name match "${keyword}") || (userid match "${keyword}")`
    : '';

  return client
    .fetch(
      `
    *[_type == "user" ${query}]{
      ...,
      "following":count(following),
      "follower":count(follower)
    }
  `
    )
    .then(users =>
      users.map((user: ProfileUser) => {
        return {
          ...user,
          follower: user.follower ?? 0,
          following: user.following ?? 0,
        };
      })
    );
}
