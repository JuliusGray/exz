const { Enterprises } = require("../models/models");

class EnterCtrl {
  async create(req, res) {
    const { code, name, short_name, legal_address } = req.body;
    try {
      const newEnterprises = await Enterprises.create({
        code,
        name,
        short_name,
        legal_address,
      });

      res.status(201).json(newEnterprises);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const enterprises = await Enterprises.findAll();
      res.status(200).json(enterprises);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const enterprises = await Enterprises.destroy({
        where: { id },
      });
      res.status(200).json(`Товар удален из базы данных`);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new EnterCtrl();
