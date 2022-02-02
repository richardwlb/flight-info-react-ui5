import React from 'react';

import './styles.css';
import LabelData from '../../LabelData';

const Airline = ({ airline }) => {
  return (
    <div className="airline">
      <LabelData label={'Airline'} data={airline.name} />
      <LabelData label={'iata'} data={airline.iata} />
      <LabelData label={'icao'} data={airline.icao} />
    </div>
  );
};

export default Airline;
