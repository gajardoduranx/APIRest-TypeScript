import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getCars, insertCar, getCar, updateCar, deleteCar } from "../services/item.services";
// CRUD

const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const response = await getCar(id)
        const data = response ? response : "NOT_FOUND"
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM', e)
    }
}
const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars()
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS', e)
    }
}
const postItem = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}
const updateItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const response = await updateCar(id, req.body)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}
const deleteItem = (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const response = deleteCar(id)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

// Exportacion de controladores
export { getItem, getItems, postItem, updateItem, deleteItem }