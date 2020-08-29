import {combineReducers} from 'redux'
import {watchList} from './watchListReducer'
import {InitialWatchList} from '../forms/watchlistform'
import {InitialExpenseTrackerForm} from '../forms/expensetrackerform'
import { createForms  } from 'react-redux-form';
import {stocksBlogs} from './stockBlogReducer'


const rootReducer = combineReducers({
    watchList,
    stocksBlogs,
    ...createForms ({
        WatchListForm: InitialWatchList,
        ExpenseTrackerForm : InitialExpenseTrackerForm
    })
})

export default  rootReducer;