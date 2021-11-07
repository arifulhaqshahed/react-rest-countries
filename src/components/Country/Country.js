import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, flags } = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <h5>Capital: {capital}</h5>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;