export default (sequelize, DataTypes) => {
  const Consumer = sequelize.define('consumer', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  });

  Consumer.associate = (models) => {
    Consumer.belongsToMany(models.Dispensary, {
      through: 'favorites',
      foreignKey: {
        name: 'consumerId',
        field: 'consumer_id',
      },
    });
    Consumer.belongsToMany(models.Dispensary, {
      through: 'customer',
      foreignKey: {
        name: 'consumerId',
        field: 'consumer_id',
      },
    });
  };
  return Consumer;
};
