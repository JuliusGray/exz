const Router = require("express");
const router = new Router();
const EnterCtrl = require("../components/EnterprisesController");

router.post("/", EnterCtrl.create);
// router.get("/", EnterCtrl.getAll);
// router.get("/:id", EnterCtrl.getOne);
// router.delete("/delete/:id", EnterCtrl.deleteProduct);
// router.put("/update/:id", EnterCtrl.update);

module.exports = router;
