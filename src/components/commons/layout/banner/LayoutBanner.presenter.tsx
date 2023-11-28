import { Banner, BannerCover, Wrapper } from './LayoutBanner.styles';

export default function LayoutBannerUI(): JSX.Element {
  return (
    <Wrapper>
      <BannerCover>
        <h2>carousel Design</h2>
        <p>
          캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고 각각은 이미지와 약간의 텍스트로
          구성되어있다고 합니다.
        </p>
      </BannerCover>
      <Banner autoplay>
        <div>
          <img src="/images/banner01.png" alt="" />
        </div>
        <div>
          <img src="/images/banner02.png" alt="" />
        </div>
        <div>
          <img src="/images/banner02.png" alt="" />
        </div>
      </Banner>
    </Wrapper>
  );
}
