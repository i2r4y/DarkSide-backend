import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CadastroFuncionarios {
  nomeFuncionario: string;
  cpf: string;
  email: string;
  password: string;
  telefone: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  hierarquiaId: string
}

class FuncionariosServices {
  async cadastro_funcionario({
    nomeFuncionario,
    cpf,
    email,
    password,
    telefone,
    cep,
    rua,
    numero,
    bairro,
    cidade,
    estado,
    hierarquiaId,
  }: CadastroFuncionarios) {
    const passwordHash = await hash(password, 8)
    const resposta = await prismaClient.cadastroFuncionarios.create({
      data: {
        nomeFuncionario: nomeFuncionario,
        cpf: cpf,
        email: email,
        senha: passwordHash,
        telefone: telefone,
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        hierarquiaId: hierarquiaId,
      },
    });
    return { dados: "Cadastro Efetuado Com Sucesso" };
  }
}

export {FuncionariosServices}