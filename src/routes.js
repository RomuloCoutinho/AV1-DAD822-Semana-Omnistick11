const express = require('express');

const OngController = require('./controllers/OngController');
//REQUIRE DA ROTA CRIADA PARA LISTAR UFF//
const ongbyUF = require('./ongbyUF');
//
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

// ROTA CRIADA PARA LISTAR POR UF(ESTADO) 
routes.get('/ongsByUF?ong_uf', ongbyUF.index);
// **

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
