import BoardCommentListItem from "./BoardCommentListItem";

export default function BoardCommentListUI(props) {

  return(
    <>
      {
        props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListItem  key={el._id} el={el} onClickDeleteComment={props.onClickDeleteComment}/>
        ))
      }
    </>

  )
}