const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


export const PizzaController = {
    async criar(pizza: any) {
        try {
            console.log(pizza)
            const pizzaCriada = await prisma.pizza.create({
                data: pizza
            })
            return pizzaCriada

        } catch (error: any) {
            console.log(error)

        }

    },

    async buscar() {
        try {
            const pizzasBuscadas = await prisma.pizza.findMany()
            return pizzasBuscadas
        }
        catch (error: any) {
            console.log(error)

        }
    },

    async atualizar(id: number, novosDados: any) {
        try {
            const pizzaAtualizada = await prisma.pizza.update({
                where: { id},
                data: novosDados,
            });
            return pizzaAtualizada;
        } catch (error: any) {
            console.log(error)
        }

    }, 

    async excluir(id: number){
        try{
            const pizzaExcluida = await prisma.pizza.delete({
                where: {id},
            });
            return pizzaExcluida;
        } catch(error: any){
            console.log(error)
        }
    },
    
    async buscarPizzaPorId(id: number){
        try{
            const pizza = await prisma.pizza.findUnique({
                where: {id},
            });
        } catch(error: any){
            console.log(error)
        }
    }

}