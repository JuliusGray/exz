const Router = require("express");
const router = new Router();
const OrdCtrl = require("../components/OrdersController");

router.post("/", OrdCtrl.create);
// router.get("/", OrdCtrl.getAll);
// router.get("/:id", OrdCtrl.getOne);
// router.delete("/delete/:id", OrdCtrl.deleteProduct);
// router.put("/update/:id", OrdCtrl.update);

module.exports = router;
