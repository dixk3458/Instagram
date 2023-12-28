import { User } from 'next-auth';
import { client } from './sanity';

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
