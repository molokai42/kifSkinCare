export default {
  Query: {
    getDispensary: (parent, { id }, { models }) => models.Dispensary.findOne({ where: { id } }),
    allDispensaries: (parent, args, { models }) => models.Dispensary.findAll(),
  },
  Mutation: {
    createDispensary: (parent, args, { models }) => models.Dispensary.create(args),
  },
};
