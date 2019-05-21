import React from 'react';
import styled from 'styled-components';
import Cover from './Cover.jsx';
import Snippet from './Snippet.jsx';
import Info from './Info.jsx';
import Tags from './Tags.jsx';


const Wrapper = styled.div`
  width: 308px;
  margin-left: 14px;
  float: right;
  background: blue;
`;
class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Wrapper>
        <Cover/>
        <Snippet/>
        <Info/>
        <Tags/>
      </Wrapper>
    )
  }
}


export default Description;