import { Request, Response } from "express";
import { VendasServices } from "../../services/Vendas/VendasServices";

class VendasControllers{
    async cadastro_vendas(req: Request, res: Response){
        const { valorTotal, DataVenda, funcionariosId} = req.body
        const vendasServices = new VendasServices()
        const resposta = await vendasServices.cadastrar_vendas({
            valorTotal,
            DataVenda,
            funcionariosId
        })
        return res.json(resposta)
    }
}

export{VendasControllers}