export type AuthUser = {
  userid: string;
  name: string;
  email: string;
  image?: string;
};

// 기존 타입에서 특정 부분을 가져와 새로운 타입을 만든다.
// 사용하는것을 타입정의를해줘 타입의 안정성을 높인다.
export type SimpleUser = Pick<AuthUser, 'userid' | 'image'>;

export type HomeUser = AuthUser & {
  following: SimpleUser[];
  follower: SimpleUser[];
  bookmarks: string[];
};

export type SearchUser = AuthUser & {
  following: number;
  follower: number;
};

export type ProfileUser = SearchUser & {
  posts: number;
};
