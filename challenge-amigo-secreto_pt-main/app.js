//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let InputSemNada= ''
let nomeNaLista = []
let numeroDeParticipantes= 0
let numerosJaSorteado = []




function texto(tag,texto){
let campo= document.querySelector(tag)
    campo.innerHTML = texto
}

function adicionarAmigo(){
let campo = document.querySelector('input').value
 if (nomeNaLista.includes(campo)|| campo == ''){
     alert('digite um nome valido por favor')
 }else{
    nomeNaLista.push(campo)
    numeroDeParticipantes++
    console.log(numeroDeParticipantes)
    console.log(nomeNaLista)
    limparNome()
    exibirAmigosNaTela ()

 }
}

    

function limparNome (){
    let campo = document.querySelector('input')
    campo.value = ''
}
function numeroAleatorio (){
    let campo= Math.floor(Math.random()*nomeNaLista.length)
return campo




}
let numeroSorteado
function sortearAmigo(){
do {numeroAleatorio()
    numeroSorteado = numeroAleatorio()
    

} while(numerosJaSorteado.includes(numeroSorteado))
    numerosJaSorteado.push(numeroSorteado)
    alert(`parabens, a pessoa sorteada foi ${nomeNaLista[numeroSorteado]}`)

}
function exibirAmigosNaTela (){
let campo = document.getElementById ('listaAmigos')
campo.innerHTML = ''
for(let i=0;  i < nomeNaLista.length;  i++){
    let item = document.createElement ('li')
    item.textContent = nomeNaLista[i]
    campo.appendChild(item)

}







}






    


// oque eu quero, quero que gere um ganhador, que vai ser definido apartir de um numero aleatorio, e quero que depois dele ser chamado o numero correspondendte nao seja chsmado mais vezes.



