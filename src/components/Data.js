import React from 'react';
import Households from './Households.js';

function Data(props) {
  return props.members.map((member, index) => (
    <Households {...member} key={index} />
  ));//passed down the prop (members) from main.js
}

export default Data;
