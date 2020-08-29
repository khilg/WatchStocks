import React from 'react'
import '../Home.css'
import TableChartIcon from '@material-ui/icons/TableChart';
import BookIcon from '@material-ui/icons/Book';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {Link} from 'react-router-dom'
export const Home = () => {
    return (
      <>
        <header className="home-header">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                  <div className="col-md-12 text-center">
                      <h2>Watch your stock Here.</h2>
                      <h4><i>“Games are won by players who focus on the playing field – not by those whose eyes are glued to the scoreboard.”</i></h4>
                  </div>
              </div>
            </div>
        </header>
        <section className="home-message h-100 py-3">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-md-12 text-center">
                   <h2>Message center</h2>
                </div>
            </div>
            <div className="row h-100 py-2">
              <div className="col-md-4">
                  <div className="card align-items-center">
                     <Link to="/ProfitLossCalculator"><TableChartIcon className="home-icons" /></Link> 
                      <div className="card-body">
                        <h5 className="card-title">Calculator</h5>
                        <p className="card-text">Do some quick calculation of your Risk and your profif/loss.</p>
                      </div>
                    </div>
              </div>
              <div className="col-md-4">
                     <div className="card align-items-center">
                     <Link to='/watchlist'><ListAltIcon className="home-icons" /></Link>
                      <div className="card-body">
                        <h5 className="card-title">Add watchList</h5>
                        <p className="card-text">Add your favorite stocks to your watch with price you want to trade.</p>
                      </div>
                    </div>
              </div>
              <div className="col-md-4">
                    <div className="card align-items-center">
                    <Link to='/stockblogs'><BookIcon className="home-icons" /></Link>
                      <div className="card-body">
                        <h5 className="card-title">Blogs</h5>
                        <p className="card-text">Know the latest strategies and blogs of the Stock Market now in Blogs Section.</p>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </section>
     </>
    );
  }
