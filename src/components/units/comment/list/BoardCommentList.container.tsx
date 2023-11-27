import { gql, useMutation, useQuery } from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import { useRouter } from 'next/router';
import type { IQuery, IQueryFetchBoardCommentsArgs } from '../../../../../src/commons/types/generated/types';
import { FETCH_COMMENT } from './BoardCommentList.queries';
import type { MouseEvent, ChangeEvent } from 'react';
import { useState } from 'react';

const DELETE_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`;

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(FETCH_COMMENT, {
    variables: {
      boardId: String(router.query.num),
    },
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const [deleteComment] = useMutation(DELETE_COMMENT);

  const onClickDeleteComment = async (): Promise<void> => {
    try {
      await deleteComment({
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
    <BoardCommentListUI
      data={data}
      onClickOpenModal={onClickOpenModal}
      isDeleteModalOpen={isDeleteModalOpen}
      onClickDeleteComment={onClickDeleteComment}
      onChangePassword={onChangePassword}
      onClickDeleteCancel={onClickDeleteCancel}
    ></BoardCommentListUI>
  );
}
