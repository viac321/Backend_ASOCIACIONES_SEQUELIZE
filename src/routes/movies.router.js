const { getAll,create, getOne, remove, update } = require('../controllers/movies.controllers');
const express = require('express');

const routerMovies = express.Router();

routerMovies.route("/")
	.get(getAll)
        .post(create);

routerMovies.route('/:id')
        .get(getOne)
        .delete(remove)
        .put(update);   


module.exports = routerMovies;