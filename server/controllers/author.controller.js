const Author = require('../models/author.model');

module.exports = {
    index:(req,res) => {
        Author.find()
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    create:(req,res) => {
        Author.create(req.body)
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    show:(req,res) => {
        Author.findOne({_id:req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    update:(req,res) => {
        Author.findOneAndUpdate({_id:req.params.id},req.body,{new:true,useFindAndModify:false})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    destroy:(req,res) => {
        Author.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    }
}