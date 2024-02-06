import type { IBoardCommentListUIProps } from './BoardCommentList.types';
import BoardCommentListItem from './BoardCommentListItem';
import InfiniteScroll from 'react-infinite-scroller';

export default function BoardCommentListUI(props: IBoardCommentListUIProps): JSX.Element {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => <BoardCommentListItem key={el._id} el={el} />) ?? <></>}
      </InfiniteScroll>
    </>
  );
}
