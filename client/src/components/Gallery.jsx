import React from 'react';
import styled from 'styled-components'
import Highlight from './gallery/Highlight.jsx';
import Strip from './gallery/Strip.jsx';
import Slider from './gallery/Slider.jsx';

const Overflow = styled.div`
  overflow: hidden;
  margin-right: 16px;
  position: relative;
`;
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url : props.media.images[0],
      isVideo: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(index) {
  if(index > 1 && index < 12) {
    this.setState({
      url: this.props.media.images[index - 2],
      isVideo: false
    })
  } else {
    if(index === 12) {
      index = 2;
    }
    this.setState({
      url: this.props.media.videos[index].video,
      isVideo: true
    })
  }
}

  render() {
    return(
      <Overflow>
        <Highlight url={this.state.url} isVideo={this.state.isVideo} />
        <Strip 
              videos={this.props.media.videos}
              screenshots={this.props.media.images} 
              onClick = {this.handleClick} 
              sliderPos={this.props.sliderPos}
        />
        <Slider sliderPos={this.props.sliderPos} onSliderMove = {this.props.onSliderMove}/>
      </Overflow>
    );
  }
}
 


export default Gallery;