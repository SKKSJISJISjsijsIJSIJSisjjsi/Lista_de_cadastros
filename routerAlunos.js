import express from 'express';
import controllerAlunos from '../controllers/controllerAlunos.js';

const router = express.Router();

router.post('/', controllerAlunos.criarCadastro);
router.get('/', controllerAlunos.buscarCadastro);
router.get('/status/:status', controllerAlunos.buscarCadastroPorStatus);
router.get('/data/:data', controllerAlunos.buscarCadastroPorData);
router.get('/filtro', controllerAlunos.filtrarCadastro);
router.get('/:id', controllerAlunos.buscarCadastroPorId);
router.put('/:id', controllerAlunos.atualizarCadastro);
router.delete('/:id', controllerAlunos.deletarCadastro);

export default router;