import React from 'react';

function Households({ name, description, fruit }) {
  return (
    <div className="tile">
      <div className="tile-info">
        <div className="tile-name">{name}</div>
        <div className="tile-desc">
          Description:{' '}
          <span className="ds-u-font-weight--normal">{description}</span>
        </div>
        <div className="tile-favfruit">
          Favorite fruit:{' '}
          <span className="ds-u-font-weight--normal">{fruit}</span>
        </div>
      </div>
    </div>
  );
}

export default Households;
