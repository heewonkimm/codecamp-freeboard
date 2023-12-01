import Paginations01UI from './paginations01.presenter';
import type { IPagination01Props } from './paginations01.types';
import type { MouseEvent } from 'react';
import { useState } from 'react';

export default function Paginations01(props: IPagination01Props): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [pageColorNum, setPageColorNum] = useState(1);
  const lastPage = Math.ceil(props.count ?? 5 / 5);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    const activedPage = Number(e.currentTarget.id);
    void props.refetch({ page: activedPage });
    setPageColorNum(activedPage);
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    void props.refetch({ page: startPage - 5 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      void props.refetch({ page: startPage + 5 });
    }
  };

  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      pageColorNum={pageColorNum}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    ></Paginations01UI>
  );
}
