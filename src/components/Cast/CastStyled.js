import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 10px;
  margin-top: 30px;
  margin-bottom: 0;
  padding-left: 20px;
  list-style: none;
  margin-right: auto;
`;
