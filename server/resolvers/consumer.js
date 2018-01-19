import bcrypt from 'bcrypt';

import formatErrors from './formatErrors';

export default {
  Query: {
    getConsumer: (parent, { id }, { models }) => models.Consumer.findOne({ where: { id } }),
    allConsumers: (parent, args, { models }) => models.Consumer.findAll(),
  },
  Mutation: {
    registerConsumer: async (parent, { password, ...otherArgs }, { models }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const consumer = await models.Consumer.create({ ...otherArgs, password: hashedPassword });

        return {
          ok: true,
          consumer,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    },
  },
};
