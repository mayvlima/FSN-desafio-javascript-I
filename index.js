// Base a ser utilizada
let alunosDaEscola=[
{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Carlos",notas:[],cursos:[],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nomeAluno){  
    alunosDaEscola.push({nome:nomeAluno,notas:[],cursos:[],faltas:0})
    console.log (`O aluno *${nomeAluno}* acaba de ser adicionado no sitema!`)
    }
    

function listarAlunos(){
        /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
        Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
        let conteudo = ""
    alunosDaEscola.forEach((aluno, index) =>{        
        conteudo += `
        -----------
        Nome do aluno: ${aluno.nome}`
    aluno.cursos.forEach((curso, index) => {
        conteudo += `
        Nome do curso: ${curso.nomeDoCurso}
        Data da matricula: ${curso.dataMatricula}`
        }) 
        conteudo += `
        Notas do aluno: ${aluno.notas.join(" - ")}
        Quantidade de faltas: ${aluno.faltas} `
    })
        console.log(conteudo)
    }


function buscarAluno(nomeAluno){
            /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno.
             Ela deverá exibir um feedback, tanto para quando encontrar o aluno, 
             tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    if (alunosDaEscola.filter(aluno => aluno.nome.indexOf(nomeAluno) != -1)){
        console.log(`O aluno *${nomeAluno}* está matriculado!`)
    } else {
        console.log(`O aluno *${nomeAluno}* não está matriculado!`)
    }}

 
function matricularAluno(aluno, curso){
        /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
        Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
        Lembre-se de exibir o feedback para o usuário. */
}