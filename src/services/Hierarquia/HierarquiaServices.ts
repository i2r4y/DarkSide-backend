import prismaClient from "../../prisma";

interface Hierarquia {
  nome: string;
}

class HierarquiaServices {
  async cadastrar_hierarquia({ nome }: Hierarquia) {
    const resposta = await prismaClient.hierarquia.create({
      data: {
        nome,
      },
    });
    return { dados: "Hierarquia Efetuada Com Sucesso" }
  }
}

export {HierarquiaServices}
