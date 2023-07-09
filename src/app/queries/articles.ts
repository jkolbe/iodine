import { gql } from 'apollo-angular';

export const GET_ARTICLES = gql`
  query getArticles($pageSize: Int $skip: Int) {
    articleCollection(
      order: slug_ASC,
      limit: $pageSize,
      skip: $skip,
    ) {
      total,
      skip,
      limit,
      items {
        sys {
          id
        }
        slug
      }
    }
  }
`;