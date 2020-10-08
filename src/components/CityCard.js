import React from 'react';
import { connect } from 'react-redux';
import { deleteCity } from '../actions';

class CityCard extends React.Component {


    removeCity = (city) => {
        console.log("hi");
        this.props.deleteCity(city);
    }
    toggleInfo = (event)=>{
          try { event.target.nextSibling.classList.toggle("active");}
          catch{console.log("error");}
    }

    render() {
        console.log("card",this.props.city.isthere);
        if (this.props.city.isthere) return (
            <div className="five wide column">
                <div className="ui card">
                    <div className="image">
                        <img src={this.props.city.img} alt={this.props.city.cityName}/>
                    </div>
                    <div className="content">
                        <a className="header">{this.props.city.cityName}</a>
                        <div className="meta">
                            <span className="date" style={{ color: 'black' }}>{this.props.city.tourName}</span>
                        </div>
                    </div>
                    <div className="extra content">


                        <div className="ui styled fluid accordion">
                            <div className="title" style={{ color: 'black' }} onClick={(event)=>this.toggleInfo(event)}>
                                <i className="dropdown icon"></i>
                          More Info
                       </div>
                            <div className="active content" style={{ color: 'black' }}>
                                <p>{this.props.city.info}</p>
                            </div>
                        </div>
                    </div>
                    <button className="negative ui button" onClick={() => this.removeCity(this.props.city)}>Remove</button>
                </div>
            </div>
        );

        else return null;
        

    }
}
export default connect(null, { deleteCity })(CityCard);