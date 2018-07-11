'use strict'

const express = require('express');
const router  = express.Router();
const controller = require('../controllers/product-controller');
//const authService = require('../services/auth-service');

router.get('/', controller.getAll);
router.get('/slug/:slug', controller.getBySlug);
router.get('/id/:id', controller.getById);
router.get('/tag/:tag', controller.getTag);
router.get('/new', controller.new);
router.post('/', controller.post);
router.post('/edit/:id', controller.put);
router.get('/editProduct/:id', controller.putProduct);
router.get('/delete/:id', controller.delete);//id passado no body

module.exports = router;