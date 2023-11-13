import { gql, useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useRouter } from "next/router";

export const FETCH_COMMENT = gql`
  query fetchBoardComments($boardId: ID!){
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export default function BoardCommentList() {

  const router = useRouter();
  const { data } = useQuery(FETCH_COMMENT, {
    variables: {
      boardId: router.query.num
    }
  });

  
  

  return(
    <BoardCommentListUI
      data={data}
    ></BoardCommentListUI>
  )
}