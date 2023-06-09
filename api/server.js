const express = require("express");

const server = express();

const accoutnsRouter = require('./accounts/accounts-router')

server.use(express.json());

server.use('/api/accounts', accoutnsRouter);

module.exports = server;
