import { useState } from 'react';
import * as S from './BoardCommentList.styles';
import BoardCommentWrite from '../write/BoardCommentWrite.container';
import { Rate } from 'antd';

export default function BoardCommentListItem(props): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = (): void => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit && (
        <div>
          {props.isDeleteModalOpen && (
            <S.PasswordModal open={true} onOk={props.onClickDeleteComment} onCancel={props.onClickDeleteCancel}>
              <p>댓글을 삭제하시겠습니까?</p>
              비밀번호 입력: <S.PasswordInput type="password" onChange={props.onChangePassword} />
            </S.PasswordModal>
          )}
          <S.CommentList>
            <S.AvatarWrap>
              <img src="/images/board/detail/comment-avatar.png" />
            </S.AvatarWrap>
            <S.ContentWrap>
              <S.ComTop>
                <S.Left>
                  <S.Writer>{props.el.writer}</S.Writer>
                  <S.Star>
                    <Rate value={props.el.rating}></Rate>
                  </S.Star>
                </S.Left>
                <S.Right>
                  <S.Edit onClick={onClickEdit}>
                    <img src="/images/board/detail/comment-edit.png" />
                  </S.Edit>
                  <S.Delete>
                    <img id={props.el._id} onClick={props.onClickOpenModal} src="/images/board/detail/comment-delete.png" />
                  </S.Delete>
                </S.Right>
              </S.ComTop>
              <S.ComBottom>
                <S.Contents>{props.el.contents}</S.Contents>
                <S.CreateAt>{props.el.createdAt}</S.CreateAt>
              </S.ComBottom>
            </S.ContentWrap>
          </S.CommentList>
        </div>
      )}
      {isEdit && <BoardCommentWrite el={props.el} isEdit={isEdit} setIsEdit={setIsEdit} />}
    </>
  );
}
