import React from 'react';
import moment from 'moment';
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
      <LabelData
        label={'Scheduled'}
        data={moment(details.scheduled).format('DD/MM/YYYY hh:mm')}
      />
      <LabelData
        label={'Estimated'}
        data={moment(details.estimated).format('DD/MM/YYYY hh:mm')}
      />
      <LabelData
        label={'Actual'}
        data={moment(details.actual).format('DD/MM/YYYY hh:mm')}
      />
      <LabelData
        label={'Estimated Runway'}
        data={moment(details.estimated_runway).format('DD/MM/YYYY hh:mm')}
      />
      <LabelData
        label={'Actual Runway'}
        data={moment(details.actual_runway).format('DD/MM/YYYY hh:mm')}
      />
    </div>
  );
};

export default FlightDetails;
