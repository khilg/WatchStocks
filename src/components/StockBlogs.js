import React, {useState} from 'react'
import "../StockBlog.css"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col
} from 'reactstrap'
import {Link} from 'react-router-dom'
import {LocalForm, Control} from 'react-redux-form'
import PlusOneIcon from '@material-ui/icons/PlusOne'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import TextTruncate from 'react-text-truncate'; 


export const StockBlogs = props =>{

    const [model, setModal] = useState(false);
    const [count,setCount] = useState(1)
    const [disp,setdisp] =useState([])
 const handleSubmit = values =>{
     const obj = Object.assign({pointCount:count},values)
    props.postStockBlog(obj)
    setModal(!model)
 }
 const renderBodyPoints = (noOfPoints)=>{
    var disparr = disp;
        const id = ".bodyPoints" + noOfPoints
         disparr.push( <FormGroup>
            <Col>
                <Control.text  model={id} id={id} name="bodyPoints" className="form-control" placeholder="Points " />
            </Col>
        </FormGroup>)
    setdisp([...disparr])
 }
    return(
        <>
        <div className="background-img">
            <div className="addBlog">
                <h5>Are you a content creator? Then!!!!</h5>
                <span><Button color='danger' size="lg" onClick={() => setModal(!model)}>Add Blog</Button></span>
            </div>
        </div>
        <div className='container py-5'>
                <div className="blogs__container">
                    <RenderStockBlogCard stocksBlogs ={props.fetchBlogs.stocksBlogs} deleteBlog={props.deleteBlog} />
                </div>

      <Modal isOpen={model} toggle={() => setModal(!model)} size='lg' >
            <ModalHeader toggle={() => setModal(!model)} charCode="X">Add Blog</ModalHeader>
            <LocalForm onSubmit={values => handleSubmit(values)}>
            <ModalBody>
                    <FormGroup>
                        <Col>
                        <Label htmlfor="blogHeading">Blog Heading</Label>
                        <Control.text  model=".blogHeading" name="blogHeading" id="blogHeading" className="form-control" placeholder="Blog Heading" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                         <Col>
                        <Label htmlfor="sideHeading">Side Heading</Label>
                        <Control.text  model=".sideHeading" name="sideHeading" id="sideHeading" className="form-control" placeholder="Side Heading" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                         <Col>
                        <Label htmlfor="img1">Image 1</Label>
                        <Control.file  model=".img1" name="img1" id="img1"  />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                         <Col>
                        <Label htmlfor="img2">Image 2</Label>
                        <Control.file  model=".img2" name="img2" id="img2" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                         <Col>
                        <Label htmlfor="bodyContent">BodyContent</Label>
                        <Control.textarea  model=".bodyContent" name="bodyContent" id="bodyContent" className="form-control" placeholder="Body content" rows={5} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                         <Col>
                        <Label htmlfor="bodyPoints">BodyPoints : </Label><PlusOneIcon onClick={()=>{setCount(count+1)
                        renderBodyPoints(count)
                        }}/>
                            <Control.text  model=".bodyPoints" name="bodyPoints" id="bodyPoints" className="form-control" placeholder="Points " />
                        </Col>
                    </FormGroup>
                    {disp}
            </ModalBody>
            <ModalFooter>
            <Button color="primary" type="submit" >Save Blog</Button>{' '}
            <Button color="secondary" onClick={() => setModal(!model)}>Cancel</Button>
            </ModalFooter>
            </LocalForm>    
      </Modal>
        </div>
        </>
    )
}
 
function RenderStockBlogCard({stocksBlogs, deleteBlog}){

    const [dropDownOpenId,setDropDownId] = useState();
    const [dropDownOpen,setDropDown] = useState(false);
    const deleteSingleBlog = blogid =>{
        alert("Your are deleting"+ blogid)
        deleteBlog(blogid);
    }
    return (stocksBlogs.map((value,key) => {
       
        return(
                <div className="blog__card" key={key}>
                    <div className="blog__heading">
                        <h5>{value.blogHeading}</h5>
                        <MoreVertIcon key={key} onClick={()=> {setDropDownId(value.id)
                        setDropDown(!dropDownOpen)}} />
                        <div className={dropDownOpenId === value.id && dropDownOpen ? "blog__menu--show" : "blog__menu"} >
                            <div  onClick={()=>deleteSingleBlog(value.id)}>Delete</div>
                            <div>Update(soon)</div>
                        </div>
                    </div>
                    <Link to={`/stockblogs/${value.id}`}>
                    <img src={`/assets/${value.img1}`} alt="" />
                    <div className="blog__stats">
                        <h6>{value.sideHeading}</h6>
                        <TextTruncate
                        line={1}
                        element="p"
                        truncateText="…"
                        text={value.bodyContent}
                        />
                        <p>{new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(value.date))}</p>
                    </div>
                    </Link>
                </div>
        )
    }

    ))
} 