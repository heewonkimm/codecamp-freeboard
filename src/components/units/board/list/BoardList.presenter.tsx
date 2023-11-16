import { Title, List, Wrapper, Footer, Tablebottom, Tabletop } from "./BoardList.styles.tsx";
import { getDate } from "../../../../commons/libraries/utils";


export default function BoardListUI(props) {

  return(
    <Wrapper>
      <Tabletop></Tabletop>
      <Title>
        <span>번호</span>
        <span className="boardTitle">제목</span>
        <span>작성자</span>
        <span>날짜</span>
      </Title>
      {
        props.data?.fetchBoards.map((el) => (
          <List key={el._id}>
            <span>{el._id}</span>
            <span className="boardTitle" id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.title}</span>
            <span>{el.writer}</span>
            <span>{getDate(el.createdAt)}</span>
          </List>
        ))
      }
      <Tablebottom></Tablebottom>
      <Footer onClick={props.onClickMoveToBoardNew}>
        <button><img src="/images/board/list/write.png"/>게시물 등록하기</button>
      </Footer>

    </Wrapper>
  )
}