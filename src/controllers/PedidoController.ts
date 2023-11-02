const {PrismaClient} = require("@prisma/client") 
const prisma = new PrismaClient()


export const PedidoController = {
    async criarPedido(pedido: any) {
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

    async buscarPedidos(){
        try{
            const pedidos = await prisma.pedido.findMany()
            return pedidos
        }
        catch(error: any)
        {
            console.log(error)

        }
    },

    async atualizarPedido(id: number, novosDados:any){
        try{
            const pedidoAtualizado = await prisma.pedido.update({
                where: {id},
                data: novosDados
            });
            return pedidoAtualizado;
        } catch (error){
            console.log(error)
        }
    },

    async listarPedidos(){
        try{
            const pedidos = await prisma.pedido.findMany({
                include:{
                    pizza: true,
                    cliente: true,
                },
            });
            return pedidos;
        } catch (error){
            console.log(error)
        }
    }, 

    async buscarPedidoPorId(id: number){
        try{
            const pedido = await prisma.pedido.findUnique({
            where: {id},
            include: {
                pizza: true,
                cliente: true,
            },
            });
            return pedido;
        } catch(error){
            console.log(error);
        }
    },

    async excluirPedido(id: number){
        try{
            const pedidoExcluido = await prisma.pedido.delete({
                where: {id},
            });
            return pedidoExcluido;
        } catch(error){
            console.log(error);
        }
    }



}