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
    this.state = {
      gameInfo: {
        name: null,
        description: null,
        head_url: null,
        release_date: null,
        developer: null,
        publisher: null,
        negative_review_count: null,
        positive_review_count: null,
        recent_negative_count: null,
        recent_positive_count: null
      }
    }
  }

  componentDidMount() {
    fetch('/games/1')
    .then(response => response.json())
    .then(gameInfo => {
      this.setState({
        gameInfo
      }, () => console.log(this.state));
    });
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