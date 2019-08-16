const intialState = {
    patternList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}
const book = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_PATTERN_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PATTERN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_PATTERN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                patternList: action.payload.data
            }
        case 'PATCH_PATTERN_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'PATCH_PATTERN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'PATCH_PATTERN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                patternList: action.payload.data
            }
        default:
            return state
    }
}

export default book