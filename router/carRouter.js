const express = require('express');
const router = express.Router();

const carData = require('../connection')

router.get('/', (req, res) => {
    carData('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
})

router.post('/', (req, res) => {
    let car = {
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmission: req.body.transmission,
        title: req.body.title
    }
    carData('cars').insert(car)
    .then(car => {
        res.status(200).json(car)
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    const car = carData
    .select("*")
    .from("cars")
    .where("id", id)
    .first()
    .then(car => {
        if(car) {
            res.status(200).json(car)
        } else {
        res.status(404).json({"MESSAGE": "That car id does not exist"})
        }
    }).catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router