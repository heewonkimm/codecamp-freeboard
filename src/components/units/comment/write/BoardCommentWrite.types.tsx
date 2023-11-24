import type { ChangeEvent } from 'react';

export interface IBoardCommentUIProps {
  onClickRegister: () => void;
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isEdit: boolean;
  el: any;
  setStar: any;
}