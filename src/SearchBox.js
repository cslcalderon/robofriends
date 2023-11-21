import React from 'react';
import './robotfriends.css'

const SearchBox = ({searchChange})=> {
    return(
        <div className= 'pa2'>
          <input 
            className='pa3 ba b--pink bg-light-yellow'
            type='search' 
            placeholder= 'search robots'
            onChange= {searchChange}
          /> 
        </div>
        
    );
}

export default SearchBox;