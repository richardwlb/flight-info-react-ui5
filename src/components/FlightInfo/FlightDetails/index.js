import React from 'react';
import { Title } from '@ui5/webcomponents-react';

import './styles.css';
import LabelData from '../../LabelData';

const FlightDetails = ({ details, title }) => {
  return (
    <div className="card-content">
      <Title level="H4">{title}</Title>
      <LabelData
        label={'Airport'}
        data={`${details.iata} - ${details.airport}`}
      />
      <LabelData label={'Terminal'} data={details.terminal} />
      <LabelData label={'Gate'} data={details.gate} />
      {details.baggage && (
        <LabelData label={'Baggage'} data={details.baggage} />
      )}
      <LabelData label={'delay'} data={details.delay} />
      <LabelData label={'Scheduled'} data={details.scheduled} />
      <LabelData label={'Estimated'} data={details.estimated} />
      <LabelData label={'Actual'} data={details.actual} />
      <LabelData label={'Estimated Runway'} data={details.estimated_runway} />
      <LabelData label={'Actual Runway'} data={details.actual_runway} />
    </div>
  );
};

export default FlightDetails;
