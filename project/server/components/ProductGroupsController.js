const ProductGroups = require("../models/models");

class ProdGroupCtrl {
  async addProdGroup(req, res) {
    const { code, name, short_name } = req.body;
    try {
      const newProductGroup = await ProductGroups.create({
        code,
        name,
        short_name,
      });

      res.status(201).json(newProductGroup);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ProdGroupCtrl();
