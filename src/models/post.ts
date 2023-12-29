export type Comment = {
  comment: string;
  userid: string;
  image: string;
};

export type FullPost = {
  id: string;
  userid: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};

export type SimplePost = Omit<FullPost, 'comments'> & {
  comments: number;
};
