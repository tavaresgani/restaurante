import { PizzaController } from '../controllers/PizzaController'

module.exports = (app: any) => {

    app.get('/pizzas', async (req:any, res: any) => {
        const pizzas = await PizzaController.buscar()

        return res.status(200).json(pizzas)
    })

    app.post('/pizzas', async (req:any, res: any) => {
        const pizzas = await PizzaController.criar(req.body.pizza)

        return res.status(200).json(pizzas)
    })
  
}