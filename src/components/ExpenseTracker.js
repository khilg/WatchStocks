import React from 'react'
import {Form,Control,Errors} from 'react-redux-form'
import {Button,Col, Label, Row,Table} from 'reactstrap'


const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);

export const ExpenseTracker = () =>{


    const  handleSubmit= expenseTracker => { 
        
        alert(expenseTracker.name)
     }
 

return(

    <div className='container'>
    <Form model='expenseTracker' onSubmit={(expenseTracker) => handleSubmit(expenseTracker)}  >
    <Row >
        <Col md={4}>
            <Label htmlFor='Name'>Name</Label>
            <Control.text model=".name" name="name" id="name" className="form-control" 
             validators={{ required, minLength: minLength(3)}} placeholder="Name"/>
            <Errors className="text-danger" model=".name" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters' }} />
        </Col> 
   
        <Col md={4}>
            <Label htmlFor='maleOrFemale'>Gender</Label>
            <Control.select model=".maleOrFemale" name="maleOrFemale" id="maleOrFemale" className="form-control" validators={{required}}   >
                <option></option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='others'>Ohers</option>
            </Control.select>    
            <Errors className="text-danger" model=".maleOrFemale" show="touched" messages={{ required: 'Required'}} />
        </Col> 

        
    </Row>
    <div className='riskform'>
    <Button color='success' type="submit">Submit</Button>
    </div>
  </Form>
  </div>
)

}