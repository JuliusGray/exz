const { ProductGroups } = require("../models/models");

class ProdGroupCtrl {
  async create(req, res) {
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

  async getAll(req, res) {
    try {
      const productgroups = await ProductGroups.findAll();
      res.status(200).json(productgroups);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const productgroups = await ProductGroups.destroy({ where: { id } });
      res.status(200).json(`Товар удален из базы данных`);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ProdGroupCtrl();
