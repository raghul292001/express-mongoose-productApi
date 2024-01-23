const BaseController = require("./base.controller");
const ProductRespository = require("../repositories/product.repository");

class ProductController extends BaseController {
    constructor(){
        super(ProductRespository);
    }
}

module.exports = ProductController;