import prismaClient from "../../prisma";

interface CadastroFornecedores {
  nomeFornecedor: string;
  cnpj: string;
  email: string;
  password: string;
  telefone: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

class FornecedoresServices {
  async cadastro_fornecedores({
    nomeFornecedor,
    cnpj,
    email,
    password,
    telefone,
    cep,
    rua,
    numero,
    bairro,
    cidade,
    estado,
  }: CadastroFornecedores) {
    const resposta = await prismaClient.cadastroFornecedores.create({
      data: {
        nomeFornecedor: nomeFornecedor,
        cnpj: cnpj,
        email: email,
        senha: password,
        telefone: telefone,
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
      },
    });
    return { dados: "Cadastro Efetuado Com Sucesso" };
  }
}

export { FornecedoresServices };
