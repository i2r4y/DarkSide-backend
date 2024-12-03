import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma/index";
import { compare } from 'bcryptjs'

interface Login {
    email: string
    password: string
}

class loginServices {
    async loginUsuarios({ email, password }: Login) {
        const usuario = await prismaClient.cadastroUsuario.findFirst({
            where: {
                email: email
            }
            
        })
        if (!usuario) {
            throw new Error('Usuario ou Senha Incorretos')
        }

        const senhaCrypt = await compare(password, usuario.senha)
        if (!senhaCrypt) {
            throw new Error('Usuario ou Senha Incorretos')
        }
        
        const token = sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        },
        process.env.JWT_SECRETO,
        {
            subject: usuario.id,
            expiresIn: '8h'
        }
    )
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token

        }
    }

    async verificaToken(id: string){
        const resposta = await prismaClient.cadastroUsuario.findFirst({
            where:{
                id:id
            },
            select:{
                id:true,
            }
        })
        return resposta
    }
}

export { loginServices }