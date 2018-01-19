export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: DataTypes.STRING,
  });

  Message.associate = (models) => {
    // 1:M
    Message.belongsTo(models.Dispensary, {
      foreignKey: {
        name: 'dispensaryId',
        field: 'dispensary_id',
      },
    });
    Message.belongsTo(models.Consumer, {
      foreignKey: {
        name: 'consumerId',
        field: 'consumer_id',
      },
    });
  };

  return Message;
};
