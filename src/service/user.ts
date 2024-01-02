import { User } from 'next-auth';
import { client } from './sanity';
import user from '../../sanity-studio/schemas/user';
import { SearchUser } from '@/models/user';

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
      users.map((user: SearchUser) => {
        return {
          ...user,
          follower: user.follower ?? 0,
          following: user.following ?? 0,
        };
      })
    );
}

export async function getUserForProfile(userid: string) {
  // Sanity로부터 정보를 가져오면된다.

  return client
    .fetch(
      `
    *[_type == "user" && userid == "${userid}"][0]{
      ...,
      "id":_id,
      "following":count(following),
      "follower":count(follower),
      "posts":count(*[_type == "post" && author->userid == "${userid}"])
    }
  `
    )
    .then(user => ({
      ...user,
      following: user.following ?? 0,
      follower: user.followers ?? 0,
      posts: user.posts ?? 0,
    }));
}
