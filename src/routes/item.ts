import { Router, Request, Response } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item"
import { logMiddleware } from "../middlewares/log"

const router = Router() // Manejador


// https://localhost:3002/item [GET]
router.get('/', getItems)
// https://localhost:3002/item/id [GET]
router.get('/:id', getItem)
// https://localhost:3002/item [POST]
router.post('/', postItem)
// https://localhost:3002/item/id [PUT]
router.put('/:id', updateItem)
// https://localhost:3002/item/id [DELETE]
router.delete('/:id', deleteItem)

export { router }