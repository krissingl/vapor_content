import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 12px;
  color: #556772;
  margin-top: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  line-height: 16px;
`;

const ReleaseDateRow = styled.div`
  display: flex;
  line-height: 16px;
  padding-top: 9px;
  padding-bottom: 13px;
`;

const SubtitleColumn = styled.div`
  text-transform: uppercase;
  font-size: 10px;
  padding-right: 10px;
  min-width: 94px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


const DataColumn = styled.div`
  color: #66C0F4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ReleaseDateColumn = styled.div`
  color: #8f98a0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Wrapper>
        <InfoRow>
          <SubtitleColumn>Recent Reviews</SubtitleColumn>
          <DataColumn>Mostly Positive</DataColumn>
        </InfoRow>
        <InfoRow>
          <SubtitleColumn>all reviews</SubtitleColumn>
          <DataColumn>Very Positive</DataColumn>
        </InfoRow>
        <ReleaseDateRow>
          <SubtitleColumn>release date</SubtitleColumn>
          <ReleaseDateColumn>{this.props.date}</ReleaseDateColumn>
        </ReleaseDateRow>
        <InfoRow>
          <SubtitleColumn>developer</SubtitleColumn>
          <DataColumn>{this.props.developer}</DataColumn>
        </InfoRow>
        <InfoRow>
          <SubtitleColumn>publisher</SubtitleColumn>
          <DataColumn>{this.props.publisher}</DataColumn>
        </InfoRow>
      </Wrapper>
    )
  }
}

export default Info;