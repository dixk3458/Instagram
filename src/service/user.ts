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

const doc = {
  _id: 'my-bike',
  _type: 'bike',
  name: 'Sanity Tandem Extraordinaire',
  seats: 2,
};
