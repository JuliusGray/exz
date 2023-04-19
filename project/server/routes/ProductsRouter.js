const Router = require("express");
const router = new Router();
const ProdCtrl = require("../components/ProductsController");

router.post("/", ProdCtrl.create);
// router.get("/", ProdCtrl.getAll);
// router.get("/:id", ProdCtrl.getOne);
// router.delete("/delete/:id", ProdCtrl.deleteProduct);
// router.put("/update/:id", ProdCtrl.update);

module.exports = router;
