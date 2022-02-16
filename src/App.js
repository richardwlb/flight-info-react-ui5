/* eslint-disable no-unused-vars */
import {
  Form,
  FormItem,
  ShellBar,
  ThemeProvider,
  Input,
  Button,
  Toast,
  Loader
} from '@ui5/webcomponents-react';
import React, { useRef, useState } from 'react';
import FlightInfo from './components/FlightInfo';
import api from './services/api';

import './app.css';

function App() {
  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(false);
  const toast = useRef();

  const onSearch = async () => {
    let searchString;
    setisLoading(true);

    if (search.length <= 3) {
      searchString = { airline_icao: search };
    } else {
      searchString = { flight_icao: search };
    }

    try {
      const result = await api.get('flights', {
        params: {
          ...searchString,
          access_key: '590ac54b792e61cacc0ceea1078db67f'
        }
      });
      setData(result.data);
      setisLoading(false);
    } catch (error) {
      console.log('*- error', error);
      toast.current.show();
      setisLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <ShellBar primaryTitle="Flights Information" />
      <Form className="form-search">
        <FormItem label={'Identifier'}>
          <Input
            placeholder="example LAN1432... or just LAN"
            style={{ width: '300px', marginRight: '20px' }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button onClick={() => onSearch()}>Search</Button>
        </FormItem>
      </Form>
      <Toast ref={toast}>There was an error on the connection</Toast>

      {isLoading ? <Loader /> : <FlightInfo data={data} />}
    </ThemeProvider>
  );
}

export default App;
