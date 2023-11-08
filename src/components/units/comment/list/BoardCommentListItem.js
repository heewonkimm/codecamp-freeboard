
import { useState } from "react";
import * as S from "./BoardCommentList.styles";
import BoardCommentUI from "../write/BoardCommentWrite.presenter";

export default function BoardCommentListItem(props) {

  const [isEdit, setIsEdit] = useState(false);
  const onClickUpdate = () => {
    setIsEdit(true)
  }


  return(
    <>
      {!isEdit && (
        <S.CommentList>
          <S.AvatarWrap>
            <img src="/images/board/detail/comment-avatar.png"/>
          </S.AvatarWrap>
          <S.ContentWrap>
            <S.ComTop>
              <S.Left>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.Star><img src="/images/board/detail/star.png"/></S.Star>
              </S.Left>
              <S.Right>
                <S.Edit onClick={onClickUpdate}><img src="/images/board/detail/comment-edit.png"/></S.Edit>
                <S.Delete><img src="/images/board/detail/comment-delete.png"/></S.Delete>
              </S.Right>
            </S.ComTop>
            <S.ComBottom>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.CreateAt>{props.el.createdAt}</S.CreateAt>
            </S.ComBottom>
          </S.ContentWrap>
        </S.CommentList>
        )
      }
      {isEdit && <BoardCommentUI el={props.el}/>}
    </>
  )
}