export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

export const setPosts = (posts) => ({
    type: FETCH_POSTS,
    payload: posts,
  });