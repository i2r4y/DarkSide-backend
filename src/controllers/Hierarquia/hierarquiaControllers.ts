import { Request, Response } from "express";
 import {HierarquiaServices } from  "../../services/Hierarquia/HierarquiaServices"

 class HierarquiasControllers{
        async cadastro_hierarquia(req: Request, res: Response){
            const{nome} = req.body 
            const hierarquiaServices = new HierarquiaServices()
            const resposta = await hierarquiaServices.cadastrar_hierarquia({
                nome
            })
            return res.json(resposta)
        }
 }

 export {HierarquiasControllers}