const Router = require("express");
const router = new Router();
const ProdGroupCtrl = require("../components/ProductGroupsController");

router.post("/", ProdGroupCtrl.create);
router.get("/", ProdGroupCtrl.getAll);
router.delete("/:id", ProdGroupCtrl.delete);

module.exports = router;
