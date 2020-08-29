import React from 'react'
import {NavLink} from 'react-router-dom'

export const Header = () => {



    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
             <a className="navbar-brand" href="/home">Watch Stock</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                   <NavLink to="/home" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/riskcalculator" className="nav-link">RiskCalculator</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/ProfitLossCalculator">ProfitLossCalculator</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/watchlist">WatchList</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/todos">Todos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/expensetracker">ExpenseTracker</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/stockblogs">Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/cms">CMS</NavLink>
                </li>
            </ul>
        </div>
    </div> 
</nav>

    )
}
