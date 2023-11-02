import { PedidoController } from '../controllers/PedidoController'

module.exports = (app: any) => {

    // Rota para buscar todos os pedidos
    app.get('/pedidos/', async (req: any, res: any) => {
        const pedidos = await PedidoController.buscarPedidos()

        return res.status(200).json(pedidos)
    })

    // Rota para criar um novo pedido
    app.post('/pedidos', async (req: any, res: any) => {
        const pedidos = await PedidoController.criarPedido(req.body.pedido)

        return res.status(200).json(pedidos)
    })

    // Rota para atualizar um pedido
    app.put('/pedidos/:id', async (req: any, res: any) => {
        const pedidoId = parseInt(req.params.id);
        const novosDados = req.body;
        const pedidoAtualizado = await PedidoController.atualizarPedido(pedidoId, novosDados);
        return res.status(200).json(pedidoAtualizado);
    });

    // Rota para listar todos os pedidos com detalhes de pizza e cliente
    app.get('/pedidos/detalhados', async (req: any, res: any) => {
        const pedidos = await PedidoController.listarPedidos();
        return res.status(200).json(pedidos);
    });

    // Rota para buscar um pedido por id com detalhe de pizza e cliente
    app.get('/pedidos/:id', async(req: any, res: any) =>{
        const pedidoId = parseInt(req.params.id);
        const pedido = await PedidoController.buscarPedidoPorId(pedidoId);

        if(pedido == null){
            return res.status(404).json({error: 'Pedido não encontrado'});
        }

        return res.status(200).json(pedido);
    });

    // Rota para excluir um pedido por id
    app.delete('/pedidos/:id', async(req: any, res:any) =>{
        const pedidoId = parseInt(req.params.id);
        const pedidoExcluido = await PedidoController.excluirPedido(pedidoId);
        return res.status(204).json(pedidoExcluido);
    });

};