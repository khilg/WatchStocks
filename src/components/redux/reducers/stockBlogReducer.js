import * as ActionTypes from '../actions/actionTypes'

export const stocksBlogs = (state={
    stocksBlogs : []
}, action) => {
    switch (action.type){
        case ActionTypes.ADD_BLOGS :
            return {...state,stocksBlogs : action.payLoad}

        case ActionTypes.GET_BLOGS :
            return {...state,stocksBlogs : action.payLoad}

        case ActionTypes.DELETE_BLOG :
            return {...state}
        default :
           return state;   
    }
}