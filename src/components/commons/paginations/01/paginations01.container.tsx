import styled from '@emotion/styled';
import type { IPagination01Props } from './paginations01.types';
import { useState, type MouseEvent } from 'react';

const PageNum = styled.span`
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;
const PageMove = styled.span`
  padding: 10px;
  cursor: pointer;
`;

export default function Paginations01(props: IPagination01Props): JSX.Element {
  const [startPage, setStartPage] = useState(12490);
  const lastPage = Math.ceil(props.count ?? 5 / 5);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    const activedPage = Number(e.currentTarget.id);
    props.refetch({ page: activedPage });
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
    <div>
      <PageMove onClick={onClickPrevPage}>{`<`}</PageMove>
      {new Array(5).fill('a').map(
        (_, index) =>
          startPage + index <= lastPage && (
            <PageNum key={index + startPage} id={String(index + startPage)} onClick={onClickPage}>
              {index + startPage}
            </PageNum>
          )
      )}
      <PageMove onClick={onClickNextPage}>{`>`}</PageMove>
    </div>
  );
}
