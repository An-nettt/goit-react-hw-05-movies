import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

export const Poster = styled.img`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-block-end: 0.67em;
  margin-block-start: 0.67em;
`;

export const Scores = styled.p`
  display: flex;
  gap: 16px;
  margin-top: 10px;
  margin-bottom: 35px;
`;

export const ScoresNumber = styled.span`
  font-weight: 600;
`;

export const GenresEl = styled.div`
  margin-top: 5px;
  margin-bottom: 35px;
  display: flex;
  gap: 5px;
`;

export const Genre = styled.p`
  border: 1px solid #04284e;
  border-radius: 4px;
  /* background-color: #04284e; */
  color: #04284e;
  padding: 5px 12px;
`;

export const Overview = styled.p`
  margin-top: 5px;
`;
