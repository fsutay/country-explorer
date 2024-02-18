import { gql } from '@apollo/client';

export const getCountries = gql`
query CountriesQuery {
  countries {
    code
    name
    emoji
    continent {
      name
      countries {
        code
        name
      }
    }
  }
}`

export const searchCountries = gql`
  query CountriesQuery($searchText: String) {
    countries(filter: { name: { regex: $searchText } }) {
      code
      name
      emoji
      continent {
        name
        countries {
          code
          name
        }
      }
    }
  }
`;
