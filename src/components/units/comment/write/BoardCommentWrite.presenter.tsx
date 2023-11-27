import { Rate } from 'antd';
import * as S from './BoardCommentWrite.styles';
import type { IBoardCommentUIProps } from './BoardCommentWrite.types';

export default function BoardCommentUI(props: IBoardCommentUIProps): JSX.Element {
  return (
    <S.CommentWrapper>
      <S.ComTitle>댓글</S.ComTitle>
      <S.CommentBox>
        <S.ComTop>
          <input
            placeholder="작성자"
            type="text"
            onChange={props.onChangeWriter}
            readOnly={props.el?.writer}
            defaultValue={props.isEdit && props.el?.writer}
            value={props.isEdit ? null : props.writer}
          />
          <input placeholder="비밀번호" type="password" onChange={props.onChangePassword} value={props.password} />
          <S.StarWrap>
            <Rate onChange={props.setRating} defaultValue={props.isEdit && props.el?.rating}></Rate>
            {/* <Rate onChange={props.setRating} defaultValue={props.isEdit && props.el?.rating} value={props.isEdit ? null : props.rating}></Rate> */}
          </S.StarWrap>
        </S.ComTop>
        <S.ComBottom>
          <textarea
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            defaultValue={props.isEdit && props.el?.contents}
            value={props.isEdit ? null : props.contents}
          ></textarea>
          <button onClick={props.isEdit ? props.onClickUpdate : props.onClickRegister}>{props.isEdit ? '수정' : '등록'}하기</button>
        </S.ComBottom>
      </S.CommentBox>
    </S.CommentWrapper>
  );
}
