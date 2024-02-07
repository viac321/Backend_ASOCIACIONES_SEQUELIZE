const catchError = require('../utils/catchError');
const Movies = require('../models/Movies');

const getAll = catchError(async(req, res) => {
    const results = await Movies.findAll();
return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movies.create(req.body);
return res.status(201).json(result)
});


const getOne = catchError(async(req,res)=>{
    const {id} = req.params
    const user = await Movies.findByPk(id)
    if(!Movies) return res.status(404).json({
       message: "User not found"
    })
    return res.json(user)
   })

   const remove = catchError(async(req,res)=>{
    const {id} = req.params
    const removeUser = await Movies.destroy({ where : { id } })
    if (!removeUser) return  res.status(404).json({message: "Movie not found"})
    return res.sendStatus(204)
})

const update = catchError(async(req,res)=>{
    const {id} = req.params
    const user = req.body
    
    const UserUpdate = await Movies.update(user, { where:{
        id }, returning: true })
        if(UserUpdate[0]===0) return res.status(404).json({message: "Movie not found"})
        return res.json(UserUpdate[1][0])
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}