import styled from '@emotion/styled';
import { Carousel } from 'antd';

export const Wrapper = styled.div`
  position: relative;
`;

export const BannerCover = styled.div`
  position: absolute;
  top: 0;
  color: #fff;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  h2 {
    font-size: 48px;
  }
  p {
    font-size: 12px;
    width: 270px;
    text-align: center;
  }
`;
export const Banner = styled(Carousel)`
  /* border: 1px solid red; */
`;
