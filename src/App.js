import {
  Form,
  FormItem,
  ShellBar,
  ThemeProvider,
  Input,
  Button
} from '@ui5/webcomponents-react';
import React from 'react';
import FlightInfo from './components/FlightInfo';

function App() {
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="Flights Information" />
      <Form>
        <FormItem label={'Identifier'}>
          <Input
            placeholder="example LAN1432..."
            style={{ width: '300px', marginRight: '20px' }}
          />
          <Button>Search</Button>
        </FormItem>
      </Form>
      <FlightInfo />
    </ThemeProvider>
  );
}

export default App;
