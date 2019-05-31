import React from 'react';

const styled = window.styled;

const Img = styled.img`
  width: 324px;
  height: 151px;
`;
class Cover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Img src={this.props.url}/>
    )
  }
}

export default Cover;