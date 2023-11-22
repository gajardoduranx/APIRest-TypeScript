import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.services"

const registerCtrl = async (req: Request, res: Response) => {
    const { body } = req
    const responseUser = await registerNewUser(body)
    res.send(responseUser)
}

const loginCtrl = async (req: Request, res: Response) => {
    const { body } = req
    const responseUser = await loginUser(body)

    if (responseUser === 'PASSWORD_INCORRECT') {
        res.status(403)
        res.send(responseUser)
    }
    res.send(responseUser)
}

export { loginCtrl, registerCtrl }