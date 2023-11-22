import "dotenv/config"
import{sign, verify } from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || "secretounico"



const generateToken = (id: string) => {
    const jwt = sign({id}, JWT_SECRET) 
    return jwt
}

const verifyToken = async (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}

export { generateToken, verifyToken }