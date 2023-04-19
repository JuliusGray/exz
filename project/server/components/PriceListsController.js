const { PriceLists } = require("../models/models");

class PricListCtrl {
  async create(req, res) {
    const { date, seller_id } = req.body;
    try {
      const newPriceLists = await PriceLists.create({
        date,
        seller_id,
      });

      res.status(201).json(newPriceLists);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const pricelists = await PriceLists.findAll();
      res.status(200).json(pricelists);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const pricelists = await PriceLists.destroy({ where: { id } });
      res.status(200).json(`Товар удален из базы данных`);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PricListCtrl();
