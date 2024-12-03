import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CadastroUsuarios {
  nome: string;
  email: string;
  password: string;
}

class UsuariosServices {
  async cadastrar_usuarios({
    nome,
    email,
    password,

  }: CadastroUsuarios) {
    const passwordHash = await hash(password, 8)
    const resposta = await prismaClient.cadastroUsuario.create({
      data: {
        nome: nome,
        email: email,
        senha: passwordHash,
      
      },
    });
    return { dados: "Cadastro Efetuado Com Sucesso" };
  }

  
}

export { UsuariosServices };
