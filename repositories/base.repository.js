
class BaseRepository {
    constructor(_collection){
        this.collection = _collection;
    }
    async findAll(){
        var data = await this.collection.find().lean().exec();
        return data;
    }
    async findbyId(id){
       var data = await this.collection.findById(id);
       return data;
    }
    async create(model){
        var data = this.collection.create(model);
        return data;
    }
    async update(id,model){
        var data = this.collection.findByIdAndUpdate(id,model);
        return data;
    }
    async deleteById(id){
        var data= this.collection.findByIdAndDelete(id);
        return data;
    }
   
}

module.exports = BaseRepository;