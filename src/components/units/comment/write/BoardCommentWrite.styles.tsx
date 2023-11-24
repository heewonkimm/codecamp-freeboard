import styled from '@emotion/styled';

export const CommentWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  margin-bottom: 40px;
  border-top: 1px solid #bdbdbd;
`;
export const ComTitle = styled.h2`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 12px;
  font-size: 20px;
  &::after {
    content: '';
    display: block;
    background: url('/images/board/detail/comment-logo.png') no-repeat;
    width: 30px;
    height: 30px;
    background-size: cover;
  }
`;
export const CommentBox = styled.div``;
export const ComTop = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
  input {
    width: 180px;
    height: 52px;
    line-height: 52px;
    padding: 0 24px;
    border: 1px solid #bdbdbd;
  }
`;
export const StarWrap = styled.div`
  /* position: relative;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    background: url('/images/board/detail/star-fill.png') no-repeat;
    width: 100%;
    height: 24px;
    background-size: cover;
  } */
`;

export const ComBottom = styled.div`
  position: relative;
  textarea {
    width: 100%;
    height: 160px;
    box-sizing: border-box;
    resize: none;
    padding: 20px;
    border: 1px solid #bdbdbd;
  }
  button {
    position: absolute;
    right: 0;
    bottom: 5px;
    width: 90px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    cursor: pointer;
  }
`;
