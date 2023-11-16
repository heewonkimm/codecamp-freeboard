import { useMutation } from "@apollo/client";
import BoardCommentUI from "./BoardCommentWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./BoardCommentWrite.queries";
import { FETCH_COMMENT } from "../list/BoardCommentList.container";

export default function BoardCommentWrite(props) {

  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT)
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
            writer,
            password,
            contents,
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

      setWriter('')
      setPassword('')
      // console.log(result)
    } catch(e) {
      console.error("에러다에러", e)
    }
  }
  const onClickUpdate = async() => {
    if(password !== password) {
      alert('패스워드가 일치하지 않습니다!')
      return
    }
    if(!password) {
      alert('패스워드를 입력해주세요.')
      return
    }
    if(!contents) {
      alert('수정된 내용이 없습니다.')
      return
    }
    const myVariables = {
      rating: 7.8
    }
    if(contents) myVariables.contents = contents
    try {
      const result = await updateComment({
        variables: {
          updateBoardCommentInput: myVariables,
          password,
          boardCommentId: props.el._id
        },
      })
      props.setIsEdit(false)
      console.log(result)
    } catch(e) {
      console.error("에러다에러2", e)
    }
  }

  return(
    <BoardCommentUI
      onClickRegister={onClickRegister}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      el={props.el}
    ></BoardCommentUI>
  )
}