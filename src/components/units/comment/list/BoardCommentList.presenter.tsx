import BoardCommentListItem from './BoardCommentListItem';

export default function BoardCommentListUI(props): JSX.Element {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListItem
          key={el._id}
          el={el}
          onClickOpenModal={props.onClickOpenModal}
          isDeleteModalOpen={props.isDeleteModalOpen}
          onClickDeleteComment={props.onClickDeleteComment}
          onChangePassword={props.onChangePassword}
          onClickDeleteCancel={props.onClickDeleteCancel}
        />
      ))}
    </>
  );
}
