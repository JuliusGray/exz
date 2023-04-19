const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Enterprises = sequelize.define("Enterprises", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  short_name: { type: DataTypes.STRING, allowNull: false },
  legal_address: { type: DataTypes.STRING, allowNull: false },
});

const ProductGroups = sequelize.define("ProductGroups", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  short_name: { type: DataTypes.STRING, allowNull: false },
});

const Products = sequelize.define("Products", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  short_name: { type: DataTypes.STRING, allowNull: false },
  productgroups_id: {
    type: DataTypes.INTEGER,
    references: { model: "ProductGroups", key: "id" },
    allowNull: false,
  },
});

const Orders = sequelize.define("Orders", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE },
  customer_id: {
    type: DataTypes.INTEGER,
    references: { model: "Enterprises", key: "id" },
    allowNull: false,
  },
  seller_id: {
    type: DataTypes.INTEGER,
    references: { model: "Enterprises", key: "id" },
    allowNull: false,
  },
});

const OrderProducts = sequelize.define("OrderProducts", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  order_id: {
    type: DataTypes.INTEGER,
    references: { model: "Orders", key: "id" },
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: { model: "Products", key: "id" },
    allowNull: false,
  },
  unit_price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
});

const PriceLists = sequelize.define("PriceLists", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE, allowNull: false },
  seller_id: {
    type: DataTypes.INTEGER,
    references: { model: "Enterprises", key: "id" },
    allowNull: false,
  },
});

const PriceListProducts = sequelize.define("PriceListProducts", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  pricelists_id: {
    type: DataTypes.INTEGER,
    references: { model: "PriceLists", key: "id" },
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: { model: "Products", key: "id" },
    allowNull: false,
  },
  unit_price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

module.exports = {
  sequelize,
  Enterprises,
  ProductGroups,
  Orders,
  Products,
  OrderProducts,
  PriceLists,
  PriceListProducts,
};
