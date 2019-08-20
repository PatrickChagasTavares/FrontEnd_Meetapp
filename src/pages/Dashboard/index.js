import React from 'react';
import api from '~/services/api';
// import { Container } from './styles';

export default function Dashboard() {
  api.get('meetups');
  return (
    <div>
      <h1>Page Dashboard</h1>
    </div>
  );
}
