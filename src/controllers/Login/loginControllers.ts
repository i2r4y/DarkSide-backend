import { Request, Response } from "express";
import { loginServices } from "../../services/Login/LoginServices";

class LoginUsuariosControllers {
    async loginUsuarios(req: Request, res: Response) {
        const { email, password } = req.body

        const enviarDadosServices = new loginServices()
        const resposta = await enviarDadosServices.loginUsuarios({
            email,
            password
        })
        return res.json(resposta)
    }

    async verificaToken(req: Request, res: Response){
        const id = req.usuarioId
        const enviarDadosServices = new loginServices()
        const resposta = await enviarDadosServices.verificaToken(id)
        return res.json(resposta)
    }
}

export { LoginUsuariosControllers }