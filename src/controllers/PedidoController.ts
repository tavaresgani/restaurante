const {PrismaClient} = require("@prisma/client") 
const prisma = new PrismaClient()


export const PedidoController = {
    async criar (pedido: any) {
        try{
            console.log(pedido)
            const pedidoCriado = await prisma.pedido.create({
                data: pedido
                
            }) 
            return pedidoCriado

        } catch(error: any)
        {
            console.log(error)

        }

    },

    async buscar (){
        try{
            const pedidos = await prisma.pedido.findMany()
            return pedidos
        }
        catch(error: any)
        {
            console.log(error)

        }
    },

}