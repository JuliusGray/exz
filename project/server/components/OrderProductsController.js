const { OrderProducts } = require("../models/models");

class OrdProdCtrl {
  async create(req, res) {
    const { order_id, product_id, unit_price, quantity } = req.body;
    try {
      const newOrderProducts = await OrderProducts.create({
        order_id,
        product_id,
        unit_price,
        quantity,
      });

      res.status(201).json(newOrderProducts);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const orderProducts = await OrderProducts.findAll();
      res.status(200).json(orderProducts);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const orderProducts = await OrderProducts.destroy({
        where: { id },
      });
      res.status(200).json(`Товар удален из базы данных`);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new OrdProdCtrl();
