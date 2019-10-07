

const initialState = {
    user: {},
    showEdit: false
}

const SHOW_EDIT = "SHOW_EDIT"
const UPDATE_USER = "UPDATE_USER"

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function employerEdit () {
    return {
        type: SHOW_EDIT,
        payload: !this.showEdit
    }
}




export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
            case SHOW_EDIT: 
            return {
                ...state,
                showEdit: action.payload
            }
        default: return state
    }
}


