const catchError = require('../utils/catchError');
const Genres = require('../models/Genres');

const getAll = catchError(async(req, res) => {
    const results = await Genres.findAll();
return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Genres.create(req.body);
return res.status(201).json(result)
});


const getOne = catchError(async(req,res)=>{
    const {id} = req.params
    const user =await Genres.findByPk(id)
    if(!Genres) return res.status(404).json({
       message: "User not found"
    })
    return res.json(user)
   })

   const remove = catchError(async(req,res)=>{
    const {id} = req.params
    const removeUser = await Genres.destroy({ where : { id } })
    if (!removeUser) return  res.status(404).json({message: "User not found"})
    return res.sendStatus(204)
})

const update = catchError(async(req,res)=>{
    const {id} = req.params
    const user = req.body
    
    const UserUpdate = await Genres.update(user, { where:{
        id }, returning: true })
        if(UserUpdate[0]===0) return res.status(404).json({message: "Genre not found"})
        return res.json(UserUpdate[1][0])
})







module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}