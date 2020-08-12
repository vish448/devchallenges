import React, { Children } from 'react';
import './layout.css';

const Layout = ({children}) => {

        return(
            <>

    <div className="appWrapper">
    <div className="sideNav">
      <header className="header">
          <span>Dev</span>challenges.io
      </header>
      <nav className="navigation">
          <a href="#">Colors</a>
          <a href="#">Typography</a>
          <a href="#">Spaces</a>
          <a href="#" className="active">Buttons</a>
          <a href="#">Inputs</a>
          <a href="#">Grid</a>
      </nav>
    </div>
    <div className="contentWrapper">
      <h1>Buttons</h1>
      {children}
      
      <footer>Vishang Soni</footer>
    </div>
  </div>

            </>
        )
}

export default Layout


