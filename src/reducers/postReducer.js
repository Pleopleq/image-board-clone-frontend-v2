import { FETCH_POSTS, NEW_POST } from '../actions/type'

const initialState = {}

export default function postReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: payload
            }
        case NEW_POST:
            return {
                ...state,
                posts: [...state.posts, payload]
            }
        default:
            return state;
    }
}
