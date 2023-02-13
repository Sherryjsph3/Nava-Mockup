import React from 'react';
import Households from './Households.js';
import * as SVGLoaders from 'svg-loaders-react';

function Data(props) {
  const loaded = () => {
    return props.members.map((member, index) => (
      <Households {...member} key={index} />
    )); //passed down the prop (members) from main.js
  };
  const loading = () => {
    return <SVGLoaders.Puff />;
  };

  return props.members ? loaded() : loading();
}

export default Data;
