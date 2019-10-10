import axios from 'axios'

const initialState = {
    user: {},
    showEdit: false
}

const SHOW_EDIT = "SHOW_EDIT"
const UPDATE_USER = "UPDATE_USER"
const GET_USER = 'GET_USER'

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function employerEdit (bool) {
    return {
        type: SHOW_EDIT,
        payload: bool
    }
}

export function userTrue () {
    return {
        type: GET_USER,
        payload: axios.get('/auth/userTrue').then(response => response.data)
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
            case `${GET_USER}_FULFILLED`:
                return{
                    ...state,
                    showEdit: action.payload
                }
        default: return state
    }
}


