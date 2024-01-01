export type User = {
  userid: string;
  name: string;
  email: string;
  image?: string;
};

// 기존 타입에서 특정 부분을 가져와 새로운 타입을 만든다.
// 사용하는것을 타입정의를해줘 타입의 안정성을 높인다.
export type SimpleUser = Pick<User, 'userid' | 'image'>;

export type DetailUser = User & {
  following: SimpleUser[];
  follower: SimpleUser[];
  bookmarks: string[];
};

export type ProfileUser = User & {
  following: number;
  follower: number;
};
