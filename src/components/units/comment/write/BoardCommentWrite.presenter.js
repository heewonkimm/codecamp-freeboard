import * as S from "./BoardCommentWrite.styles";

export default function BoardCommentUI(props) {

  return(
    <S.CommentWrapper>
      <S.ComTitle>댓글</S.ComTitle>
      <S.CommentBox>
        <S.ComTop>
          <input placeholder="작성자" type="text"
          onChange={props.onChangeWriter}
          />
          <input placeholder="비밀번호" type="password"
          onChange={props.onChangePassword}
          />
          <S.StarWrap>
            <img src="/images/board/detail/star.png"/>
          </S.StarWrap>
        </S.ComTop>
        <S.ComBottom>
          <textarea placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
          ></textarea>
          <button onClick={props.onClickRegister}>등록하기</button>
        </S.ComBottom>
      </S.CommentBox>
    </S.CommentWrapper>
  )
}