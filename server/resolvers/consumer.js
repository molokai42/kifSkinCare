export default {
  Query: {
    getConsumer: (parent, { id }, { models }) => models.Consumer.findOne({ where: { id } }),
    allConsumers: (parent, args, { models }) => models.Consumer.findAll(),
  },
  Mutation: {
    createConsumer: (parent, args, { models }) => models.Consumer.create(args),
  },
};
