import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../../src/commons/types/generated/types";
import { MouseEvent } from "react";




export default function BoardList() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  const router = useRouter();

  const onClickMoveToBoardDetail = (e: MouseEvent<HTMLDivElement>) => {
    if(e.target instanceof HTMLDivElement)
    router.push(`/boards/detail/${e.target.id}`)
  }
  const onClickMoveToBoardNew = () => {
    router.push(`/boards/new`)
  }

  return(
    <BoardListUI
      data={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    ></BoardListUI>
  )
}