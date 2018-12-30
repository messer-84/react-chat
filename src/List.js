import React from 'react';
import uuidv from 'uuid';

const data = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
];

const List = () => (
  <ul>
    {data.map(item => {
      let keyId = uuidv();
      return (
        <li key={keyId}>{item} {keyId}</li>
      )
    })}
  </ul>
);

export default List;
