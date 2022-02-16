import React from 'react';

import './styles.css';
import LabelData from '../../LabelData';

const Flight = ({ flight }) => {
  return (
    <div className="flight">
      <LabelData label={'Number'} data={flight.number} />
      <LabelData label={'iata'} data={flight.iata} />
      <LabelData label={'icao'} data={flight.icao} />
    </div>
  );
};

export default Flight;
