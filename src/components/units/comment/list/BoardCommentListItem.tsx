import { useState } from 'react';
import type { ChangeEvent, MouseEvent } from 'react';
import * as S from './BoardCommentList.styles';
import BoardCommentWrite from '../write/BoardCommentWrite.container';
import { Rate } from 'antd';
import { DELETE_COMMENT, FETCH_COMMENT } from './BoardCommentList.queries';
import { useMutation } from '@apollo/client';
import type { IMutation, IMutationDeleteBoardCommentArgs } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

export default function BoardCommentListItem(props): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [id, setId] = useState('');

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  const [deleteBoardComment] = useMutation<Pick<IMutation, 'deleteBoardComment'>, IMutationDeleteBoardCommentArgs>(DELETE_COMMENT);

  const onClickDeleteComment = async (): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: id,
          password,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.num },
          },
        ],
      });
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
    setIsDeleteModalOpen(false);
  };

  const onClickOpenModal = (e: MouseEvent<HTMLImageElement>): void => {
    setIsDeleteModalOpen(true);
    setId(e.target.id);
  };

  const onClickDeleteCancel = (): void => {
    setIsDeleteModalOpen(false);
    return;
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <>
      {isDeleteModalOpen && (
        <S.PasswordModal open={true} onOk={onClickDeleteComment} onCancel={onClickDeleteCancel}>
          <p>댓글을 삭제하시겠습니까?</p>
          비밀번호 입력: <S.PasswordInput type="password" onChange={onChangePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
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
                  <img id={props.el._id} onClick={onClickOpenModal} src="/images/board/detail/comment-delete.png" />
                </S.Delete>
              </S.Right>
            </S.ComTop>
            <S.ComBottom>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.CreateAt>{props.el.createdAt}</S.CreateAt>
            </S.ComBottom>
          </S.ContentWrap>
        </S.CommentList>
      ) : (
        <BoardCommentWrite el={props.el} isEdit={isEdit} setIsEdit={setIsEdit} />
      )}
    </>
  );
}
