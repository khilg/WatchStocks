import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Header.css'

export const Header = () => {



    return (
    <nav className="nav__bar">
         <a  href="/home">Watch Stock</a>
        <ul>
            <li>
                <NavLink to="/home"  >Home</NavLink>
            </li>
            <li>
                <NavLink to="/calculator"  >Calculator</NavLink>
            </li>
            <li>
                <NavLink   to="/watchlist">WatchList</NavLink>
            </li>
            <li>
                <NavLink   to="/todos">Todo</NavLink>
            </li>
            {/* <li>
                <NavLink   to="/expensetracker">ExpenseTracker</NavLink>
            </li> */}
            <li>
                <NavLink   to="/stockblogs">Blogs</NavLink>
            </li>
        </ul>
</nav>

    )
}
