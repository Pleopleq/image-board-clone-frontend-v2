import { SET_AVATAR } from '../actions/type'

const initialState = {}

export default function profileReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case SET_AVATAR:
            return { avatar: payload }
        default:
            return state;
    }
}