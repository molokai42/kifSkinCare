import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: 'Email already in use!',
        },
        validate: {
          isEmail: {
            args: true,
            msg: 'Invalid Email',
          },
        },
      },
      password: DataTypes.STRING,
    },
    {
      hooks: {
        afterValidate: async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 12);
          // eslint-disable-next-line no-param-reassign
          user.password = hashedPassword;
        },
      },
    },
  );

  return User;
};
