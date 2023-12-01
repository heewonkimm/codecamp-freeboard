import type { ApolloQueryResult } from '@apollo/client';
import type { IQuery, IQueryFetchBoardsArgs } from '../../../../commons/types/generated/types';
import type { MouseEvent } from 'react';

export interface IPagination01Props {
  refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
  count?: number;
}

export interface IPaginations01UIProps {
  startPage: number;
  lastPage: number;
  pageColorNum: number;
  onClickPage: (e: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export interface IPageProps {
  isActive?: boolean;
}
