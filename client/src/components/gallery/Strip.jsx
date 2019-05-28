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

const MovieMaker = styled.div`
  position: absolute;
  top: 16px;
  left: 42px;
  width: 32px;
  height: 32px;
  background-image: url(https://store.steampowered.com/public/images/v5/ico_game_highlight_video.png);
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
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
handleClick(index){
  this.props.onClick(index);
  this.setState({
    selectorPos: String(120*index) + 'px'
  })
}
  render() {
    var stripPos = this.props.sliderPos * (-962/462) + 'px';
    var firstVideo = null;
    var secondVideo = null;
    var lastVideo = null;
    if(this.props.videos) {
      firstVideo = 
        <Screenshot onClick={() => this.handleClick(0)}><Img src={this.props.videos[0].thumbnail}/><MovieMaker/></Screenshot>;
      secondVideo =
      <Screenshot onClick={() => this.handleClick(1)}><Img src={this.props.videos[1].thumbnail}/><MovieMaker/></Screenshot>;
      lastVideo = 
        <Screenshot onClick={() => this.handleClick(12)}><Img src={this.props.videos[2].thumbnail}/><MovieMaker/></Screenshot>

    }
    return(
      <Wrapper>
        <StripScroll stripPos={stripPos} >
          <HighlightSelector selectorPos={this.state.selectorPos}></HighlightSelector>
          {firstVideo}
          {secondVideo}
          { 
            this.props.screenshots.map((url, index) => {
              return <Screenshot onClick={() => this.handleClick(index + 2)}><Img src={url}/></Screenshot>
            })
          }
          {lastVideo}
        </StripScroll>
      </Wrapper>
    );
  }
}
 


export default Strip;