import { FETCH_POSTS, setPosts, NEW_POST } from '../actions/actions';

const initialState = {
    posts: []
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }  
        default:
            return state;
    }
}

export const fetchPosts = () => async (dispatch, getState) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    dispatch(setPosts(posts))
}