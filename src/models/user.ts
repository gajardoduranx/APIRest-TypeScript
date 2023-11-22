import { Schema, Types, model, Model } from 'mongoose'
import { User } from '../interfaces/user.interfaces'

const UserSchema = new Schema<User>(
    {
        name: {
            required: true,
            type: String
        },
        password: {
            required: true,
            type: String,
            unique: true
        },
        email: {
            required: true,
            type: String,
            unique: true
        },
        description: {
            type: String,
            default: "No description"
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const UserModel = model('users', UserSchema)
export default UserModel