import db from '../database/conexao.js'

const criarCadastro = async (cadastro) =>{
    console.log('Criando Cadastro:', cadastro);
    const[result] = await db.query("INSERT INTO aluno SET ? ", cadastro)
    return result.insertId;
}

const buscarCadastro = async () => {
    const[rows] = await db.query('SELECT * FROM aluno');
    console.log('Cadastro encontrado', rows);
    return rows;
};

const atualizarCadastro = async (id, cadastro) => {
    await db.query('UPDATE aluno SET ? WHERE id_aluno = ?', [cadastro, id]);
    console.log('Cadastro atualizado:', {id, ...cadastro});
};

const deletarCadastro = async (id) => {
    await db.query('DELETE FROM aluno WHERE id_aluno = ?', id);
};
const buscarCadastroPorId = async(id) => {
    const [rows]= await db.query('SELECT * FROM aluno WHERE id_aluno = ?', id);
    return rows[0]
};
const buscarCadastroPorStatus = async(status) =>{
    const [rows] =await db.query('SELECT * FROM aluno WHERE status = ?', status);
    return rows;
};
const filtrarCadastro = async (nome_aluno) => {
    const [rows] = await db.query('SELECT * FROM cadastro WHERE nome_aluno LIKE ?', [`%${nome_aluno}`]);
    return rows;
}
const buscarCadastroPorData = async (data) =>{
    const [rows] = await db.query('SELECT * FROM aluno WHERE data =?', data);
    return rows;
};

export default {
    criarCadastro,
    buscarCadastro,
    atualizarCadastro,
    deletarCadastro,
    buscarCadastroPorId,
    buscarCadastroPorStatus,
    buscarCadastroPorData,
    filtrarCadastro
}