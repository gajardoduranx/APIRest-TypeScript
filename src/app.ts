import "dotenv/config" // variables de entorno
import express from "express" // servidores
import cors from "cors" // permite que un cliente origen(domminios) se conecte al servidor
import { router } from "./routes" 
import db from "./config/mongo"

const PORT = process.env.PORT || 3001 // puertoen un variable de entorno
const app = express() // creacion de servidor

app.use(cors()) // Ejecucion de cors
app.use(express.json()) // para que el servidor entienda json
app.use(router) // rutas
db().then(() => console.log("Conectado db")) // conexion
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})