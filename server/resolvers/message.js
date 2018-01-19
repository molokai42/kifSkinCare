export default {
  Mutation: {
    createMessage: async (parent, args, { models, user, dispensary }) => {
      try {
        await models.Message.create({
          ...args,
          userId: user.id,
          dispensaryId: dispensary.id,
        });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
