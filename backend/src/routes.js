const express = require('express');

const OngController = require('./controllers/OngController');
const InicdentsController = require('./controllers/InicidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', InicdentsController.index);
routes.post('/incidents', InicdentsController.create);
routes.delete('/incidents/:id', InicdentsController.delete);

module.exports = routes;