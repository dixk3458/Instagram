import { SimplePost } from '@/models/post';
import { client, urlFor } from './sanity';

const simplePostProjection = `
    ...,
    "userid":author->userid,
    "userImage":author->image,
    "image":photo,
    "likes":likes[]->userid,
    "text":comments[0].comment,
    "comments":count(comments),
    "id":_id,
    "createdAt":_createdAt
`;

//post.author.userid -> post.userid

export async function getFollowingPostsOf(userid: string) {
  //  post 스키마에있는 데이터를 가져올건데 모든걸 가져오는게 아니라,
  // post안에 author가 참조하는 User들중에 userid가 내가 찾은 userid인 사람걸 가져와
  // 즉 로그인사용자의 post를 가져옴

  return client
    .fetch(
      `*[_type == "post" && author->userid == "${userid}"
            || author._ref in *[_type == "user" && userid == "${userid}"].following[]._ref]
            | order(_createdAt desc){${simplePostProjection}}`
    )
    .then(posts => mapPosts(posts));
}

export async function getPost(id: string) {
  return client
    .fetch(
      `*[_type == "post" && _id == "${id}"][0]{
      ...,
      "userid":author->userid,
      "userImage":author->userImage,
      "image":photo,
      "likes":likes[]->userid,
      "comments":comments[]{comment,"userid":author->userid,"image":author->image},
      "id":_id,
      "createdAt":_createAt
    }
    `
    )
    .then(post => ({ ...post, image: urlFor(post.image) }));
}

export async function getPostsOf(userid: string) {
  return client
    .fetch(
      `*[_type == "post" && author->userid == "${userid}"]
    | order(_createdAt desc){
      ${simplePostProjection}
    }
    `
    )
    .then(posts => mapPosts(posts));
}

export async function getLikedPostsOf(userid: string) {
  return client
    .fetch(
      `*[_type == "post" && ${userid} in likeds[]->userid]
    | order(_createdAt desc){
      ${simplePostProjection}
    }
    `
    )
    .then(posts => mapPosts(posts));
}

export async function getSavedPostsOf(userid: string) {
  return client
    .fetch(
      `*[_type == "post" && _id in *[_type == "user" && userid == "${userid}"].bookmarks[]._ref]
    | order(_createdAt desc){
      ${simplePostProjection}
    }
    `
    )
    .then(posts => mapPosts(posts));
}

function mapPosts(posts: SimplePost[]) {
  return posts.map((post: SimplePost) => ({
    ...post,
    image: urlFor(post.image),
  }));
}
