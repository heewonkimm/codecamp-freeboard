import BoardDetail from "../../../../src/components/units/board/detail/BoardDetail.container.tsx";
import BoardCommentList from "../../../../src/components/units/comment/list/BoardCommentList.container.tsx";
import BoardCommentWrite from "../../../../src/components/units/comment/write/BoardCommentWrite.container.tsx";


export default function BoardDetailPage() {

  return(
    <div style={{width: "1200px", margin: "0 auto 150px"}}>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </div>
  )
}