import { useRouter } from 'next/router';
import LayoutNavigationUI from './LayoutNavigation.presenter';
import type { MouseEvent } from 'react';

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();
  const onClickMenu = (e: MouseEvent<HTMLDivElement>): void => {
    void router.push(e.target.id);
  };
  return <LayoutNavigationUI onClickMenu={onClickMenu}></LayoutNavigationUI>;
}
