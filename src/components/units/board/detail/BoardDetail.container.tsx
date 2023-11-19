import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";



export default function BoardDetail() {

  const router = useRouter();
  if(!router || typeof router.query.num !== "string") return <></>

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD);
  
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: router.query.num
    }
  });

  const onClickList = () => {
    router.push(`/boards`)
  }

  const onClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
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