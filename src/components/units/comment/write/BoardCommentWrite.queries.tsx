const { gql } = require("@apollo/client");

export const CREATE_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!){
    createBoardComment(createBoardCommentInput: $createBoardCommentInput,boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateBoardComment($updateBoardCommentInput: UpdateBoardCommentInput!, $boardCommentId: ID!,$password: String){
    updateBoardComment(updateBoardCommentInput: $updateBoardCommentInput, boardCommentId: $boardCommentId, password: $password) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;