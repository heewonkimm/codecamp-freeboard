import { gql } from "@apollo/client";


export const graphqlSetting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`;
