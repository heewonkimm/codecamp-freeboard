import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriterUI from "./BoardWrite.presenter";
import { UPDATE_BOARD, graphqlSetting } from "./BoardWrite.queries";


export default function BoardWrite(props){

  const router = useRouter();
  const [createBoard] = useMutation(graphqlSetting);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');
  const [isActive, setIsActive] = useState(false);

  function onChangeWriter(e) {
    setWriter(e.target.value);
    setWriterError('')
    if(e.target.value && password && title && contents) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
    setPasswordError('')
    if(writer && e.target.value && title && contents) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangeTitle(e) {
    setTitle(e.target.value);
    setTitleError('')
    if(writer && password && e.target.value && contents) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangeContent(e) {
    setContents(e.target.value);
    setContentsError('')
    if(writer && password && title && e.target.value) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onClick = async () => {
    if(!writer) {
      setWriterError('작성자를 입력해주세요')
    }
    if(!password){
      setPasswordError('패스워드를 입력해주세요')
    }
    if(!title){
      setTitleError('제목을 입력해주세요')
    }
    if(!contents){
      setContentsError('내용을 입력해주세요')
    }
    if(writer && title && password && contents) {
      alert('게시글이 등록되었습니다.');
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              title,
              password,
              contents,
            }
          }
        });
        console.log(result)
        router.push(`/boards/detail/${result.data.createBoard._id}`)
      } catch(error) {
        alert(error.message)
      }
    }
  }
  const onClickUpdate = async () => {
    if(!title && !contents) {
      alert('수정된 내용이 없습니다.')
      return
    }
    if(!password){
      alert('패스워드를 입력해주세요')
      return
    }
    if(title) myVariables.title = title
    if(contents) myVariables.contents = contents
    
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.num,
          password,
          updateBoardInput: myVariables
        }
      });
      console.log(result)
      router.push(`/boards/detail/${result.data.updateBoard._id}`)
    } catch(error) {
      alert(error.message)
    }
  }

  return(
    <BoardWriterUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClick={onClick}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      onClickUpdate={onClickUpdate}
    ></BoardWriterUI>
  )
}