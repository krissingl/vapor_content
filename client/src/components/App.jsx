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
    margin: 0px 231.5px;
    width: 940px;
    height: 444px;
    font-family: Arial, Helvetica, sans-serif;
  `;


 const GalleryWrapper = styled.div`
    float: left;
    width: 616px;
    height: 100%;
    background: #c6d4df;
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