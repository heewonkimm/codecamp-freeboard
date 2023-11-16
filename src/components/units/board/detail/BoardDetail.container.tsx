import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries.tsx";
import BoardDetailUI from "./BoardDetail.presenter.tsx";



export default function BoardDetail() {

  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  
  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.num
    }
  });

  const onClickList = () => {
    router.push(`/boards`)
  }

  const onClickDelete = (e) => {
    const deleteConfirm = confirm('정말 삭제하시겠습니까?');
    if(deleteConfirm) {
      deleteBoard({
        variables: { boardId: e.target.id },
        refetchQueries: [{query: FETCH_BOARD}]
      })
      router.push(`/boards`)
    } else {
      return
    }
  }
  
  const onClickMoveEdit = () => {
    router.push(`/boards/detail/${router.query.num}/edit`)
  }

  return(
    <BoardDetailUI 
    data={data}
    onClickDelete={onClickDelete}
    onClickList={onClickList}
    onClickMoveEdit={onClickMoveEdit}
    ></BoardDetailUI>
  )
}