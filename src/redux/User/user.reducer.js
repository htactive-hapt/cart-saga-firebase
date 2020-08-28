import userTypes from './user.types'

const initialState = {
    currentUser: null,
    resetPasswordSuccess: false,
    userErr: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userErr: []
            }
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...initialState
            }

        case userTypes.USER_ERROR:
            return {
                ...state,
                userErr: action.payload
            }

        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }

        default:
            return state
    }
}

export default userReducer