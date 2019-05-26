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
  left: ${props => props.stripPos};
  width: 1562px;
  position: absolute;
`;

const HighlightSelector = styled.div`
  position: absolute;
  left: ${props => props.selectorPos}
  background-image: url(https://store.steampowered.com/public/images/v5/game_highlight_activethumb.png);
  width: 116px;
  height: 77px;
  z-index: 50;
  top: -10px;
  pointer-events: none;
`;
const Screenshot = styled.div`
  height: 65px;
  width: 116px;
  float: left;
  cursor: pointer;
  text-align: center;
  margin: 2px;
  background-color: #000000;
  position: relative;
`;

const Img = styled.img`
  width: 115px;
  height: 65px
  border: none;
`;
class Strip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectorPos : '240px',
      stripPos: '0px'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
handleClick (url,index){
  this.props.onClick(url);
  this.setState({
    selectorPos: String(120*index) + 'px'
  })
}
  render() {
    return(
      <Wrapper>
        <StripScroll>
          <HighlightSelector selectorPos={this.state.selectorPos}></HighlightSelector>
          {
            this.props.screenshots.map((url, index) => {
              return <Screenshot onClick={() => this.handleClick(url, index)}><Img src={url}/></Screenshot>
            })
          }
        </StripScroll>
      </Wrapper>
    );
  }
}
 


export default Strip;