import {combineReducers} from 'redux';

const getCities = (state=[],action)=>{
    switch(action.type)
    {
        case 'DELETE_CITY': 
            const newCities = [...state];
            let index;
            for(let i=0;i<newCities.length;i++)
            {
                //console.log(newCities[i],action.payload);
                if(newCities[i].cityName===action.payload.cityName)
                { index=i;
                  //console.log(newCities[i].isthere);
                }
                
            }
            newCities.splice(index,1);
           
            return newCities;



        case 'ADD_CITIES': return action.payload;
        default: return state;
    }

}
export default  combineReducers({
    cities: getCities
});