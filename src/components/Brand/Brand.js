import React from 'react'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/wave';

const brand = (props) => {
    return(
      <div className="brand">
          <h1>Nayra</h1>
          <P5Wrapper sketch={sketch}></P5Wrapper>
      </div>
    );
}

export default React.memo(brand)