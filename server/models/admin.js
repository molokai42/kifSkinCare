export default (sequelize, DataTypes) => {
  const Dispensary = sequelize.define('dispensary', {
    displayname: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  });

  Dispensary.associate = (models) => {
    Dispensary.belongsToMany(models.Consumer, {
      through: 'customer',
      foreignKey: {
        name: 'dispensaryId',
        field: 'dispensary_id',
      },
    });
    Dispensary.belongsToMany(models.Consumer, {
      through: 'favorite',
      foreignKey: {
        name: 'dispensaryId',
        field: 'dispensary_id',
      },
    });
  };
  return Dispensary;
};
