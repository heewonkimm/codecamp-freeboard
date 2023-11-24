import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';
import type { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardArgs } from '../../../../commons/types/generated/types';
import { useState, type MouseEvent } from 'react';

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.num !== 'string') return <></>;

  const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardCommentArgs>(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: router.query.num,
    },
  });

  const onClickList = (): void => {
    void router.push(`/boards`);
  };

  const onClickDelete = (e: MouseEvent<HTMLButtonElement>): void => {
    const deleteConfirm = confirm('정말 삭제하시겠습니까?');
    if (deleteConfirm) {
      deleteBoard({
        variables: { boardId: e.target.id },
        refetchQueries: [{ query: FETCH_BOARD }],
      });
      void router.push(`/boards`);
    } else {
      return;
    }
  };

  const onClickMoveEdit = (): void => {
    void router.push(`/boards/detail/${router.query.num}/edit`);
  };

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const onClickUp = (): void => {
    setLike((prev) => prev + 1);
  };
  const onClickDown = (): void => {
    setDislike((prev) => prev + 1);
  };
  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickMoveEdit={onClickMoveEdit}
      onClickUp={onClickUp}
      onClickDown={onClickDown}
      like={like}
      dislike={dislike}
    ></BoardDetailUI>
  );
}
