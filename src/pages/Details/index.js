import React from 'react';

// import { Container } from './styles';

export default function Details({ history, match }) {
  const value = match.params.id;
  return (
    <div>
      <h1>Page Details + {value}</h1>;
    </div>
  );
}
