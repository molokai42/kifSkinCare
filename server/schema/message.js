export default ` 
type Message {
    id: Int!
    text: String!
    user: User!
    consumer: Consumer!
    admin: Admin!
    
}
type Mutation {
    createMessage(id: Int!, text: String!): Boolean!
}
`;
