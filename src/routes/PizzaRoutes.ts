import { PizzaController } from '../controllers/PizzaController'

module.exports = (app: any) => {
    // buscar todas as pizzas
    app.get('/pizzas', async (req:any, res: any) => {
        const pizzas = await PizzaController.buscar()

        return res.status(200).json(pizzas)
    })
    // criar uma nova pizza
    app.post('/pizzas', async (req:any, res: any) => {
        const pizzas = await PizzaController.criar(req.body.pizza)

        return res.status(200).json(pizzas)
    })

    // rota para atualizar uma pizza
    app.put('/pizzas/:id', async(req: any, res: any) => {
        const pizzaId = parseInt(req.params.id);
        const novosDados = req.body;
        const pizzaAtualizada = await PizzaController.atualizar(pizzaId, novosDados);
        return res.status(200).json(pizzaAtualizada)
    })

    // rota para excluir uma pizza
    app.delete('/pizzas/:id', async(req: any, res: any) => {
        const pizzaId = parseInt(req.params.id);
        const PizzaExcluida = await PizzaController.excluir(pizzaId);
        return res.status(204).json(PizzaExcluida);
    })

    // buscar uma pizza por id
    app.get('/pizzas/:id', async (req: any, res: any) => {
        const pizzaId = parseInt(req.params.id);
        const pizza = await PizzaController.buscarPizzaPorId(pizzaId);
        if (pizza == null) {
          return res.status(404).json({ error: 'Pizza não encontrada' });
        }
        return res.status(200).json(pizza);
      });

   
  
}