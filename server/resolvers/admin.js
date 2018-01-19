import bcrypt from 'bcrypt';

import formatErrors from './formatErrors';

export default {
  Query: {
    getAdmin: (parent, { id }, { models }) => models.Admin.findOne({ where: { id } }),
    allAdmins: (parent, args, { models }) => models.Admin.findAll(),
  },
  Mutation: {
    registerAdmin: async (parent, { password, ...otherArgs }, { models }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const admin = await models.Admin.create({
          ...otherArgs,
          password: hashedPassword,
        });

        return {
          ok: true,
          admin,
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
