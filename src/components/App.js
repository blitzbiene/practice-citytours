import React from 'react';


import Header from './Header';
import CityList from './CityList';

class App extends React.Component{



    render(){
        return(
            <div className="ui container">
                <Header/>
                <CityList/>
            </div>
        );
    }
}


export default App;