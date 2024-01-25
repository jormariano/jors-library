import React from 'react';

const Genre = () => {
  return (
    <div>
      <h2>Genre</h2>
      <div
        id="fantasia"
        style={{ height: '600px', background: 'blue', color: 'white' }}
      >
        <h3>Fantasia</h3>
      </div>
      <div
        id="romance"
        style={{ height: '600px', background: 'blue', color: 'white' }}
      >
        <h3>Romance</h3>
      </div>
      <div id="terror">
        <h3>Terror</h3>
      </div>
    </div>
  );
};

export default Genre;
