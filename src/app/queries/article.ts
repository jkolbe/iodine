import { gql } from 'apollo-angular';

export const GET_ARTICLE = gql`
  query getArticle($id: String!) {
    article(id: $id) {
      slug
      title
    }
  }
`