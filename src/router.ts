import {Router} from 'express'

import { UsuariosControllers } from './controllers/Usuarios/usuariosControllers'
import { HierarquiasControllers } from './controllers/Hierarquia/hierarquiaControllers'
import { FuncionariosControllers } from './controllers/Funcionario/funcionarioControllers'
import { FornecedoresControllers } from './controllers/Fornecedores/fornecedoresController'
import { VendasControllers } from './controllers/Vendas/vendasControllers'
import { LoginUsuariosControllers } from './controllers/Login/loginControllers'
import { estaAutenticado } from './middleware/estaAutenticado'

const router = Router()

router.post('/CadastroUsuarios',  new UsuariosControllers().cadastro_usuarios)
router.post('/Hierarquia', estaAutenticado, new HierarquiasControllers().cadastro_hierarquia)
router.post('/CadastroFuncionarios', estaAutenticado, new FuncionariosControllers().cadastro_funcionario)
router.post('/CadastroFornecedor', estaAutenticado,  new FornecedoresControllers().cadastro_fornecedores )
router.post('/CadastroVendas', estaAutenticado, new VendasControllers().cadastro_vendas)
router.post('/LoginUsuario', new LoginUsuariosControllers().loginUsuarios)

export default router 