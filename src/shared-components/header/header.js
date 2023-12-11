import React from 'react';

// CSS FILE
import './header.css';

//Importing Images
import logo  from  './../../assets/images/logo.png';

class Header extends React.Component {
    render (){
      return (
        <div>
          <div className="Siteheader">
            <div className="logoBox">
              <a href="#">
                <img src="{logo}" alt="Site Logo"/>
              </a>
            </div>
            <div className="siteActions">
              <span>Hi UserName</span>
              <a href="#">
                Logout
              </a>
            </div>
          </div>
        </div>
      )
    }
}

export default Header;