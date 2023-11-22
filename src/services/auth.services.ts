import { Auth } from "../interfaces/auth.interfaces"
import { User } from "../interfaces/user.interfaces"
import UserModel from "../models/user"
import { generateToken } from "../utils/jwt.handle"
import { encrypt, verified } from "../utils/bcrypt.handle"

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) return "ALREADY_USER"
    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({ name, password: passHash, email })
    console.log(registerNewUser)
    return registerNewUser
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email })
    if (!checkIs) return "NOT_FOUND_USER"

    const passwordHash = checkIs.password // password ecriptado

    const isCorrect = await verified(password, passwordHash) // password ingresado

    if(!isCorrect) return 'PASSWORD_INCORRECT'
    
    const token = generateToken(checkIs.email)

    const data = {
        token, 
        user: checkIs
    }
    
    return data
}

export { registerNewUser, loginUser }