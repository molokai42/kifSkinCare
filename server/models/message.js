export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: DataTypes.STRING,
  });

  Message.associate = (models) => {
    // 1:M
    Message.belongsTo(models.Admin, {
      foreignKey: {
        name: 'adminId',
        field: 'admin_id',
      },
    });
    Message.belongsTo(models.Consumer, {
      foreignKey: {
        name: 'consumerId',
        field: 'consumer_id',
      },
    });
    Message.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
  };

  return Message;
};
