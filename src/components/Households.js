import React from 'react';

function Households({ firstName, lastName, description, favoriteFruit }) {
  return (
    <div className="tile">
      <div className="tile-info">
        <div className="tile-name">
          {firstName} {lastName}
        </div>
        <div className="tile-desc">
          Description:{' '}
          <span className="ds-u-font-weight--normal">{description}</span>
        </div>
        <div className="tile-favfruit">
          Favorite fruit:{' '}
          <span className="ds-u-font-weight--normal">{favoriteFruit}</span>
        </div>
      </div>
    </div>
  );
}

export default Households;
