import express from "express"
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const app = express();

const PORT = 5050;

app.use(express.json())
require("./routes/PizzaRoutes")(app)
require("./routes/PedidoRoutes")(app)


app.get('/', (req, res) => {
    res.send("Olá, mundo");
})

app.listen(PORT, () => {
    console.log("Servidor Rodando")
})