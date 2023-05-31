import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  margin-top: 20px;
  padding-left: 10;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
`;

export const MovieTitle = styled.p`
  margin-bottom: 10px;
  color: #0a0a23;
`;
