import prismaClient from "../../prisma";

interface vendasProps{
    valorTotal: string
    DataVenda : string
    funcionariosId: string
}

class VendasServices{
    async cadastrar_vendas({
        valorTotal,
        DataVenda,
        funcionariosId
    }:vendasProps){
        const resposta = await prismaClient.vendas.create({
            data:{
              valorTotal,
              DataVenda,
              funcionariosId  
            }
        })
        return { dados: "Cadastro Efetuado Com Sucesso" };
    }
}
export{VendasServices}