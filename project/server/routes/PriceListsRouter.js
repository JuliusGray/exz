const Router = require("express");
const router = new Router();
const PricListCtrl = require("../components/PriceListsController");

router.post("/", PricListCtrl.create);
// router.get("/", PricListCtrl.getAll);
// router.get("/:id", PricListCtrl.getOne);
// router.delete("/delete/:id", PricListCtrl.deleteProduct);
// router.put("/update/:id", PricListCtrl.update);

module.exports = router;
