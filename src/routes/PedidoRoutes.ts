import { PedidoController} from '../controllers/PedidoController'

module.exports = (app: any) => {

    app.get('/pedidos/', async (req:any, res: any) => {
        const pedidos = await PedidoController.buscar()

        return res.status(200).json(pedidos)
    })

    app.post('/pedidos', async (req:any, res: any) => {
        const pedidos = await PedidoController.criar(req.body.pedido)

        return res.status(200).json(pedidos)
    })
  
}