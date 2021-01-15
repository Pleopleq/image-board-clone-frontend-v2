import { FETCH_POSTS, NEW_POST } from './type'
import postServices from '../services/post'

export const setPosts = (posts) => ({
    type: FETCH_POSTS,
    payload: posts,
});

export const addPost = (post) => ({
  type: NEW_POST,
  payload: post
})

export const fetchPosts = () => async (dispatch, getState) => {
  const posts = await postServices.getAll()
  dispatch(setPosts(posts))
}

export const savePost = () => async (dispatch, getState) => {
  const posts = getState().posts
  await postServices.addNewPost(posts)
}