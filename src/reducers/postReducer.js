import { setPosts } from '../actions/posts';
import { FETCH_POSTS, NEW_POST } from '../actions/type'

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
        case NEW_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default:
            return state;
    }
}

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