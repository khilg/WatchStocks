import * as ActionTypes from '../actions/actionTypes'

export const watchList = (state={
    isLoading : true,
    errMsg : null,
    watchList : []
}, action) => {
    switch (action.type){
       
        case ActionTypes.WATCHLIST_LOADING :
            return {...state,isLoading:true,errmsg:null, watchList:[]}

        case ActionTypes.ADD_STOCK_TO_WATCHLIST :
            return {...state,isLoading:false,errmsg:null, watchList : state.watchList.concat(action.payLoad)} 
            
        case ActionTypes.GET_STOCK_FROM_WATCHLIST :
            return {...state,isLoading:false,errmsg:null, watchList : action.payLoad}     

        case ActionTypes.UPDATE_STOCK_IN_WATCHLIST :
               var updateStock = action.payLoad;
              var newstate =  state.watchList.filter(stock => stock.id !== updateStock.id)
            return {...state,isLoading:false,errmsg:null, watchList : newstate.concat(updateStock)} 

        case ActionTypes.FAILED_TO_LOAD_WATCHLIST :
            return {...state,isLoading:false,errmsg:action.payLoad,watchList : []}

        case ActionTypes.DELETE_STOCK_FROM_WATCHLIST :
            return {...state,isLoading:false,errmsg:null}

        default :
            return state;   
            
    }
}