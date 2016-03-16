import Sequelize from 'sequelize';

export default function(sequelize, DataTypes) {
  return sequelize.define('WhiteCard', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    watermark: {
      type: DataTypes.STRING(5)
    }
  }, {
    tableName: 'white_cards',
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    associate: (models) => {
      models.WhiteCard.belongsToMany(models.CardSet, {
        through: models.CardSetWhiteCard,
        as: { singular: 'white_card_id', plural: 'white_card_id' }
      });
    }
  });
};