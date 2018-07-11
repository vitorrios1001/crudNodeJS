'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

exports.getAll = (req,res,next) => {
    repository
    .getAll()
    .then( data => {
        res.render('list-product', {title: 'Products', products: data}); 
    }).catch( e => {
        res.render('list-product', {title: 'Erro'});
    });
};

exports.new = (req,res,next) => {
    
    res.render('add-product', {product: {}}); 
    
};

exports.getBySlug = (req,res,next) => {
    repository
    .getBySlug(req.params.slug)
    .then( data => {
        res.status(201).send(data); 
    }).catch( e => {
        res.status(500).send({
            message: 'Falha ao buscar',
            data : e
        });
    });
};

exports.getById = (req,res,next) => {
    repository
    .getById(req.params.id)
    .then( data => {
        res.status(201).send(data); 
    }).catch( e => {
        res.status(500).send({
            message: 'Falha ao buscar',
            data : e
        });
    });
};

exports.getTag = (req,res,next) => {
    repository
    .getByTag(req.params.tag)
    .then( data => {
        res.status(201).send(data); 
    }).catch( e => {
        res.status(500).send({
            message: 'Falha ao buscar',
            data : e
        });
    });
};

exports.post = (req,res,next) => {
    //Construir function abstrata de validação dos dados recebidos
    var product = req.body;
    
    repository
    .create({
        title: product.title,
        slug: product.slug,
        description: product.description ,
        price: product.price,
        active: true
    })
        .then(x => {
            res.redirect('/products');               
        }).catch(e => {
            res.redirect('/products/new');      
        });    
};

exports.putProduct = (req,res,next) => {
    
    var p = repository.getById(req.params.id)
            .then( x => {
                console.log(x);
                res.render('edit-product', { product: x});
            }).catch( e => {
                res.render('edit-product', { product: {}});
            });        
};

exports.put = (req,res,next) => {
    repository
    .update(req.params.id, req.body)
    .then( x => {
        res.redirect('/products');  
    }).catch( e => {
        res.redirect('/products');  
    });
};

exports.delete = (req,res,next) => {
    repository
    .delete(req.params._id)
    .then( x => {
        res.redirect('/products');
    }).catch( e => {
        res.redirect('/products');
    });
};