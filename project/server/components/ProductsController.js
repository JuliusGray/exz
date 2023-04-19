const { Products } = require("../models/models");

class ProdCtrl {
  async create(req, res) {
    const { code, name, short_name, productgroups_id } = req.body;
    try {
      const newProduct = await Products.create({
        code,
        name,
        short_name,
        productgroups_id,
      });

      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await Products.findAll();
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const product = await Products.destroy({ where: { id } });
      res.status(200).json(`Товар удален из базы данных`);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ProdCtrl();
