const { PriceListProducts } = require("../models/models");

class PricListProdCtrl {
  async create(req, res) {
    const { pricelists_id, product_id, unit_price } = req.body;
    try {
      const newPriceListProducts = await PriceListProducts.create({
        pricelists_id,
        product_id,
        unit_price,
      });

      res.status(201).json(newPriceListProducts);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const priceListProducts = await PriceListProducts.findAll();
      res.status(200).json(priceListProducts);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const priceListProducts = await PriceListProducts.destroy({
        where: { id },
      });
      res.status(200).json(`Товар удален из базы данных`);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PricListProdCtrl();
