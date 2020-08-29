import React,{useState,useEffect} from 'react'
import { Spinner } from 'reactstrap';
const axios = require('axios').default;
var parse = require('html-react-parser');
 
export const Cms =  () =>{
    
    const [lfrBlogs,setLfrBlogs] = useState([])
    const [lfrWebcontent,setLfrWebContent] = useState('')
    
    useEffect(()=>{
        fetchBlogPost();
        fetchWebContent();
      },[])

      const fetchBlogPost = async () =>{
    
        const {data} = await axios.get('http://localhost:6060/o/headless-delivery/v1.0/sites/68347/blog-postings/', {
           
            headers: {
                'Authorization': 'Basic YWtoaWwuZ0BsaWZlcmF5LmNvbTp0ZXN0',
               
            }
            
          });
          var blogData = {...data}
          setLfrBlogs(blogData)
          
    }
    const fetchWebContent = async () =>{
    
        const data = await axios.get('http://localhost:6060/o/headless-delivery/v1.0/structured-contents/68915/rendered-content/68768', {
           
            headers: {
                'Authorization': 'Basic YWtoaWwuZ0BsaWZlcmF5LmNvbTp0ZXN0'
            },
            
          });
          var WebContentData = {...data}
          setLfrWebContent(WebContentData)
          
    }
    console.log("WebContent " + lfrWebcontent.data)
    var htmlrender = " "+lfrWebcontent.data
    return(
    <div className="container">
        <RenderBlog lfrBlogs={lfrBlogs} />
        {htmlrender === " undefined" ?"":parse(htmlrender)}
    </div>
    )

}


function RenderBlog ({lfrBlogs}) {

    if(lfrBlogs.length === 0){
        return (<Spinner  color="primary" style={{ width: '3rem', height: '3rem' }} />)
       
    }else{
       
        return(
            lfrBlogs.items.map(val => (
                <div >
                <ol><li className="py-5 h4">{val.headline}</li></ol>
                 {parse(val.articleBody)}  
                </div>
            ))
        )
        
    }

}