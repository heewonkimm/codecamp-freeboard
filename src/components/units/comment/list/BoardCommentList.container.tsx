import { useQuery } from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import { useRouter } from 'next/router';
import type { IQuery, IQueryFetchBoardCommentsArgs } from '../../../../../src/commons/types/generated/types';
import { FETCH_COMMENT } from './BoardCommentList.queries';

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(FETCH_COMMENT, {
    variables: {
      boardId: String(router.query.num),
    },
  });

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        };
      },
    });
  };

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore}></BoardCommentListUI>;
}
