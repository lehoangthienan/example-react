import gpl from 'graphql-tag';

const AppQuery = gpl`
  query {
    ecommerces {
      name,
      day,
      location,
    }
  }
`;

export {
    AppQuery
}