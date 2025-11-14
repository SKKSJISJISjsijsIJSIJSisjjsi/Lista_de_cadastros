const api = 'http://localhost:3000/aluno';

function criarTarefaHTML(cadastro) {
    const data = new Date(cadastro.data);
    return `
                <li data-id="${cadastro.id}" class="${cadastro.status ? 'concluida' : ''}">
                <span>
                    <i class="fa-regular fa-circle${cadastro.status ? '-check' : ''}"></i>
                    <strong>${cadastro.id_aluno}</strong> - ${cadastro.nome_aluno} 
                    <small><i class="fa-regular fa-calendar"></i> ${data.toLocaleDateString('pt-BR')}</small>
                </span>
                <div class="acoes">
                    <button class="concluir" title="Concluir"><i class="fa-solid fa-check"></i></button>
                    <button class="remover" title="Remover"><i class="fa-solid fa-trash"></i></button>
                </div>
                </li>
            `;
}

function carregarcadastro() {
    fetch(api)
        .then(res => res.json())
        .then(cadastro => {
            const ul = document.getElementById('lista-cadastro');
            ul.innerHTML = '';
            cadastro.forEach(cadastro => {
                ul.innerHTML += criarTarefaHTML(cadastro);
            });
        });
}
const form = document.getElementById('form-cadastro')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // const id_aluno = document.getElementById('id_aluno').value;
    // const nome_aluno = document.getElementById('nome_aluno').value;
    // const data = document.getElementById('data').value;
    // const cep = document.getElementById('cep').value;
    const novo_aluno = new FormData(form)
    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novo_aluno)
    })
        .then((resposta) => {
            if (resposta.ok) { 
                return resposta.json() 
            } else{
                console.log("Erro "+resposta.status)
            }
        })
        .then((retorno) => {
            console.log(retorno)
            // carregarcadastro();
            //  this.reset();
        });
});

document.getElementById('lista-cadastro').addEventListener('click', function (e) {
    const li = e.target.closest('li');
    if (!li) return;
    const id = li.getAttribute('data-id');
    if (e.target.closest('.remover')) {
        fetch(`${api}/${id}`, { method: 'DELETE' }).then(carregarcadastro);
    }
    if (e.target.closest('.concluir')) {
        fetch(`${api}/${id}/concluir`, { method: 'PATCH' }).then(carregarcadastro);
    }
});

carregarcadastro();
