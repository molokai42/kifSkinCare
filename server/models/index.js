import Sequelize from 'sequelize';
import constants from '../config/constants';

const sequelize = new Sequelize(constants.DB_NAME, constants.DB_USER, constants.DB_PASS, {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const models = {
  Consumer: sequelize.import('./consumer'),
  Admin: sequelize.import('./admin'),
  Message: sequelize.import('./message'),
  User: sequelize.import('./user.js'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
