import React from 'react'
import {Form, Control, Errors } from 'react-redux-form';
import {Button,Col, Label, Row,Table} from 'reactstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);

export const WatchList = props =>{

   const  handleSubmit= values => { 
        props.resetWatchListForm();
        props.postStocks(values.stockName,values.buySellOrWatch,values.price);
       
    }

return(
    <div className='container py-5'>
    <Form model='WatchListForm' onSubmit={(values) => handleSubmit(values)}  >
    <Row >
        <Col md={4}>
            <Label htmlFor='stockName'>StockName</Label>
            <Control.text model="WatchListForm.stockName" name="stockName" id="WatchListForm.stockName" className="form-control" 
             validators={{ required, minLength: minLength(3)}} placeholder="StockName"/>
            <Errors className="text-danger" model=".stockName" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters' }} />
        </Col> 
   
        <Col md={4}>
            <Label htmlFor='buySellOrWatch'>Buy, Sell or Watch</Label>
            <Control.select model="WatchListForm.buySellOrWatch" name="buySellOrWatch" id="WatchListForm.buySellOrWatch" className="form-control" validators={{required}}   >
                <option></option>
                <option value='buy'>Buy</option>
                <option value='sell'>Sell</option>
                <option value='watch'>Watch</option>
            </Control.select>    
            <Errors className="text-danger" model=".buySellOrWatch" show="touched" messages={{ required: 'Required'}} />
        </Col> 

        <Col md={4}>
            <Label htmlFor='price'>Price</Label>
            <Control.text model="WatchListForm.price" name='price' id="WatchListForm.price" className="form-control"  validators={{ required, minLength: minLength(1)}} placeholder="Price" />
            <Errors className="text-danger" model=".price" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 1 characters' }} />
        </Col> 
    </Row>
    <div className='py-3'>
    <Button color='success py-2' type="submit">Submit</Button>
    </div>
  </Form>
  <div>
     
    <Table className='text-center'>
        <thead>
            <tr>
            <th>Stock</th>
            <th>Buy/Sell/Watch</th>
            <th>Price</th>
            <th>Date</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <RenderTable showstocks={props.getStocks} deletestock={props.deleteStock} updateStock={props.updateStock}/>
        </tbody>
    </Table>
  </div>
</div> 
)

}

function RenderTable ({showstocks, deletestock, updateStock}) {

    
    const handleUpdate = (id,stockvalue) =>{
       
        stockvalue.isEdit = true
        updateStock(id,stockvalue)
    }
    const saveStock = (model,id,stockvalue,newValue,save) =>{
       

        if(model === "stocknameTable") 
        stockvalue.stocks = newValue 

        if(model === "buySellTable")
        stockvalue.buySellOrWatch = newValue

        if(model === "priceTable") 
        stockvalue.price = newValue 

        if(save === "save"){
            stockvalue.isEdit = false;
            updateStock(id,stockvalue) 
        }
       
    }

if(showstocks.length > 0){
    return(
        showstocks.map((value,key)=>(
            <tr className="watch-list-container" key={value.id}>
            <td> <Control.text className="form-control" model='.stocknameTable' id={value.id} onChange={(e,id)=>saveStock(id.model,value.id,value,e.target.value,'')}
            updateOn="blur" disabled={!value.isEdit} placeholder={value.stocks.toUpperCase()} className='watchlist-input'/> </td>
            <td> <Control.select  model='.buySellTable'  className='watchlist-input'  onChange={(e,id)=>saveStock(id.model,value.id,value,e.target.value,'')}
            disabled={!value.isEdit}>
                <option>{value.buySellOrWatch}</option>
                <option value='buy'>Buy</option>
                <option value='sell'>Sell</option>
                <option value='watch'>Watch</option>
            </Control.select> </td>
            <td> <Control.text model='.priceTable' placeholder= {value.price} onChange={(e,id)=>saveStock(id.model,value.id,value,e.target.value,'')}
             disabled={!value.isEdit} className='watchlist-input'/></td>
            <td>  {new Intl.DateTimeFormat('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                            hour: 'numeric', minute: 'numeric',hour12: true,
                        }).format(new Date(value.date))}
                
                </td>
             <td>
                <span className='watchlist-icon' onClick={() => handleUpdate(value.id,value)}><EditIcon/></span>
                <span className='watchlist-icon' onClick={() => deletestock(value.id)} ><DeleteIcon /></span>
                { value.isEdit ?
                 <span className='watchlist-icon' onClick={() => saveStock("",value.id,value,"","save")} ><FileCopyIcon /></span>
                 : null
                }
             </td>
            </tr>   
           
        )) 
    )
    }else{
        return(
            <tr>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
            </tr>
        )
    }
}