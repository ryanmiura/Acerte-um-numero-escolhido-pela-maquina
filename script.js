var numeroSecreto = (Math.random()*10).toFixed(0)
console.log(numeroSecreto)
function Chutar() {
   var chute = document.getElementById("valor")
   var chuteNumerico = parseInt(chute.value)
   var resposta = document.getElementById("resultado")
   
   if(chuteNumerico == numeroSecreto) {
       var mensagem = "Acertou!"
       resposta.innerHTML = mensagem
       
   } 

   else if (chuteNumerico < numeroSecreto) {
    var mensagem = "Errou ! O numero secreto é maior do que você chutou!"
    resposta.innerHTML = mensagem
   }
   
   else if (chuteNumerico > numeroSecreto) {
    var mensagem = "Errou ! O numero secreto é menor do que você chutou!"
    resposta.innerHTML = mensagem
   }

   else if (chuteNumerico > 10 || chuteNumerico < 0)  {
   var mensagem = "Você precisa digitar um numero entre 0 e 10!"
       resposta.innerHTML = mensagem
   }
   else {
    var mensagem = "Errou!"
    resposta.innerHTML = mensagem
   }
   
   
}