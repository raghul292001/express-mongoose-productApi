const BaseRepository = require("./base.repository");
const category = require("../models/category.model");

class CategoryRespository extends BaseRepository {
    constructor(){
        super(category);
    }
}

module.exports = CategoryRespository;