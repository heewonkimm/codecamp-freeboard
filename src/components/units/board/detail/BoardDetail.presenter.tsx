import { Modal, Tooltip } from 'antd';
import * as S from './BoardDetail.styles';
import type { IBoardDetailUIProps } from './BoardDetail.types';
import ReactPlayer from 'react-player';

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.isOpenDeleteModal && (
        <Modal open={true} onOk={props.onClickDelete} onCancel={props.onClickDeleteCancel}>
          <p>정말 삭제하시겠습니까?</p>
        </Modal>
      )}

      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png"></S.Avatar>
            <S.Info>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreateAt>Date : 2021.02.18</S.CreateAt>
              {
                <Tooltip
                  placement="topRight"
                  title={`우편번호: ${props.data?.fetchBoard.boardAddress?.zipcode}, 주소: ${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
                >
                  <S.Address>위치 보기</S.Address>
                </Tooltip>
              }
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>Title : {props.data?.fetchBoard.title}</S.Title>
          <S.Contents>Contents : {props.data?.fetchBoard.contents}</S.Contents>
          <S.Youtube>
            유튜브
            <ReactPlayer url={props.data?.fetchBoard.youtubeUrl} width="720px" height="540px"></ReactPlayer>
          </S.Youtube>
        </S.Body>
        <S.Feedback>
          <S.Like onClick={props.onClickUp}>
            <img src="/images/board/detail/btn-like.png" alt="" />
            <span>{props.like}</span>
          </S.Like>
          <S.Dislike onClick={props.onClickDown}>
            <img src="/images/board/detail/btn-dislike.png" alt="" />
            <span>{props.dislike}</span>
          </S.Dislike>
        </S.Feedback>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveEdit}>수정하기</S.Button>
        <S.Button id={props.data?.fetchBoard._id} onClick={props.onClickOpenModal}>
          삭제하기
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
