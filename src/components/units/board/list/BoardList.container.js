import { gql, useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;


export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickMoveToBoardDetail = (e) => {
    router.push(`/boards/detail/${e.target.id}`)
  }
  const onClickMoveToBoardNew = (e) => {
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