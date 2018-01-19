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

type ConsumerRegisterResponse {
  ok: Boolean!
  consumer: Consumer
  errors: [Error!]
}
type Mutation {
  registerConsumer(username: String!, email: String!, password: String!): ConsumerRegisterResponse!
}

`;
