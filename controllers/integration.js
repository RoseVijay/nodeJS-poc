const Sequelize = require("sequelize");
const DB = require("../models");

exports.integrationPost = async (req, res) => {
    const integrations = await DB.addtocart.create({
        customer_id: req.body.customer_id,
        productId: req.body.product_id,
        product_name: req.body.product_name,
        product_image: req.body.product_image,
        price: req.body.product_price,
        created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
    integrations.save()
        .then((item) => {
            return res.status(200).json({
                message: "Saved Successfully . ",
                data: item
            });
        });
}
exports.integrationGet = async (req, res) => {
    var response = {};
    DB.addtocart
        .findAll({
            where: { customer_id: 1 },
        })
        .then(async (data) => {
            response["data"] = data;
            return res.status(200).json(response);
        })
}
exports.integrationDelete = async (req, res) => {
    var response = {};
    DB.addtocart
        .destroy({
            where: { id: req.body.delete_id },
        })
        .then(async (data) => {
            response["data"] = data;
            return res.status(200).json(response);
        })
}