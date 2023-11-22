import { useQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { useRouter } from 'next/router';
import { FETCH_BOARDS } from './BoardList.queries';
import type { IQuery, IQueryFetchBoardsArgs } from '../../../../../src/commons/types/generated/types';
import type { MouseEvent } from 'react';

export default function BoardList(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  const router = useRouter();

  const onClickMoveToBoardDetail = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target instanceof HTMLDivElement) void router.push(`/boards/detail/${e.target.id}`);
  };
  const onClickMoveToBoardNew = (): void => {
    void router.push(`/boards/new`);
  };

  return <BoardListUI data={data} onClickMoveToBoardDetail={onClickMoveToBoardDetail} onClickMoveToBoardNew={onClickMoveToBoardNew}></BoardListUI>;
}
