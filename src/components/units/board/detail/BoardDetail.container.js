import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";



export default function BoardDetail() {

  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  
  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.num
    }
  });

  const onClickDelete = (e) => {
    deleteBoard({
      variables: { boardId: e.target.id },
      refetchQueries: [{query: FETCH_BOARD}]
    })
    // console.log(e.target.id)
    // 삭제하기 그래프큐엘 안됨
  }

  return(
    <BoardDetailUI 
    data={data}
    onClickDelete={onClickDelete}
    ></BoardDetailUI>
  )
}