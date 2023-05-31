import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  display: flex;
  width: 60px;
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  /* background: #eaeaea; */
  background-color: #04284e;
  color: #fff;
  padding: 5px 10px;
  text-decoration: none;
`;

export const AdditionalInfo = styled.div`
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 30px;
  gap: 10px;
`;

export const AdditionalInfoTitle = styled.h4`
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  gap: 10px;
`;

export const LinkList = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const MovieItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(Link)`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #04284e;
  color: #fff;
  padding: 5px 10px;
  text-decoration: none;
`;
