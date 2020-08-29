import * as ActionTypes from './actionTypes'

const axios = require('axios').default;

export const postStocks = (stocks,buysellorwatch,price,isedit) => dispatch =>{

    const newStock =   {
        stocks : stocks,
        buySellOrWatch : buysellorwatch,
        price : price,
        isEdit : isedit
}
newStock.date = new Date().toISOString();


   axios({
        method: 'post',
        url: "http://localhost:3001/stocks",
        data: newStock,
        headers: {
            "Accept": "application/json"
          },
         
      }).then(response => {
        if (response.status === 201) {
          return response.data;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
      .then(newStock => dispatch(addStocks(newStock)))
      .catch(error =>  { console.log('Post Stock', error.message); alert('Your Stock could not be Added\nError: '+error.message); });
}

export const addStocks = newStock =>({
    type: ActionTypes.ADD_STOCK_TO_WATCHLIST,
    payLoad: newStock
})

export const fetchStocks = () => dispatch =>{
    axios.get("http://localhost:3001/stocks")
    .then(response => response.data)
    .then(stocks => dispatch(getStocks(stocks)))
    
}
export const getStocks = allStocks =>({
    type : ActionTypes.GET_STOCK_FROM_WATCHLIST,
    payLoad : allStocks
})

export const deleteStock = stockid => async dispatch =>{
    await axios.delete("http://localhost:3001/stocks/" + stockid )
    .then(response => dispatch(stockDeleted()))
   

    await dispatch(fetchStocks())
}
export const stockDeleted = () =>({
    type : ActionTypes.DELETE_STOCK_FROM_WATCHLIST,
    
})

export const updateStock = (stockid,stock) =>  dispatch =>{
    stock.date = new Date().toISOString();
     axios.put("http://localhost:3001/stocks/" + stockid, stock )
    .then(response => dispatch(stockUpdated(response.data)))
    
}
export const stockUpdated = (updatedValue) =>({
    type : ActionTypes.UPDATE_STOCK_IN_WATCHLIST,
    payLoad : updatedValue
})

// post for StockBlogs

export const postStockBlog = (stockBlogobj) => dispatch =>{

  const stockBlog =  Object.assign({date: new Date().toISOString()}, stockBlogobj);
  
axios({
    method: 'post',
    url: "http://localhost:3001/blogs",
    data: stockBlog,
    headers: {
        "Accept": "application/json"
      },
     
  }).then(response => {
    if (response.status === 201) {
      return response.data;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
        throw error;
  })
  .then(stockBlog => dispatch(addBlog(stockBlog)))
  .catch(error =>  { console.log('Post Stock', error.message); alert('Your Stock could not be Added\nError: '+error.message); });

}

export const addBlog = stockBlog =>({
    type: ActionTypes.ADD_BLOGS,
    payLoad: stockBlog
})

export const fetchBlogs = () => dispatch =>{
    axios.get("http://localhost:3001/blogs")
    .then(response => response.data)
    .then(blogs => dispatch(getBlogs(blogs)))
    
}
export const getBlogs = blogs =>({
    type : ActionTypes.GET_BLOGS,
    payLoad : blogs
})

export const deleteBlog = blogid => async dispatch =>{
    await axios.delete("http://localhost:3001/blogs/" + blogid)
    .then(resp => dispatch(blogDeleted(resp.data)))

    await dispatch(fetchBlogs())
}
const blogDeleted = resp =>({
  type : ActionTypes.DELETE_BLOG
})