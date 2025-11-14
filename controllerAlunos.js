import alunoModel from '../models/model.js';

const criarCadastro = async (req, res) => {
    try {
        const cadastro = req.body;
        console.log(cadastro);
        const id = await alunoModel.criarCadastro(cadastro);
        console.log(id);
        res.status(201).json({ id, ...cadastro });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cadastro' });
    }
};

const buscarCadastro = async (req, res) => {
    try {
        const cadastro = await alunoModel.buscarCadastro();
        res.status(200).json(cadastro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cadastros' })
    };
};

const buscarCadastroPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const cadastro = await alunoModel.buscarCadastroPorId(id);
        if (cadastro) {
            res.status(200).json(cadastro)
        } else {
            res.status(404).json({ error: 'Cadastro não encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao Buscar cadastro' })
    };
};

const atualizarCadastro = async (req, res) => {
    try {
        const { id } = req.params;
        const cadastro = req.body;
        await alunoModel.atualizarCadastro(id, cadastro);
        res.status(200).json({ id, ...cadastro })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar cadastro' });
    }
};
const deletarCadastro = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('ID da tarefa a ser deletada:', req.params.id);
        await alunoModel.deletarCadastro(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar cadastro' })
    }
};
const buscarCadastroPorStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const cadastro = await alunoModel.buscarCadastroPorStatus(status);
        res.status(200).json(cadastro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro por status' });
    }
};

const buscarCadastroPorData = async (req, res) => {
    try {
        const { data } = req.params;
        const cadastro = await alunoModel.buscarCadastroPorData(data);
        res.status(200).json(cadastro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro por data' })
    }

};

const filtrarCadastro = async (req, res) => {
    try {
        const { pesquisa } = req.query;
        const cadastro = await alunoModel.filtrarCadastro(pesquisa, pesquisa);
        res.status(200).json(cadastro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao filtrar tarefas' });
    }
};

export default {
    criarCadastro,
    buscarCadastro,
    buscarCadastroPorId,
    atualizarCadastro,
    deletarCadastro,
    buscarCadastroPorStatus,
    buscarCadastroPorData,
    filtrarCadastro
}