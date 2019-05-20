import React from 'react';
import Gallery from "./Gallery.jsx";
import Description from "./Description.jsx";
import styled from 'styled-components';



const Wrapper = styled.section`
    padding: 0px 0px 12px;
    background: #C6D4DF;
    margin: 0px 231.5px;
    width: 940px;
    height: 444px;
  `;

 const DescWrapper = styled.div`
    float: right;
    width: 324px;
    height: 100%;
    background: blue;
 `;

 const GalleryWrapper = styled.div`
    float: left;
    width: 616px;
    height: 100%;
    background: yellow;
 `;
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <GalleryWrapper>
          <Gallery/>
        </GalleryWrapper>
        <DescWrapper>
          <Description/>
        </DescWrapper>
      </Wrapper>
    )
  }
  
}


export default App;