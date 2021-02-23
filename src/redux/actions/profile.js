import { SET_AVATAR } from './type'
import userServices from '../../services/user'

export const setAvatar = (avatar) => ({
    type: SET_AVATAR,
    payload: avatar
});

export const fetchAvatar = (userId) => async (dispatch, getState) => {
    const avatar = await userServices.getAvatar(userId)
    dispatch(setAvatar(avatar))
}