import { FETCH_POSTS, NEW_POST } from './type'

export const setPosts = (posts) => ({
    type: FETCH_POSTS,
    payload: posts,
});

export const addPost = (post) => ({
  type: NEW_POST,
  payload: post
})