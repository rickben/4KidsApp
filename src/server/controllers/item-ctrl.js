const Clothing_item = require('../models/clothes-model')
//i changed the require() + maybe need to change the end to clothing_items
/*
*req is an object containing information about the HTTP request that raised the event.
* In response to req, you use res to send back the desired HTTP response.
*
* */
createItem = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item of clothing',
        })
    }
/*
* item accepts the body of Clothing_item: the information on the created item.
* */
    const item = new Clothing_item(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'Clothing item created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Clothing item not created!',
            })
        })
}

updateItem = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Clothing_item.findOne({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Clothing item not found!',
            })
        }
        item.item_type = body.item_type
        item.color = body.color
        item.age = body.age
        item.rating = body.rating
        item.user_id = body.user_id
        item.state = body.state
        item.bought_by = body.bought_by
        item
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: item._id,
                    message: 'Clothing item updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Clothing item not updated!',
                })
            })
    })
}

deleteItem = async (req, res) => {
    await Clothing_item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!item) {
            return res
                .status(404)
                .json({ success: false, error: `Clothing item not found` })
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getItemById = async (req, res) => {
    await Clothing_item.findOne({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!item) {
            return res
                .status(404)
                .json({ success: false, error: `Clothing item not found` })
        }
        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getClothingItems = async (req, res) => {
    await Clothing_item.find({}, (err, clothing_items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!clothing_items.length) {
            return res
                .status(404)
                .json({ success: false, error: `Clothing item not found` })
        }
        return res.status(200).json({ success: true, data: clothing_items })
    }).catch(err => console.log(err))
}

module.exports = {
    createItem,
    updateItem,
    deleteItem,
    getItemById,
    getClothingItems,
}