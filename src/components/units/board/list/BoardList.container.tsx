import { useQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { useRouter } from 'next/router';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '../../../../../src/commons/types/generated/types';
import type { MouseEvent } from 'react';

export default function BoardList(): JSX.Element {
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  const router = useRouter();

  const { data: dataBoardsCount } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardDetail = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target instanceof HTMLDivElement) void router.push(`/boards/detail/${e.target.id}`);
  };
  const onClickMoveToBoardNew = (): void => {
    void router.push(`/boards/new`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
    ></BoardListUI>
  );
}
