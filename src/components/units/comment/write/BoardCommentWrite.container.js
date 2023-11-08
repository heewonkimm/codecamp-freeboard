import { useMutation } from "@apollo/client";
import BoardCommentUI from "./BoardCommentWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_COMMENT } from "./BoardCommentWrite.queries";
import { FETCH_COMMENT } from "../list/BoardCommentList.container";

export default function BoardCommentWrite() {

  const [createComment] = useMutation(CREATE_COMMENT);
  const router = useRouter();

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
      const result = await createComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: 3.2
          },
          boardId: router.query.num
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.num }
          }
        ]
      })
      console.log(result)
    } catch(e) {
      console.error("에러다에러", e)
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