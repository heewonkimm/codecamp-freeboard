import { Title, List, Wrapper, Footer, Tablebottom, Tabletop, Span1 } from './BoardList.styles';
import { getDate } from '../../../../commons/libraries/utils';
import type { IBoardListUIProps } from './BoardList.types';
import Paginations01 from '../../../commons/paginations/01/paginations01.container';

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <Wrapper>
      <Tabletop></Tabletop>
      <Title>
        <Span1>번호</Span1>
        <Span1 className="boardTitle">제목</Span1>
        <Span1>작성자</Span1>
        <Span1>날짜</Span1>
      </Title>
      {props.data?.fetchBoards.map((el) => (
        <List key={el._id}>
          <Span1>{el._id}</Span1>
          <div className="boardTitle" id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </div>
          <Span1>{el.writer}</Span1>
          <Span1>{getDate(el.createdAt)}</Span1>
        </List>
      ))}
      <Tablebottom></Tablebottom>
      <Paginations01 refetch={props.refetch} count={props.count}></Paginations01>
      <Footer>
        <button onClick={props.onClickMoveToBoardNew}>
          <img src="/images/board/list/write.png" />
          게시물 등록하기
        </button>
      </Footer>
    </Wrapper>
  );
}
