const Router = require("express");
const router = new Router();
const PricListCtrl = require("../components/PriceListsController");

router.post("/", PricListCtrl.create);
router.get("/", PricListCtrl.getAll);
router.delete("/:id", PricListCtrl.delete);

module.exports = router;
