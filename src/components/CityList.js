import React from 'react';
import {connect} from 'react-redux'
import CityCard from './CityCard';
import {addCities} from '../actions';
import { deleteCity } from '../actions';





class CityList extends React.Component{


    

    componentDidMount = ()=>{
          this.props.addCities();
          //console.log(this.props);
    }
    render()
    {
        //console.log("CityList");
        //console.log(this.props.data.cities);
        return(
          <div className="ui grid">
           {this.props.data.cities.map((city)=>{
                         console.log(city.isthere);
                         return <CityCard city={city} key={city.cityName}/>
                        
           })
           }
          </div>
        );
    }
}

const mapStateToProps = (state)=>{
    //console.log(state);
    return {data: state}
}
export default connect(mapStateToProps,{addCities,deleteCity})(CityList);