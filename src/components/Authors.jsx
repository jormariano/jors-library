import React from 'react';

const Authors = () => {
  return (
    <>
      <h2>Authors</h2>
      <div>
        <div
          id="af"
          style={{ height: '600px', background: 'blue', color: 'white' }}
        >
          <h3>A-F</h3>
        </div>
        <div id="gl">
          <h3>G-L</h3>
        </div>
        <div
          id="mq"
          style={{ height: '600px', background: 'blue', color: 'white' }}
        >
          <h3>M-Q</h3>
        </div>
        <div id="rw">
          <h3>R-W</h3>
        </div>
        <div id="xz">
          <h3>X-Z</h3>
        </div>
      </div>
    </>
  );
};

export default Authors;
