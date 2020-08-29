import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';

export const Footer = () =>{
    return(
      <footer className="footer">
            <div className="container text-center py-3">
                <span className="watchstock-footer "> <CopyrightIcon /> CopyRights issue on WatchStocks 2020.
              </span>
            </div>
      </footer>
    )
}