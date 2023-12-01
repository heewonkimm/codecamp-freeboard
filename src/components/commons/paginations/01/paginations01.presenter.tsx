import { PageMove, PageNum } from './paginations01.styles';
import type { IPaginations01UIProps } from './paginations01.types';
// import { useState, type MouseEvent } from 'react';

export default function Paginations01UI(props: IPaginations01UIProps): JSX.Element {
  return (
    <div>
      <PageMove onClick={props.onClickPrevPage}>{`<`}</PageMove>
      {new Array(5).fill('a').map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <PageNum key={index + props.startPage} id={String(index + props.startPage)} onClick={props.onClickPage} isActive={props.startPage + index === props.pageColorNum}>
              {index + props.startPage}
            </PageNum>
          )
      )}
      <PageMove onClick={props.onClickNextPage}>{`>`}</PageMove>
    </div>
  );
}
