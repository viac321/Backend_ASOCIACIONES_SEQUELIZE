const express = require('express');
const routerGenres = require('./genres.router');
const routerActor = require('./actor.router');
const routerMovies = require('./movies.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', routerGenres)
router.use('/actor', routerActor)
router.use('/movies', routerMovies)

module.exports = router;