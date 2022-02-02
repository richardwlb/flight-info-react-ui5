import React from 'react';
import { Card, Title, Badge, Icon } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/flight';

import FlightDetails from './FlightDetails';
import Airline from './Airline';
import Aircraft from './Aircraft';
import Flight from './Flight';

import './styles.css';

import dataFlight from '../../mocks/flight.json';

console.log('*- dataFlight', dataFlight);

const FlightInfo = () => {
  return dataFlight.data.map((flight) => (
    <Card key={flight.iata} className="card-wrapper">
      <Title style={{ margin: '1rem' }} level="H2">
        <Icon style={{ marginRight: '0.2rem' }} name="flight" />
        {`Flight ${flight.flight.iata} - ${flight.flight_date}`}
      </Title>

      <Badge
        style={{ marginLeft: '1rem' }}
        colorScheme={flight.flight_status === 'landed' ? '7' : '1'}
      >
        {flight.flight_status}
      </Badge>
      <Airline airline={flight.airline} />
      {flight.aircraft && <Aircraft aircraft={flight.aircraft} />}
      <Flight flight={flight.flight} />
      <div className="flight-details">
        <FlightDetails details={flight.departure} title="Departure" />
        <FlightDetails details={flight.arrival} title="Arrival" />
      </div>
    </Card>
  ));
};

export default FlightInfo;
