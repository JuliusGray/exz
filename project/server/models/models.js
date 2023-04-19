const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Enterprises = sequelize.define("Enterprises", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  short_name: { type: DataTypes.STRING },
  legal_address: { type: DataTypes.STRING },
});

const ProductGroups = sequelize.define("ProductGroups", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  short_name: { type: DataTypes.STRING },
});

const Products = sequelize.define("Products", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  short_name: { type: DataTypes.STRING },
});

const Orders = sequelize.define("Orders", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING, autoIncrement: true },
  name: { type: DataTypes.STRING },
  short_name: { type: DataTypes.STRING },
});

ProductGroups.hasMany(Products);
Products.belongsTo(ProductGroups);

module.exports = {
  Enterprises,
  ProductGroups,
  Orders,
};
