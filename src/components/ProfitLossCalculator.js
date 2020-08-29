import React,{useState} from 'react'
import {Form, Input, Button, Row, Col,FormFeedback, FormGroup, Table} from 'reactstrap'


export const ProfitLossCalculator = () =>{

    const [profitLoss,setProfitLoss] = useState({
        dailyRisk : '',
        buyPrice : '',
        sellPrice : '',
        stopLoss : '',
        noOfShares : '',
        profitLoss : '',
        profitLossWithTax  : '',
        currentFocused : ''
    })

    const ValidateErrors = profitLoss => {
        const error = {
            dailyRiskError : '',
            buyPriceError : '',
            sellPriceError : '',
            stopLossError : ''
        }
        

        if(profitLoss.dailyRisk !== '' && profitLoss.dailyRisk <= 0)
            error.dailyRiskError = 'Daily Risk cannot be negative. Enter Positive Numbers'
        
        if(profitLoss.buyPrice !== '' && profitLoss.buyPrice <= 0)
        error.buyPriceError = 'Buy Price cannot be negative. Enter Positive Numbers'

        if(profitLoss.sellPrice !== '' && profitLoss.sellPrice <= 0)
        error.sellPriceError = 'Sell Price cannot be negative. Enter Positive Numbers'

        if(profitLoss.stopLoss !== '' && profitLoss.stopLoss <= 0)
        error.stopLossError = 'StopLoss cannot be negative. Enter Positive Numbers'    
            
        return error;
    }

    const errors = ValidateErrors(profitLoss);

    const handleSubmit = e =>{
        e.preventDefault();
        const errors = ValidateErrors(profitLoss)
        if(errors.dailyRiskError === ''){
        var noOfSharesCal = profitLoss.dailyRisk/profitLoss.stopLoss ;
        var profitLossCal = (profitLoss.sellPrice - profitLoss.buyPrice)*noOfSharesCal;
        var totalTurnOver = (Number(profitLoss.buyPrice) + Number(profitLoss.sellPrice))*noOfSharesCal;
        var stt = (profitLoss.sellPrice * noOfSharesCal)* 0.00025;
        var brokerage = totalTurnOver * 0.00033
        var gst = (stt + brokerage)*0.18
        var profitLossWithTaxCal = profitLossCal - gst - brokerage - stt;
        setProfitLoss({...profitLoss,noOfShares:noOfSharesCal,profitLoss:profitLossCal,profitLossWithTax : profitLossWithTaxCal})
    }else{
        alert('Error')
    }
}

    return(
        <div>
            <Form onSubmit={(e) => handleSubmit(e)} className="container py-4 text-white">
            <Row>
            <Col md={5}>
            <FormGroup>
                    <label htmlFor='dailyRisk'>DailyRisk :</label>
                    <Input type='number' placeholder='Daily Risk Amount' 
                    onChange={ e => setProfitLoss({...profitLoss,dailyRisk:e.target.value}) }
                    value = {profitLoss.dailyRisk}
                    invalid = {errors.dailyRiskError !== ''} />
                     <FormFeedback>{errors.dailyRiskError}</FormFeedback>
            </FormGroup>
            <FormGroup>
                    <label htmlFor='buyPrice'>BuyPrice :</label>
                    <Input type='number' placeholder='Buy Price' 
                    onChange={ e => setProfitLoss({...profitLoss,buyPrice:e.target.value}) }
                    value = {profitLoss.buyPrice}
                    invalid = {errors.buyPriceError !== ''} />
                    <FormFeedback>{errors.buyPriceError}</FormFeedback>
            </FormGroup>
            </Col>
            <Col md={5}>
            <FormGroup>
                    <label htmlFor='sellprice'>SellPrice :</label>
                    <Input type='number' placeholder='Sell Price' 
                    onChange={ e => setProfitLoss({...profitLoss,sellPrice:e.target.value}) }
                    value = {profitLoss.sellPrice}
                    invalid = {errors.sellPriceError !== ''} />
                    <FormFeedback>{errors.sellPriceError}</FormFeedback>
            </FormGroup>
            <FormGroup>
                    <label htmlFor='sellprice'>StopLoss :</label>
                    <Input type='number' placeholder='Stop Loss' 
                    onChange={ e => setProfitLoss({...profitLoss,stopLoss:e.target.value}) }
                    value = {profitLoss.stopLoss}
                    invalid = {errors.stopLossError !== ''} />
                    <FormFeedback>{errors.stopLossError}</FormFeedback>
            </FormGroup>
            </Col>
            </Row>
            <FormGroup>
                <Row>
                    <Col md={6} >
                    <Button color='success' className='float-right'>Submit</Button>
                    </Col>
                </Row>
            </FormGroup>
            </Form>
            <Table className="container">
                <thead>
                    <th>DailyRisk</th>
                    <th>BuyPrice</th>
                    <th>SellPrice</th>
                    <th>StopLoss</th>
                    <th>No.OfShares</th>
                    <th>Profit/Loss</th>
                    <th>Profit/Loss(With Tax)</th>
                </thead>
                <tbody>
                <tr>
                    <td>100</td>
                    <td>100</td>
                    <td>110</td>
                    <td>5</td>
                    <td>20</td>
                    <td>200</td>
                    <td>197.71</td>
                    </tr>
                    <tr>
                    <td>{profitLoss.dailyRisk}</td>
                    <td>{profitLoss.buyPrice}</td>
                    <td>{profitLoss.sellPrice}</td>
                    <td>{profitLoss.stopLoss}</td>
                    <td>{profitLoss.noOfShares}</td>
                    <td>{profitLoss.profitLoss}</td>
                    <td>{profitLoss.profitLossWithTax}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

