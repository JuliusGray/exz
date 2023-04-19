const Router = require("express");
const router = new Router();
const EnterCtrl = require("../components/EnterprisesController");

router.post("/", EnterCtrl.create);
router.get("/", EnterCtrl.getAll);
router.delete("/:id", EnterCtrl.delete);

module.exports = router;
