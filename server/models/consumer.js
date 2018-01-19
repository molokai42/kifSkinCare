export default (sequelize, DataTypes) => {
  const Consumer = sequelize.define('consumer', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'The username can only contain numbers and letters',
        },
        len: {
          args: [3, 25],
          msg: 'The username needs to be between 5 and 25 characters',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid Email',
        },
      },
    },
    password: DataTypes.STRING,
  });

  Consumer.associate = (models) => {
    Consumer.belongsToMany(models.Admin, {
      through: 'favorites',
      foreignKey: {
        name: 'consumerId',
        field: 'consumer_id',
      },
    });
    Consumer.belongsToMany(models.Admin, {
      through: 'customer',
      foreignKey: {
        name: 'consumerId',
        field: 'consumer_id',
      },
    });
    Consumer.hasOne(models.User, {
      through: 'user',
      foreignKey: {
        name: 'consumerId',
        field: 'consumer_Id',
      },
    });
  };
  return Consumer;
};
