const {PrismaClient} = require("@prisma/client") 
const prisma = new PrismaClient()


export const PizzaController = {
    async criar (pizza: any) {
        try{
            console.log(pizza)
            const pizzaCriada = await prisma.pizza.create({
                data: pizza
                
            }) 
            return pizzaCriada

        } catch(error: any)
        {
            console.log(error)

        }

    },

    async buscar (){
        try{
            const pizzas = await prisma.pizza.findMany()
            return pizzas
        }
        catch(error: any)
        {
            console.log(error)

        }
    },

}