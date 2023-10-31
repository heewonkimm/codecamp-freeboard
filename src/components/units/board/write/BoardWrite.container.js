import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriterUI from "./BoardWrite.presenter";
import { graphqlSetting } from "./BoardWrite.queries";


export default function BoardWrite(){

  const router = useRouter();
  const [createBoard] = useMutation(graphqlSetting);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  function onChangeWriter(e) {
    setWriter(e.target.value);
    if(e.target.value !== '') {
      setWriterError('')
    }
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
    setPasswordError('')
  }
  function onChangeTitle(e) {
    setTitle(e.target.value);
    setTitleError('')
  }
  function onChangeContent(e) {
    setContents(e.target.value);
    setContentsError('')
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
    ></BoardWriterUI>
  )
}