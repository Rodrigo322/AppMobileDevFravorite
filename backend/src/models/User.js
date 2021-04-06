const { DataTypes, Model } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      avatar: DataTypes.STRING,
      profession: DataTypes.STRING,
      bio: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = User