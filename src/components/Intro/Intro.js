import React from 'react'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/wave';

const intro = (props) => {
    return(
      <div className="intro">
        <h1>Nayra</h1>
        <div className="card">
          <p className="title">{props.title}</p>
          <p>{props.description}</p>
          <p><time>{props.date}</time></p>
        </div>
        <P5Wrapper sketch={sketch}></P5Wrapper>
      </div>
    );
}

export default React.memo(intro)