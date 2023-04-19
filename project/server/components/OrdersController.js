const { Orders } = require("../models/models");

class OrdCtrl {
  async create(req, res) {
    const { code, date, customer_id, seller_id } = req.body;
    try {
      const newOrders = await Orders.create({
        code,
        date,
        customer_id,
        seller_id,
      });

      res.status(201).json(newOrders);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const orders = await Orders.findAll();
      res.status(200).json(orders);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const orders = await Orders.destroy({
        where: { id },
      });
      res.status(200).json(`Товар удален из базы данных`);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new OrdCtrl();
