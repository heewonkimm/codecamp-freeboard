import styled from '@emotion/styled';

export const Tabletop = styled.div`
  border-top: 1px solid #000;
  margin-top: 40px;
`;
export const Tablebottom = styled.div`
  border-bottom: 1px solid #000;
  margin-bottom: 40px;
`;
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  .boardTitle {
    flex: 1;
  }
`;
export const Span1 = styled.span`
  display: inline-block;
  width: 120px;
`;
export const Title = styled.div`
  display: flex;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #ccc;
`;
export const List = styled.div`
  display: flex;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #efefef;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 80px;
  button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid #aaa;
    background-color: #eee;
    cursor: pointer;
  }
`;
