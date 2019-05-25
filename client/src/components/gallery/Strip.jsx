import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 4px;
  position: relative;
  height: 69px;
  margin-bottom: 4px;
  z-index: 40;
`;
const StripScroll = styled.div`
  width: 1562px;
  position: absolute;
`;
const Screenshot = styled.div`
  float: left;
  cursor: pointer;
  text-align: center;
  margin: 2px;
  background-color: #000000;
  position: relative;
`;

const Img = styled.img`
  height: 65px;
  width: 116px;
  border: none;
`;
class Strip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Wrapper>
        <StripScroll>
          {
            this.props.screenshots.map(url => {
              return <Screenshot><Img src={url}/></Screenshot>
            })
          }
        </StripScroll>
      </Wrapper>
    );
  }
}
 


export default Strip;