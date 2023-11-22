import { useMutation } from '@apollo/client';
import BoardCommentUI from './BoardCommentWrite.presenter';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { CREATE_COMMENT, UPDATE_COMMENT } from './BoardCommentWrite.queries';
import type { IMutation, IMutationCreateBoardCommentArgs, IMutationUpdateBoardCommentArgs, IUpdateBoardCommentInput } from '../../../../../src/commons/types/generated/types';
import { FETCH_COMMENT } from '../list/BoardCommentList.queries';

export default function BoardCommentWrite(props): JSX.Element {
  const [createComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(CREATE_COMMENT);
  const [updateComment] = useMutation<Pick<IMutation, 'updateBoardComment'>, IMutationUpdateBoardCommentArgs>(UPDATE_COMMENT);
  const router = useRouter();

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [contents, setContents] = useState('');

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(e.target.value);
  };

  const onClickRegister = async (): Promise<void> => {
    try {
      if (typeof router.query.num !== 'string') {
        alert('시스템에 문제가 있습니다.');
        return;
      }
      const result = await createComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 3.2,
          },
          boardId: router.query.num,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.num },
          },
        ],
      });
      console.log(result);

      setWriter('');
      setPassword('');
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  };
  const onClickUpdate = async (): Promise<void> => {
    // if (password !== password) {
    //   alert('패스워드가 일치하지 않습니다!');
    //   return;
    // }
    if (!password) {
      alert('패스워드를 입력해주세요.');
      return;
    }
    if (!contents) {
      alert('수정된 내용이 없습니다.');
      return;
    }
    const myVariables: IUpdateBoardCommentInput = {
      rating: 7.8,
    };
    if (contents) myVariables.contents = contents;
    try {
      const result = await updateComment({
        variables: {
          updateBoardCommentInput: myVariables,
          password,
          boardCommentId: props.el._id,
        },
      });
      props.setIsEdit(false);
      console.log(result);
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  };

  return (
    <BoardCommentUI
      onClickRegister={onClickRegister}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      el={props.el}
    ></BoardCommentUI>
  );
}
