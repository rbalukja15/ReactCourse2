const express = require('express');
const router = express.Router();

// Get item model
const Item = require('../../model/Item');

// @route GET api/items
// @desc Get all items
// @access Public

router.get('/', (req, res) => {
    Item.find({})
        .select('name date')
        .sort({ date: -1 })
        .then( items => res.json(items))
        .catch( error => console.log(error));
});

// @route POST api/items
// @desc Add an item
// @access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        origin: req.body.origin,
        price: req.body.price,
        quantity: req.body.quantity
    });

    newItem.save()
        .then(item => res.json(item))
        .catch(error => res.json({ error }));
});

// @route GET api/items
// @desc Get an item by id
// @access Public

router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(error => res.status(404).json(error));
})

// @route PUT api/items
// @desc Update an item
// @access Public

router.put('/:id', (req, res) => {

   Item.findByIdAndUpdate(req.params.id, {
       name: req.body.name,
       price: req.body.price
   }).then(item => res.json(item))
       .catch(error => res.json(error));
});

// @route DELETE api/items
// @desc Delete an item
// @access Public

router.delete('/:id', (req, res) =>
{
    Item.findById(req.params.id)
        .then(item => item.remove()
            .then( () => res.status(200).json({ success: true }))
            .catch((error) => res.status(500).json({ message: "Internal server error" })))
        .catch((error) => res.status(404).json({ message: "Not found" }));
});

module.exports = router;
