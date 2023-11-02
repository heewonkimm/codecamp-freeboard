import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {

  return(
  <S.Wrapper>
    <S.CardWrapper>
      <S.Header>
        <S.AvatarWrapper>
          <S.Avatar src="/images/avatar.png"></S.Avatar>
          <S.Info>
            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
            <S.CreateAt>Date : 2021.02.18</S.CreateAt>
          </S.Info>
        </S.AvatarWrapper>
      </S.Header>
      <S.Body>
        <S.Title>{props.data?.fetchBoard.title}</S.Title>
        <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
      </S.Body>
    </S.CardWrapper>
    <S.BottomWrapper>
      <S.Button>목록으로</S.Button>
      <S.Button>수정하기</S.Button>
      <S.Button id={props.data?.fetchBoard._id} onClick={props.onClickDelete}>삭제하기{props.data?.fetchBoard._id}</S.Button>
    </S.BottomWrapper>
  </S.Wrapper>
  )
}