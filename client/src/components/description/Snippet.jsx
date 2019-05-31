import React from 'react';
const styled = window.styled;
const Wrapper = styled.div`
  max-height: 111px;
  overflow: hidden;
  font-size: 13px;
  line-height: 18px;
  padding-right: 16px;
`;
class Snippet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Wrapper>
        {this.props.snippet}
      </Wrapper>
    )
  }
}

export default Snippet;