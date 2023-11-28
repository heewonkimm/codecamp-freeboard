import { Fragment } from 'react';
import { MenuItem, Navigation } from './LayoutNavigation.styles';
import type { ILayoutNavigationUIProps } from './LayoutNavigation.types';

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps): JSX.Element {
  const NAVIGATION_MENUS = [
    { name: '자유게시판', page: '/boards' },
    { name: '중고마켓', page: '/markets' },
    { name: '마이페이지', page: '/pages' },
  ];
  return (
    <Navigation>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Navigation>
  );
}
