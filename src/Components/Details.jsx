import React from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const {value} = useParams();
  console.log(value);
  return (
    <div className='detail-page'>
      <h1>{value}</h1>
    </div>
  )
}
