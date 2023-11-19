import { gql, useMutation, useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../../src/commons/types/generated/types";
import { FETCH_COMMENT } from "./BoardCommentList.queries";
import { MouseEvent } from "react";
import { error } from "console";

const DELETE_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String){
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`;

export default function BoardCommentList() {

  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_COMMENT, {
    variables: {
      boardId: String(router.query.num)
    }
  });

  const [deleteComment] = useMutation(DELETE_COMMENT);

  const onClickDeleteComment = async(e: MouseEvent<HTMLImageElement>) => {
    const password = prompt('비밀번호를 입력하세요!a')
    try {
      if(!(e.target instanceof HTMLImageElement)) {
        alert('시스템에 문제가 있습니다.')
        return;
      }
      await deleteComment({
        variables: {
          boardCommentId: e.target.id,
          password,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.num }
          }
        ]
      })
    } catch(e){
      if(e instanceof Error) alert(e.message)
    }
  }

  return(
    <BoardCommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
    ></BoardCommentListUI>
  )
}