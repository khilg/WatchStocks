import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';

export const Footer = () =>{
    return(
      <footer className="footer">
                <div className="copyRight__footer"> 
                <CopyrightIcon /> 
                <p>CopyRights issue on WatchStocks 2020.</p>
              </div>
      </footer>
    )
}