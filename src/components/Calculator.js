import React from 'react'
import {ProfitLossCalculator} from './ProfitLossCalculator'
import {RiskCalculator} from './RiskCalculator'

export function Calculator() {
    return (
        <div>
             <div className='sidebar__cal'>
                ProfitLossCalculator :
            </div>
            <ProfitLossCalculator id="#profitLossCal" />
            <hr class="solid" />
            <div className='sidebar__cal'>
                RiskCalculator :
            </div>
            <RiskCalculator id="#riskcal"/>
        </div>
    )
}

