const Router = require("express");
const router = new Router();
const ProdCtrl = require("../components/ProductsController");

router.post("/", ProdCtrl.create);
router.get("/", ProdCtrl.getAll);
router.delete("/:id", ProdCtrl.delete);

module.exports = router;
