import LayoutBanner from './banner/LayoutBanner.container';
import LayoutHeader from './header/LayoutHeader.container';
import LayoutNavigation from './navigation/LayoutNavigation.container';

export default function Layout(props): JSX.Element {
  return (
    <>
      {/* <LayoutHeader></LayoutHeader> */}
      {/* <LayoutBanner></LayoutBanner> */}
      {/* <LayoutNavigation></LayoutNavigation> */}
      {props.children}
    </>
  );
}
