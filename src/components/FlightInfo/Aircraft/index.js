import React from 'react';

import './styles.css';
import LabelData from '../../LabelData';

const Aircraft = ({ aircraft }) => {
  return (
    <div className="aircraft">
      <LabelData label={'Registration'} data={aircraft.registration} />
      <LabelData label={'iata'} data={aircraft.iata} />
      <LabelData label={'icao'} data={aircraft.icao} />
      <LabelData label={'icao24'} data={aircraft.icao24} />
    </div>
  );
};

export default Aircraft;
