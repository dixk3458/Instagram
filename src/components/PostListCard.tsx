'use client';

import { SimplePost } from '@/models/post';
import Avatar from './Avatar';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import { useState } from 'react';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';

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
      <div className="flex items-center p-2">
        <Avatar image={userImage} size="medium" hightlight={true} />
        <span className="text-gray-900 font-bold ml-2">{userid}</span>
      </div>
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
            <p>포스트 상세 페이지</p>
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
