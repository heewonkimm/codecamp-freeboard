
import { useState } from "react";
import * as S from "./BoardCommentList.styles";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentListItem(props) {

  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = () => {
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
                <S.Edit onClick={onClickEdit}><img src="/images/board/detail/comment-edit.png"/></S.Edit>
                <S.Delete>
                  <img 
                    id={props.el._id}
                    onClick={props.onClickDeleteComment}
                    src="/images/board/detail/comment-delete.png"
                    />
                </S.Delete>
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
      {isEdit && <BoardCommentWrite el={props.el} isEdit={isEdit} setIsEdit={setIsEdit}/>}
    </>
  )
}