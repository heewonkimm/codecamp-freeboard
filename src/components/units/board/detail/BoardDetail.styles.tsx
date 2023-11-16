import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`;

export const CardWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  box-sizing: border-box;
`;
export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
export const Avatar = styled.img``;
export const Info = styled.div`
`;
export const Writer = styled.div`
  font-size: 24px;
`;
export const CreateAt = styled.div`
  font-size: 16px;
  color: #828282;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 80px 0;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;
export const Contents = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
export const BottomWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 87px;
`;
export const Button = styled.button`
  width: 180px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  cursor: pointer;
  transition: background-color .2s;
  &:hover {
    background-color: gold;
  }
`;

