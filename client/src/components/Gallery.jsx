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
  }

  render() {
    return(
      <Overflow>
        <Highlight image={this.props.media.images[0]}/>
        Gallery
      </Overflow>
    );
  }
}
 


export default Gallery;