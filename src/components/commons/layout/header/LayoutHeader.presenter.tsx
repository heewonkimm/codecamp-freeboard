import { Header, Join, Utils } from './LayoutHeader.styles';
import type { ILayoutHeaderProps } from './LayoutHeader.types';

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <Header>
      <div onClick={props.onClickLogin}>
        <img src="/images/logo.png" alt="" />
      </div>
      <Utils>
        <li onClick={props.onClickLogo}>로그인</li>
        <Join>회원가입</Join>
      </Utils>
    </Header>
  );
}
