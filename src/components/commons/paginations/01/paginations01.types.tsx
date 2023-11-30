import type { ApolloQueryResult } from '@apollo/client';
import type { IQuery, IQueryFetchBoardsArgs } from '../../../../commons/types/generated/types';

export interface IPagination01Props {
  refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
  count?: number;
  // onClickPage: (e: MouseEvent<HTMLSpanElement>) => void;
}
