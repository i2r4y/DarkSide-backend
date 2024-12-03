import { Request, Response } from "express";
import { FornecedoresServices } from "../../services/Fornecedores/FornecedoresServices";

class FornecedoresControllers {
    async cadastro_fornecedores(req: Request, res: Response) {
      const {
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
      } = req.body;
      const fornecedoresServices = new FornecedoresServices();
      const resposta = await fornecedoresServices.cadastro_fornecedores({
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
      });
      return res.json(resposta);
    }
  }
  
  export { FornecedoresControllers };
  