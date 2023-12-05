function calcular() {
const nota1 = parseFloat(document.calculatorMedia.not1.value);
const nota2 = parseFloat(document.calculatorMedia.not2.value);
let media;
let situacao;

media = (nota1 + nota2)/2;

if (media < 5){
    situacao = "Reprovado";
}
else if (media <= 8) {
    situacao = "Aprovado";
}
else {
    situacao = "Aprovado com Destaque";
}
const paragrafoAprovado = document.querySelector('.aprovado');
paragrafoAprovado.innerHTML = situacao;

const paragrafoSituacao = document.querySelector('.situacao'); 
paragrafoSituacao.innerHTML = media;

}
