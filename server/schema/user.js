export default `

type User {
  id: Int!
  email: String!
}

type Query {
  getUser(id: Int!): User!
  allUsers: [User!]!
}

type LoginResponse {
      ok: Boolean!
      token: String
      refreshToken: String
      errors: [Error!]
    }

type RegisterResponse {
    ok: Boolean!
    user: User
    errors: [Error!]
  }

type Mutation {
  registerUser(email: String!, password: String!): RegisterResponse!
  login(email: String!, password: String!): LoginResponse!
}

`;
