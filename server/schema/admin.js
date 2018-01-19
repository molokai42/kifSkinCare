
export default `

type Dispensary {
  id: Int!
  displayname: String!
  email: String!
  businessName: String!
}

type Query {
  getDispensary(id: Int!): Dispensary!
  allDispensaries: [Dispensary!]!
}

type Mutation {
  createDispensary(displayname: String!, email: String!, password: String!): Dispensary!
}

`;
