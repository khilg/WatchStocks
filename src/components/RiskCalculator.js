import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, FormFeedback, Col, Button, Table,Row } from 'reactstrap'


export const RiskCalculator = () =>{


    const [totalRisk, setTotalRisk] = useState({
        selectedRisk : '',
        monthlyriskamt : '',
        weeklyriskamt : '',
        dailyriskamt : '',
        riskcal : '',
        stopLoss : '',
        numberOfShares : '',
        currentFocused : '',
        showriskinput : false
    })
   

    const handleSubmit = (e) =>{
        //alert('SelectedRisk '+selectedRisk+' RiskAmoutnt ' + riskcal)
        const beforeSubmit = ValidateErrors(totalRisk)
        if(beforeSubmit.riskcalError ==='' && beforeSubmit.stopLossError === ''){
        if(totalRisk.selectedRisk==='monthlyrisk'){
            setTotalRisk({...totalRisk,monthlyriskamt : totalRisk.riskcal, weeklyriskamt :totalRisk.riskcal/4, dailyriskamt :totalRisk.riskcal/20, numberOfShares : (totalRisk.riskcal/20)/totalRisk.stopLoss })
        }else if(totalRisk.selectedRisk==='weeklyrisk'){
            setTotalRisk({...totalRisk,monthlyriskamt : totalRisk.riskcal*4, weeklyriskamt :totalRisk.riskcal, dailyriskamt :totalRisk.riskcal/5, numberOfShares : (totalRisk.riskcal/5)/totalRisk.stopLoss})

        }else if(totalRisk.selectedRisk==='dailyrisk'){
            setTotalRisk({...totalRisk,monthlyriskamt : totalRisk.riskcal*20, weeklyriskamt :totalRisk.riskcal*5, dailyriskamt :totalRisk.riskcal, numberOfShares : (totalRisk.riskcal)/totalRisk.stopLoss})
        }
    }else{
        alert('error')
    }

        e.preventDefault();
    }
  const ValidateErrors = (totalRisk) => {
    const errors = {
        riskcalError : '',
        stopLossError : ''
    }
        
      if(totalRisk.riskcal !== "" && totalRisk.riskcal <= 0){
         errors.riskcalError = 'Risk Amount cannot be Negative. Enter Positive Values Only';
    }
    if (totalRisk.stopLoss !== "" && totalRisk.stopLoss <= 0){
        errors.stopLossError = 'StopLoss Amount cannot be Negative. Enter Positive Values Only';
    }
      return errors;
  }
  
  
  const errors = ValidateErrors(totalRisk)

    const Showriskinput = ()=>{
        return( 
            <>
        <FormGroup className="pt-4">
            <Row>
             <Col md={3}>   
            <Label htmlFor="riskcal">Risk Amount :</Label>
            </Col>
            <Col md={3} >
            <Input type="number" invalid={errors.riskcalError !== ''}  autoFocus={totalRisk.currentFocused === 'riskcal' ? true : false}  name="riskcal" className='riskinput' value={totalRisk.riskcal} onChange={(e) => setTotalRisk({...totalRisk,riskcal : e.target.value,currentFocused : 'riskcal'})} placeholder="RiskAmount" />
            <FormFeedback>{errors.riskcalError}</FormFeedback>
            </Col>
            </Row>
        </FormGroup>  
        <FormGroup>
            <Row>
            <Col md={3} offset={3}>  
            <Label htmlFor="riskcal" >StopLoss Amount :</Label>
            </Col>
            <Col md={3} offset={3}>
            <Input type="number" invalid={errors.stopLossError !== ''} autoFocus={totalRisk.currentFocused === 'stopLoss' ? true : false}  name="stopLoss" className='riskinput' value={totalRisk.stopLoss} onChange={(e) => setTotalRisk({...totalRisk,stopLoss : e.target.value,currentFocused : 'stopLoss'})} placeholder="stopLoss Amount" />
            <FormFeedback>{errors.stopLossError}</FormFeedback>
            </Col>
            </Row>
        </FormGroup>     
            </>
     )}

return(

    <div className="container heigthVh">
    <Form className='' onSubmit={(e) => handleSubmit(e)}>
      <div className=''>
        <Button color='primary' className={totalRisk.selectedRisk === 'monthlyrisk'? 'outline' : null}  onClick={(e) => setTotalRisk({...totalRisk,selectedRisk : 'monthlyrisk', showriskinput : true}) }  >MonthlyRisk</Button>{'  '}
        <Button color="primary" className={totalRisk.selectedRisk === 'weeklyrisk'? 'outline' : null} onClick={(e) => setTotalRisk({...totalRisk,selectedRisk :'weeklyrisk', showriskinput : true}) } >WeeklyRisk</Button>{'  '}
        <Button color="primary" className={totalRisk.selectedRisk === 'dailyrisk'? 'outline' : null} onClick={(e) => setTotalRisk({...totalRisk,selectedRisk :'dailyrisk', showriskinput : true}) } >DailyRisk</Button>{'  '}
        </div>
            {totalRisk.showriskinput ? <Showriskinput /> : null}
        <Button color="success" className='riskbutton'>Submit</Button>
    </Form>
    <Table>
      <thead>
        <tr>
          <th>MonthlyRisk</th>
          <th>WeeklyRisk</th>
          <th>DailyRisk</th>
          <th>NumberOfShares</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>20 (For stopLoss = 5)</td>
        </tr>
        <tr>
            <td>{totalRisk.monthlyriskamt}</td>
            <td>{totalRisk.weeklyriskamt}</td>
            <td>{totalRisk.dailyriskamt}</td>
            <td>{totalRisk.numberOfShares}</td>
        </tr>
        </tbody>
      </Table>
</div>


)

}


