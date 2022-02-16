/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Title, Badge, Icon, Bar } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/flight';

import FlightDetails from './FlightDetails';
import Airline from './Airline';
import Aircraft from './Aircraft';
import Flight from './Flight';

import './styles.css';

const FlightInfo = ({ data }) => {
  return data ? (
    data.data.map((flight) => (
      <Card key={flight?.flight?.number} className="card-wrapper">
        <Title style={{ margin: '1rem' }} level="H2">
          <Icon style={{ marginRight: '0.2rem' }} name="flight" />
          {`Flight ${flight.flight.icao} - ${flight.flight_date}`}
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
        <Bar style={{ marginTop: '-25px' }} />
        <div className="flight-details">
          <FlightDetails details={flight.departure} title="Departure" />
          <FlightDetails details={flight.arrival} title="Arrival" />
        </div>
      </Card>
    ))
  ) : (
    <h4>No data.</h4>
  );
};

export default FlightInfo;
