import React from 'react';
import Highlight from './Highlight.jsx';
import Gallery from "./Gallery.jsx";
import Description from "./Description.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Highlight/>
        <Gallery/>
        <Description/>
      </div>
    )
  }
  
}


export default App;