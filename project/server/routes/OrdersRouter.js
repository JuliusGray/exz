const Router = require("express");
const router = new Router();
const OrdCtrl = require("../components/OrdersController");

router.post("/", OrdCtrl.create);
router.get("/", OrdCtrl.getAll);
router.delete("/:id", OrdCtrl.delete);

module.exports = router;
