import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 25px 0;
  background-color: #04284e;
  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  margin-left: 20px;
`;
