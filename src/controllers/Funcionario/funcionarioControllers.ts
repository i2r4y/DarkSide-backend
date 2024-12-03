import { Request, Response } from "express";
import { FuncionariosServices } from "../../services/Funcionario/FuncionarioServices";

class FuncionariosControllers {
  async cadastro_funcionario(req: Request, res: Response) {
    const {
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
    } = req.body;
    const funcionariosServices = new FuncionariosServices();
    const resposta = await funcionariosServices.cadastro_funcionario({
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
    });
    return res.json(resposta);
  }
}

export { FuncionariosControllers };
