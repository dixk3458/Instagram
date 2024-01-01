'use client';

import { SimplePost } from '@/models/post';
import Avatar from './Avatar';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import { useState } from 'react';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUserAvatar from './PostUserAvatar';

type Props = {
  post: SimplePost;
  priority: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState(false);

  const { userid, id, userImage, image, text, comments, likes, createdAt } =
    post;
  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <PostUserAvatar image={userImage} userid={userid} />
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${userid}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar
        likes={likes}
        text={text}
        userid={userid}
        createdAt={createdAt}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
