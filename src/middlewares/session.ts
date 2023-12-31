import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken"
import { verifyToken } from "../utils/jwt.handle"

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || null
        const jwt = jwtByUser?.split(" ").pop()
        const isUser = verifyToken(`${jwt}`)
        if (!isUser) {
            res.status(401)
            res.send("SESSION_NO_VALIDA")
        }

        req.user = isUser
        next()
    } catch (e) {
        res.status(400)
        res.send("SESSION_NO_VALIDA")
    }
}

export { checkJwt }