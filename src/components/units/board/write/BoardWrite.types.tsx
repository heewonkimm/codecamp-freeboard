import type { ChangeEvent } from 'react';
import type { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onClickOpenModal: () => void;
  onClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
  isModalOpen: boolean;
  onClickRegister: () => void;
  onClickCancel: () => void;
  isOpen: boolean;
  onClickAddress: () => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onCompleteAddressSearch: (data: any) => void;
  address: string;
  zipcode: string;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
