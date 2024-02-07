const { getAll,create, getOne, remove, update } = require('../controllers/Director.controllers');
const express = require('express');

const routerDirector = express.Router();

routerActor.route("/")
	.get(getAll)
        .post(create);

routerActor.route('/:id')
        .get(getOne)
        .delete(remove)
        .put(update);   


module.exports = routerDirector;