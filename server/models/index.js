import Sequelize from 'sequelize';

const sequelize = new Sequelize('budE', 'postgres', 'postgres', {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const models = {
  Consumer: sequelize.import('./consumer'),
  Dispensary: sequelize.import('./dispensary'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
