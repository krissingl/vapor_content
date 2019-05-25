import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #000000;
  overflow: hidden;
  position: relative;
`;

const Img = styled.img`
  width: 600px;
  height: 337px;
`;
class Highlight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Wrapper>
        <Img src={this.props.image}/>
      </Wrapper>
    );
  }
}
 


export default Highlight;