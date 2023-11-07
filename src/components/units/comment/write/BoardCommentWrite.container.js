import { gql, useMutation, useQuery } from "@apollo/client";
import BoardCommentUI from "./BoardCommentWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!){
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;


export default function BoardCommentWrite() {

  const router = useRouter();
  const [CreateBoardComment] = useMutation(CREATE_COMMENT);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [contents, setContents] = useState('');

  const onChangeWriter = (e) => {
    setWriter(e.target.value)
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  };
  const onChangeContents = (e) => {
    setContents(e.target.value)
  };

  const onClickRegister = async() => {
    try {
      const result = await CreateBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: 4.5,
            createdAt: new Date(),
          },
          boardId: String(router.query.num)
        }
      });
      console.log(result)
    } catch(error){
      // console.error("코멘트 에러다", error)
    }
  }

  return(
    <BoardCommentUI
      onClickRegister={onClickRegister}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      // onChangeRating={onChangeRating}
      onChangeContents={onChangeContents}
    ></BoardCommentUI>
  )
}