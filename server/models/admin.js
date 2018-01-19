export default (sequelize, DataTypes) => {
  const Admin = sequelize.define('admin', {
    displayname: {
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

  Admin.associate = (models) => {
    Admin.belongsToMany(models.Consumer, {
      through: 'customer',
      foreignKey: {
        name: 'adminId',
        field: 'admin_id',
      },
    });
    Admin.belongsToMany(models.Consumer, {
      through: 'favorite',
      foreignKey: {
        name: 'adminId',
        field: 'admin_id',
      },
    });
    Admin.hasOne(models.User, {
      through: 'user',
      foreignKey: {
        name: 'adminId',
        field: 'admin_id',
      },
    });
  };
  return Admin;
};
