const BaseRepository = require("./base.repository");
const product = require("../models/product.model");

class ProductRespository extends BaseRepository {
    constructor(){
        super(product);
    }
}

module.exports = ProductRespository;