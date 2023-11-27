import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardWriterUI from './BoardWrite.presenter';
import { UPDATE_BOARD, graphqlSetting } from './BoardWrite.queries';
import type { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from '../../../../../src/commons/types/generated/types';
import type { IBoardWriteProps } from './BoardWrite.types';
import type { Address } from 'react-daum-postcode';

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();
  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(graphqlSetting);
  const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  function onChangeWriter(e: ChangeEvent<HTMLInputElement>): void {
    setWriter(e.target.value);
    setWriterError('');
    if (e.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangePassword(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
    setPasswordError('');
    if (writer && e.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeTitle(e: ChangeEvent<HTMLInputElement>): void {
    setTitle(e.target.value);
    setTitleError('');
    if (writer && password && e.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeContent(e: ChangeEvent<HTMLTextAreaElement>): void {
    setContents(e.target.value);
    setContentsError('');
    if (writer && password && title && e.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const onClickAddress = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(e.target.value);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(e.target.value);
  };

  const onClickOpenModal = (): void => {
    if (!writer) {
      setWriterError('작성자를 입력해주세요');
    }
    if (!password) {
      setPasswordError('패스워드를 입력해주세요');
    }
    if (!title) {
      setTitleError('제목을 입력해주세요');
    }
    if (!contents) {
      setContentsError('내용을 입력해주세요');
    }
    if (writer && title && password && contents) {
      setIsModalOpen(true);
    }
  };

  const onClickRegister = async (): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            title,
            password,
            contents,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      void router.push(`/boards/detail/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickCancel = (): void => {
    setIsModalOpen(false);
    return;
  };

  const onClickUpdate = async (): Promise<void> => {
    if (title === '' && contents === '' && zipcode === '' && address === '' && addressDetail === '' && youtubeUrl === '') {
      alert('수정된 내용이 없습니다.');
      return;
    }
    if (password === '') {
      alert('패스워드를 입력해주세요');
      return;
    }
    const myVariables: IUpdateBoardInput = {};
    if (title !== '') myVariables.title = title;
    if (contents !== '') myVariables.contents = contents;
    if (youtubeUrl !== '') myVariables.youtubeUrl = youtubeUrl;
    if (zipcode !== '' && address !== '' && addressDetail !== '') {
      myVariables.boardAddress = {};
      if (zipcode !== '') myVariables.boardAddress.zipcode = zipcode;
      if (address !== '') myVariables.boardAddress.address = address;
      if (addressDetail !== '') myVariables.boardAddress.addressDetail = addressDetail;
    }

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.num),
          password,
          updateBoardInput: myVariables,
        },
      });
      void router.push(`/boards/detail/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  console.log(zipcode);

  return (
    <BoardWriterUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickOpenModal={onClickOpenModal}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      onClickUpdate={onClickUpdate}
      isModalOpen={isModalOpen}
      onClickRegister={onClickRegister}
      onClickCancel={onClickCancel}
      isOpen={isOpen}
      onClickAddress={onClickAddress}
      onChangeAddressDetail={onChangeAddressDetail}
      onCompleteAddressSearch={onCompleteAddressSearch}
      address={address}
      zipcode={zipcode}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
    ></BoardWriterUI>
  );
}
