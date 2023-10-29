import { useState } from "react";
import {
  Address,
  ButtonWrapper,
  Contents,
  ErrorMsg,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper
} from "../../../styles/boardsNew";
import { gql, useMutation } from "@apollo/client";

const graphqlSetting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      contents
    }
  }
`;

export default function Board() {

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
    }
  }

  return(
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter}/>
          <ErrorMsg>{writerError}</ErrorMsg>
          <ErrorMsg></ErrorMsg>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangePassword}/>
          <ErrorMsg>{passwordError}</ErrorMsg>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle}/>
        <ErrorMsg>{titleError}</ErrorMsg>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents placeholder="내용을 작성해주세요." onChange={onChangeContent}/>
        <ErrorMsg>{contentsError}</ErrorMsg>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250"/>
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClick}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  )
}