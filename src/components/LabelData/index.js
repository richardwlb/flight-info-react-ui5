import React from 'react';
import { Text, Label } from '@ui5/webcomponents-react';

const LabelData = ({ label, data }) => {
  return (
    <Label>
      <b>{label}:</b>
      <Text style={{ cursor: 'default' }}>{data}</Text>
    </Label>
  );
};

export default LabelData;
