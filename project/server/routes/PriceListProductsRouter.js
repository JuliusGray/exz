const Router = require("express");
const router = new Router();
const PricListProdCtrl = require("../components/PriceListProductsRouter");

router.post("/", PricListProdCtrl.create);
// router.get("/", PricListProdCtrl.getAll);
// router.get("/:id", PricListProdCtrl.getOne);
// router.delete("/delete/:id", PricListProdCtrl.deleteProduct);
// router.put("/update/:id", PricListProdCtrl.update);

module.exports = router;
