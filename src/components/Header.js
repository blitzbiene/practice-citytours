import React from 'react';



class Header extends React.Component{


    render(){
        return(
           <div className="ui menu">
               <div className="header item">
                   <img src="https://cdn2.vectorstock.com/i/1000x1000/42/91/travel-agency-tourism-app-and-trips-logo-vector-21164291.jpg"
                    alt="logo"/>
               </div>
               <a className="item">Home</a>
               <a className="item">About</a>
               <a className="item active">Tours</a>
          </div>
        );
    }
}

export default Header;