import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}` // ruta del directorio actual
const router = Router()

// limpiar filname
const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName) => {
   const cleanName = cleanFileName(fileName) // limpiar nombre del archivo
   if (cleanName !== 'index') {
       import(`./${cleanName}`).then((moduleRouter) => {
           console.log(`Se esta cargando la ruta... /${cleanName}`)
           router.use(`/${cleanName}`, moduleRouter.router) // Utilizacion de rutas importadas
       })
   
   }
}) // lectura de directorios - [].filter

export { router } // exportacion de rutas directory