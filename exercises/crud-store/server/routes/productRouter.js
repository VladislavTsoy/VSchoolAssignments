const express = require('express')
const productRouter = express.Router()
const Products = require('../models/products')

productRouter.route('/')
    .get((req, res) => {
        Products.find((err, allProducts) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(allProducts)
        })
    })
    .post((req, res) => {
        const newProduct = new Products(req.body)
        newProduct.save((err, newSavedProduct) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(newSavedProduct)
        })
    })

productRouter.route('/:id')
    .get((req, res) => {
        Products.findById(req.params.id, (err, foundProduct) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(foundProduct)
        })
    })
    .put((req, res) => {
        Products.findOneAndReplace(
            {_id: req.params.id},
            req.body,
            {new: true},
            (err, updatedProduct) => {
                if(err) return res.status(500).send(err)
                return res.status(201).send(updatedProduct)
            }
        )
    })
    .delete((req, res) => {
        Products.findOneAndDelete(req.params.id, (err, deletedProduct) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(deletedProduct)
        })
    })

module.exports = productRouter