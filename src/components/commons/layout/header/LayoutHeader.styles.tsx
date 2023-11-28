import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  max-width: 1200px;
  height: 152px;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 0 auto;
`;

export const Utils = styled.ul`
  display: flex;
  gap: 20px;
  li {
    list-style: none;
    padding: 10px;
    a {
      color: #555;
      text-decoration: none;
    }
  }
`;

export const Join = styled.li`
  background-color: #ffd600;
  border-radius: 10px;
`;
