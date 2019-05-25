import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  height: 18px;
  display: block;
`;

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Wrapper>
        slider
      </Wrapper>
    );
  }
}
 


export default Slider;