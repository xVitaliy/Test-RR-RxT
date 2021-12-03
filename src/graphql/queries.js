import { gql } from "@apollo/client";

// SCHEMA вынести в отдельный файд
// const GET_ROCKETS_NAMES = gql(`{
//     rockets {
//         id
//         name
//         description
//     }
// }`);

export const GET_ROCKETS_NAMES = gql(`
    query rockets($limit: Int) {
        rockets(limit: $limit) {
            id
            name
            description
        }
    }
`);


export const GET_TEST_ROCKETS = gql(`
        query mass_rockets($limit: Int) {
          rockets(limit: $limit) {
            mass {
              kg
              lb
            }
          }
        }
`)

export const INSERT_USER = gql(`
mutation INSERT_USER($name: String, $rocket: String) {
  insert_users(objects: {name: $name, rocket: $rocket}) {
    returning {
      id
      name
      rocket
    }
  }
}
`)

export const GET_USER = gql(`
  query getUser  {
        users {
        id
        name
        rocket
        timestamp
        }
    }
`)