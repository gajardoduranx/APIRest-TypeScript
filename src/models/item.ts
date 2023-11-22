import { Schema, Types, model, Model } from 'mongoose'

// Esquema de los Items en MongoDB
const ItemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        gas: {
            type: String,
            enum: ['gasoline', 'electric'],
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }, {
    timestamps: true,
    versionKey: false
})

// Modelo Item la base de datos
const ItemModel = model('items', ItemSchema)
export default ItemModel