const Router = require("express");
const router = new Router();
const OrdProdCtrl = require("../components/OrderProductsController");

router.post("/", OrdProdCtrl.create);
router.get("/", OrdProdCtrl.getAll);
router.delete("/:id", OrdProdCtrl.delete);

module.exports = router;
