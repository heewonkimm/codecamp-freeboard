import type { ChangeEvent, MouseEvent } from 'react';
import type { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, 'fetchBoardComments'>;
  onClickOpenModal: (event: MouseEvent<HTMLImageElement>) => void;
  isDeleteModalOpen: (e: MouseEvent<HTMLImageElement>) => void;
  onClickDeleteComment: () => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteCancel: () => void;
}
