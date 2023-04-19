const PriceListProducts = require("../models/models");

class PricListProdCtrl {
  async create(req, res) {
    try {
      const { pricelists_id, product_id, unit_price } = req.body;
      const product = await PriceListProducts.create({
        pricelists_id,
        product_id,
        unit_price,
      });
      return res.json(product);
    } catch (e) {
      console.error(e);
      return res.json(e.message);
    }
  }

  // async getAll(req, res) {
  //   try {

  //     return res.json(products);
  //   } catch (e) {
  //     return res.json(e.message);
  //   }
  // }

  // async getOne(req, res) {
  //   const { id } = req.params;
  //   const product = await Products.findOne({
  //     where: { id },
  //     include: [{ model: Description, as: "info" }],
  //   });
  //   return res.json(product);
  // }

  // async deleteProduct(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const product = await Products.findOne({ where: { id } });
  //     if (!product) {
  //       throw ApiError.notFound(`Продукт не `);
  //     }
  //     await product.destroy();
  //     return res.json({ message: `Product with id ${id} was deleted` });
  //   } catch (e) {
  //     return res.json(e.message);
  //   }
  // }

  // async update(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const { name, price, categoryId, description } = req.body;
  //     const product = await Products.findOne({ where: { id } });
  //     if (!product) {
  //       throw ApiError.notFound("Продукт не найден");
  //     }
  //     if (name) {
  //       product.name = name;
  //     }
  //     if (price) {
  //       product.price = price;
  //     }
  //     if (categoryId) {
  //       product.categoryId = categoryId;
  //     }
  //     if (description) {
  //       const info = await Description.findOrCreate({
  //         where: { productId: id },
  //         defaults: { value: description },
  //       });
  //       product.infoId = info.id;
  //     }
  //     await product.save();
  //     return res.json(product);
  //   } catch (e) {
  //     return res.json(e.message);
  //   }
  // }
}

module.exports = new PricListProdCtrl();