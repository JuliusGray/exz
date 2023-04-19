const Router = require("express");
const router = new Router();
const PricListProdCtrl = require("../components/PriceListProductsRouter");

router.post("/", PricListProdCtrl.create);
router.get("/", PricListProdCtrl.getAll);
router.delete("/:id", PricListProdCtrl.delete);

module.exports = router;
