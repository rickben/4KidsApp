const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* The user can create a new clothing item only after he fills the form */
/* state: "in market" , "sold". bought_by: */
const Clothing_item = new Schema(
    {
        item_type: { type: String, required: true },
        color: { type: String, required: true},
		age: { type: Number, required: true },
        rating: { type: Number, required: true },
        user_id: { type: String, required:true},
        state: { type: String, required:true},
        bought_by: { type: String}
    },
    { timestamps: true },
)

module.exports = mongoose.model('clothing_items', Clothing_item)

