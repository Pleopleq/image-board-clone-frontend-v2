import { FETCH_POSTS, NEW_POST } from './type'

export const setPosts = (posts) => ({
    type: FETCH_POSTS,
    payload: posts,
});

export const addPost = (post) => ({
  type: NEW_POST,
  payload: post
})

export const fetchPosts = () => async (dispatch, getState) => {
  const posts = await fetch('http://localhost:3001/api/posts').then(res => res.json())
  dispatch(setPosts(posts))
}

export const savePost = () => async (dispatch, getState) => {
  const posts = getState().posts
  await fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(posts)
  })
}