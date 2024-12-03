import { Request, Response } from "express";
import { UsuariosServices } from "../../services/Usuarios/UsuariosServices";

class UsuariosControllers{
    async cadastro_usuarios(req: Request, res: Response){
        const {nome, email, password} = req.body //recebe dados front-end
        const usuariosServices = new UsuariosServices() //instancia classes serviços
        const resposta = await usuariosServices.cadastrar_usuarios({
            nome,
            email,
            password,
            
        }) // envia dados para classe serviços e aguarda resposta
        return res.json(resposta) // envia a resposta para o front-end
    }

}
export {UsuariosControllers}