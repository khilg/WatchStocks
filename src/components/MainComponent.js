import React, {useEffect} from 'react'
import {Header } from './Header'
import {Footer } from './Footer'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {RiskCalculator} from './RiskCalculator'
import {WatchList} from './WatchList'
import {Todos} from './Todos'
import {ExpenseTracker} from './ExpenseTracker'
import {ProfitLossCalculator} from './ProfitLossCalculator'
import {Home } from './Home'
import {Cms} from './Cms'
import { connect } from 'react-redux';
import {postStocks, fetchStocks, deleteStock, updateStock, postStockBlog, fetchBlogs, deleteBlog
} from './redux/actions/actionCreater'
import { actions } from 'react-redux-form'; 
import { StockBlogs } from './StockBlogs'
import {EachBlog} from './EachBlog'
const mapStateToProps = state => {
    return {
      stocks : state.watchList,
      blogs : state.stocksBlogs
    }  
  }
  const mapDispatchToProps = dispatch => ({
    postStocks: (stocks,buysellorwatch,price) => dispatch(postStocks(stocks,buysellorwatch,price)),
    fetchStocks: () => dispatch(fetchStocks())  ,
    deleteStock : (stockid) => dispatch(deleteStock(stockid)),
    updateStock : (stockid,stock) => dispatch(updateStock(stockid,stock)),
    resetWatchListForm: () => { dispatch(actions.reset('WatchListForm'))},
    postStockBlog : (stockBlog) => dispatch(postStockBlog(stockBlog)),
    fetchBlogs : () => dispatch(fetchBlogs()),
    deleteBlog : blogid => dispatch(deleteBlog(blogid))

})

 function  Main (props){
    
      useEffect(()=>{
        props.fetchStocks();
        props.fetchBlogs();
      },[])
      
     const blogData =({match}) =>{
         return(
            <EachBlog blogData={props.blogs.stocksBlogs.filter(data => data.id === parseInt(match.params.id))[0]} />
         )
     }

    return (
    <div>
    <Header />
    <Switch>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/riskcalculator"><RiskCalculator /></Route>
          <Route exact path="/profitlosscalculator"><ProfitLossCalculator /></Route>
          <Route exact path="/watchlist"><WatchList postStocks={props.postStocks} 
            getStocks= {props.stocks.watchList} deleteStock={props.deleteStock} 
            resetWatchListForm ={props.resetWatchListForm}
            updateStock = {props.updateStock}/></Route>
          <Route exact path="/todos"><Todos /></Route>
          <Route exact path="/expensetracker"><ExpenseTracker /></Route>
          <Route exact path="/stockblogs"><StockBlogs postStockBlog = {props.postStockBlog} deleteBlog={props.deleteBlog} fetchBlogs = {props.blogs}/></Route>
          <Route exact path="/stockblogs/:id" component={blogData}/>
          <Route exact path="/cms"><Cms /></Route>
          <Redirect to="/home" />
    </Switch>
    <Footer />
    </div>
    )
}
 

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))