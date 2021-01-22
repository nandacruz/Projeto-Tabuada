// - comentario de linha
/*- comentario de bloco*/ 

//usando função

function calculaTabuada(){

    //pegando o tbody da tabuada(obetndo do DOM)
    let tabuada = document.querySelector("#tabuada tbody");
    //pegando o valor em string e convertendo para numerico(pegando do campo input number)
    let valorA = parseInt(document.querySelector("#valorA").value);

    tabuada.innerHTML = '';

    for (let valorB = 0; valorB <=10; valorB ++) {

        let resultado = valorA * valorB;
        //criando template da tabela    
        let template = 
            `
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            
            `;
        /*transformando uma string em um objeto para o retorno no html*/
        /*criando elemento tr*/
        let tr = document.createElement('tr')
        //inserindo tds/linha(template) dentro da tr
        tr.innerHTML = template;
        //adicionando
        tabuada.append(tr);
            
        
    }
}
//chamando funçao
calculaTabuada();
//adicionando evento, o change indica alteração
document.querySelector("#valorA").addEventListener('change', calculaTabuada);
