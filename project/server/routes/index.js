const Router = require("express");
const router = new Router();
const Enterprises = require("./EnterprisesRouter");
const ProductGroups = require("./ProductGroupsRouter");
const Products = require("./ProductsRouter");
const Orders = require("./OrdersRouter");
const OrderProducts = require("./OrderProductsRouter");
const PriceLists = require("./PriceListsRouter");
const PriceListProducts = require("./PriceListProductsRouter");

router.use("/enterprises", Enterprises);
router.use("/productgroups", ProductGroups);
router.use("/products", Products);
router.use("/orders", Orders);
router.use("/orderproducts", OrderProducts);
router.use("/pricelists", PriceLists);
router.use("/pricelistproducts", PriceListProducts);

module.exports = router;