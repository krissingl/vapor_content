import React from 'react';
import Gallery from "./Gallery.jsx";
import Description from "./Description.jsx";
import styled from 'styled-components';

const Background = styled.div`
  background: #1b2838;
  color: #acb2b8;
  width: auto;
  margin: 0 2%;
`;

const Wrapper = styled.section`
    padding: 0px 0px 12px;
    background: #C6D4DF;
    margin: 0px 231.5px;
    width: 940px;
    height: 444px;
  `;

 const DescWrapper = styled.div`
    width: 308px;
    margin-left: 14px;
    float: right;
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
      <Background>
        <Wrapper>
          <GalleryWrapper>
            <Gallery/>
          </GalleryWrapper>
          <Description gameInfo={this.state.gameInfo}/>
        </Wrapper>
      </Background>
    )
  }
  
}


export default App;