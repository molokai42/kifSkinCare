export default `

type Admin {
  id: Int!
  displayname: String!
  email: String!
  businessName: String!
}

type Query {
  getAdmin(id: Int!): Admin!
  allAdmins: [Admin!]!
}
type AdminRegisterResponse {
  ok: Boolean!
  admin: Admin
  errors: [Error!]
}

type Mutation {
  registerAdmin(displayname: String!, email: String!, password: String!): AdminRegisterResponse!
}

`;
