import * as S from "./BoardCommentList.styles";

export default function BoardCommentListUI(props) {

  return(
    <>
      {
        props.data?.fetchBoardComments.map((el) => (
          <S.CommentList key={el._id}>
            <S.AvatarWrap>
              <img src="/images/board/detail/comment-avatar.png"/>
            </S.AvatarWrap>
            <S.ContentWrap>
              <S.ComTop>
                <S.Left>
                  <S.Writer>{el.writer}</S.Writer>
                  <S.Star><img src="/images/board/detail/star.png"/></S.Star>
                </S.Left>
                <S.Right>
                  <S.Edit><img src="/images/board/detail/comment-edit.png"/></S.Edit>
                  <S.Delete><img src="/images/board/detail/comment-delete.png"/></S.Delete>
                </S.Right>
              </S.ComTop>
              <S.ComBottom>
                <S.Contents>{el.contents}</S.Contents>
                <S.CreateAt>{el.createdAt}</S.CreateAt>
              </S.ComBottom>
            </S.ContentWrap>
          </S.CommentList>
        ))
      }
    </>

  )
}