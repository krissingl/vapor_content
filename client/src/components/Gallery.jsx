import React from 'react';
import styled from 'styled-components'
import Highlight from './gallery/Highlight.jsx';
import Strip from './gallery/Strip.jsx';
import Slider from './gallery/Slider.jsx';

const Overflow = styled.div`
  overflow: hidden;
  margin-right: 16px;
  position: relative;
  background: grey;
`;
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url : props.media.images[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(url) {
  this.setState({
    url
  })
}
  render() {
    return(
      <Overflow>
        <Highlight image={this.state.url} />
        <Strip screenshots={this.props.media.images} onClick = {this.handleClick}/>
        <Slider/>
      </Overflow>
    );
  }
}
 


export default Gallery;