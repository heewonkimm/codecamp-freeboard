import type { IBoardWriteUIProps } from './BoardWrite.types';
import * as S from './BoardWrite.styles';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function BoardWriterUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.isModalOpen && (
        <Modal open={true} onOk={props.onClickRegister} onCancel={props.onClickCancel}>
          <p>게시글을 등록하시겠습니까?</p>
        </Modal>
      )}
      {props.isOpen && (
        <Modal open={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch}></DaumPostcode>
        </Modal>
      )}
      <S.Title>게시글 {props.isEdit ? '수정' : '등록'}하기</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer}
            readOnly={Boolean(props.data?.fetchBoard.writer)}
          />
          <S.ErrorMsg>{props.writerError}</S.ErrorMsg>
          <S.ErrorMsg></S.ErrorMsg>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password type="password" placeholder="비밀번호를 작성해주세요." onChange={props.onChangePassword} />
          <S.ErrorMsg>{props.passwordError}</S.ErrorMsg>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title} />
        <S.ErrorMsg>{props.titleError}</S.ErrorMsg>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents placeholder="내용을 작성해주세요." onChange={props.onChangeContent} defaultValue={props.data?.fetchBoard.contents} />
        <S.ErrorMsg>{props.contentsError}</S.ErrorMsg>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipcodeWrapper>
          <S.Zipcode placeholder="07250" readOnly value={props.zipcode !== '' ? props.zipcode : props.data?.fetchBoard.boardAddress?.zipcode ?? ''} />
          <S.SearchButton onClick={props.onClickAddress}>우편번호 검색</S.SearchButton>
        </S.ZipcodeWrapper>
        <S.Address readOnly value={props.address !== '' ? props.address : props.data?.fetchBoard.boardAddress?.address ?? ''} />
        <S.Address onChange={props.onChangeAddressDetail} defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube placeholder="링크를 복사해주세요." onChange={props.onChangeYoutubeUrl} defaultValue={props.data?.fetchBoard.youtubeUrl ?? ''} />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진첨부</S.Label>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton isActive={props.isEdit ? true : props.isActive} onClick={props.isEdit ? props.onClickUpdate : props.onClickOpenModal}>
          {props.isEdit ? '수정' : '등록'}하기
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
