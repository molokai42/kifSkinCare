
export default `

type Consumer {
  id: Int!
  username: String!
  email: String!
}

type Query {
  getConsumer(id: Int!): Consumer!
  allConsumers: [Consumer!]!
}

type Mutation {
  createConsumer(username: String!, email: String!, password: String!): Consumer!
}

`;
