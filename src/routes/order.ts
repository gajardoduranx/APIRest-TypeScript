import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middlewares/session";
// Esta ruta solo pueden acceder las personas que tienen session activa, un JWT valido
const router = Router()

router.get('/', checkJwt,getItems)

export { router }