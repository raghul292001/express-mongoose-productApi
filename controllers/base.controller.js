const httpStatusCodes = require('http-status-codes');
class BaseController {
    constructor(repoClass){
        this.repo = new repoClass();
    }
    getAll = (req,res)=>{
        this.repo.findAll()
        .then((docs)=>{
            return res.status(httpStatusCodes.OK).json({message:"Data retrieved successfully",data:docs});
        })
        .catch((error)=>{
            return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send({message:'Internal Server Error'});
        })
    }
    add = (req,res)=>{
        const body = req.body;
        this.repo.create(body)
        .then((docs)=>{
            return res.status(httpStatusCodes.CREATED).json({message:"Created successfully",data:docs});
        })
        .catch((error)=>{
            return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send({message:'Internal Server Error'});
        })
    }
    update = (req,res)=>{
        let id = req.params.id;
        const body = req.body;
        this.repo.update(id,body)
        .then((docs)=>{
            return res.status(httpStatusCodes.OK).send({message:"updated successfully",data:docs});
        })
        .catch((error)=>{
            return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send({message:'Internal Server Error'},error);
        })
    }
    deleteById = (req,res)=>{
        let id = req.params.id;
        this.repo.deleteById(id)
        .then((docs)=>{
            return res.status(httpStatusCodes.OK).send(docs);
        })
        .catch((error)=>{
            return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send({message:'Internal Server Error'},error);
        })
    }
    getById = (req,res)=>{
        let id = req.params.id;
        this.repo.findbyId(id)
        .then((docs)=>{
            return res.status(httpStatusCodes.OK).json({message:"Data retrieved successfully",data:docs});
        })
        .catch((error)=>{
            return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send({message:'Internal Server Error'},error);
        })
    }

}
module.exports=BaseController;