import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "ESTO SOLO LO VEN PERSONAS LOGUEADAS",
            user: req.user
        })
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM', e)
    }
}

export { getItems }