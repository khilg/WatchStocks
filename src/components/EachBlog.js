import React from 'react'
import {Jumbotron} from 'reactstrap'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'

export const EachBlog = props =>{

    if(props.blogData !==undefined){
    return(
        <div className='container'>
             <Breadcrumb>
                <BreadcrumbItem><Link to="/stockblogs">Blogs</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.blogData.blogHeading}</BreadcrumbItem>
             </Breadcrumb>
            <Jumbotron>
                 <h2 className="display-3">{props.blogData.blogHeading}</h2>
                <h4 className="lead">{props.blogData.sideHeading}</h4>
                <hr className="my-2" />
                <img width="40%" src={`/assets/${props.blogData.img1}`} alt="CandleStick" className="image-style"/>{' '}
                <img width="40%" src={`/assets/${props.blogData.img2}`} alt="CandleStick" className="image-style"/>
               
               <p>{props.blogData.bodyContent}</p>
                 <li>{props.blogData.bodyPoints}</li>
                 <li>{props.blogData.bodypoints1}</li>
                 <li>{props.blogData.bodypoints2}</li>
                 <li>{props.blogData.bodypoints3}</li>
            </Jumbotron>
        </div>
    )
    }else{
        return null;
    }
}