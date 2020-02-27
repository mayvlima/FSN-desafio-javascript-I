// Base a ser utilizada
const alunosDaEscola=[
{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Carlos",notas:[],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nome){
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/  
    alunosDaEscola.push({nome,notas:[],cursos:[],faltas:0})
    console.log (`O aluno *${nome}* acaba de ser adicionado no sitema!`)
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




function buscarAluno(nome){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno.
    Ela deverá exibir um feedback, tanto para quando encontrar o aluno, 
    tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    let alunoFiltrado = alunosDaEscola.filter(aluno => aluno.nome.indexOf(nome) != -1)
    if (alunoFiltrado.length != 0){
        console.log(`O aluno *${nome}* está na lista de estudantes da escola!`)
    } else {
        console.log(`O aluno *${nome}* não está na lista de estudantes da escola!`)
    }}



  
function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
    let alunoFiltrado = alunosDaEscola.filter(alunoMatriculado => alunoMatriculado.nome.indexOf(aluno.nome) != -1)
    if (alunoFiltrado.length != 0){
        for(alunoProcurado of alunoFiltrado){
            if (alunoProcurado.nome == aluno.nome){
                alunoProcurado.cursos.push({nomeDoCurso: curso, dataMatricula: new Date})
                console.log(`O aluno *${aluno.nome}* foi matriculado no curso *${curso}* no dia ${alunoProcurado.cursos[alunoProcurado.cursos.length-1].dataMatricula}`)
            }
        }
    } else {
        console.log(`O aluno *${aluno.nome}* não está na lista de estudantes da escola. Não séra possível matricular em um curso.`)
    }}




function aplicarFalta(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. 
     Você deverá dar um feedback ao concluir a tarefa.
     Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
    let alunoFiltrado = alunosDaEscola.filter(alunoMatriculado => alunoMatriculado.nome.indexOf(aluno.nome) != -1)
    if (alunoFiltrado.length != 0){
       for(alunoProcurado of alunoFiltrado){
           if (alunoProcurado.cursos.length != 0){
            alunoProcurado.faltas = alunoProcurado.faltas + 1
            console.log(`Foi adicionado mais uma falta para o aluno *${aluno.nome}*. Agora ele tem um total de ${alunoProcurado.faltas} faltas `)
           } else {
            console.log(`O aluno *${aluno.nome}* não está matriculado em nenhum curso. Não será possivel aplicar uma falta!`) 
           }}
    }}



function aplicarNota(aluno, nota){
    /*Ao receber um aluno devidamente cadastrado em nossa lista. 
    Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. 
    Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.*/
    let alunoFiltrado = alunosDaEscola.filter(alunoMatriculado => alunoMatriculado.nome.indexOf(aluno.nome) != -1)
    if (alunoFiltrado.length != 0){
        for(alunoProcurado of alunoFiltrado){
            if (alunoProcurado.cursos.length != 0){
            alunoProcurado.notas.push(nota)
            console.log(`Foi adicionado ao aluno *${aluno.nome}* a nota *${aluno.notas.join(" - ")}*. Agora ele tem as seguinte(s) nota(s): ${alunoProcurado.notas.join(" - ")} `)
            } else {
            console.log(`O aluno *${aluno.nome}* não está matriculado em nenhum curso. Não será possivel aplicar notas.`) 
            }}
    }}



function aprovarAluno(aluno){
        /*Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. 
        Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
        Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.*/
        let somatoria = aluno.notas.reduce((acum, valor) => {
            return acum + valor
        })
        let media = somatoria / 3
        if(aluno.cursos.length != 0){
            if(media >= 7 && aluno.faltas <= 3){
            console.log(`O aluno *${aluno.nome}* foi aprovada no curso *${aluno.cursos[aluno.cursos.length-1].nomeDoCurso}* com uma média de *${media.toFixed(2)}*`) 
            } if (media < 7) {
            console.log(`O aluno *${aluno.nome}* não foi aprovada no curso *${aluno.cursos[aluno.cursos.length-1].nomeDoCurso}* pois sua média foi *${media.toFixed(2)}*, menor do que o necessário para a aprovacão!`) 
            } else{
            console.log(`O aluno *${aluno.nome}* não foi aprovada no curso *${aluno.cursos[aluno.cursos.length-1].nomeDoCurso}* pois teve um total de *${aluno.faltas}* faltas, ultrapassando o máximo permitido!`)    
            }} else{
            console.log(`O aluno *${aluno.nome}* não está matriculado em nenhum curso. Não será possivel avaliar sua aprovacão!`)
        }}

