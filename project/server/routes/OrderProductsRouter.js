const Router = require("express");
const router = new Router();
const OrdProdCtrl = require("../components/OrderProductsController");

router.post("/", OrdProdCtrl.create);
// router.get("/", OrdProdCtrl.getAll);
// router.get("/:id", OrdProdCtrl.getOne);
// router.delete("/delete/:id", OrdProdCtrl.deleteProduct);
// router.put("/update/:id", OrdProdCtrl.update);

module.exports = router;
