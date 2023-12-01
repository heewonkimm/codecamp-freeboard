import styled from '@emotion/styled';
import type { IPageProps } from './paginations01.types';

export const PageNum = styled.span`
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  color: ${(props: IPageProps) => (props.isActive ? 'blue' : 'black')};
  font-weight: ${(props: IPageProps) => (props.isActive ? '800' : 300)};
  &:hover {
    opacity: 0.4;
  }
`;
export const PageMove = styled.span`
  padding: 10px;
  cursor: pointer;
`;
