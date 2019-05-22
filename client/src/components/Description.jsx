import React from 'react';
import styled from 'styled-components';
import Cover from './Cover.jsx';
import Snippet from './Snippet.jsx';
import Info from './Info.jsx';
import Tags from './Tags.jsx';


const Wrapper = styled.div`
  width: 324px;
  float: right;
`;
class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Wrapper>
        <Cover url={this.props.gameInfo.head_url}/>
        <Snippet snippet={this.props.gameInfo.description}/>
        <Info 
          developer={this.props.gameInfo.developer}
          publisher={this.props.gameInfo.publisher}
          date={this.props.gameInfo.release_date}
          positiveReviews={this.props.gameInfo.positive_review_count}
          negativeReviews={this.props.gameInfo.negative_review_count}
          recentPositiveReviews={this.props.gameInfo.recent_negative_count}
          recentNegativeReviews={this.props.gameInfo.recent_positive_count}
        />
        <Tags/>
      </Wrapper>
    )
  }
}


export default Description;