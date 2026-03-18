const MediaMinima = 7
let nota1  
let nota2 
let nota3 
let media
 function verificar() {

    nota1 = Number(document.getElementById("nota1").value)
    nota2 = Number(document.getElementById("nota2").value)
    nota3 = Number(document.getElementById("nota3").value)
 
media = (nota1 + nota2 + nota3) / 3

if (media >= MediaMinima) {
    document.getElementById("resultado").innerText = "Sua média é: "
     + media + "\nAprovado"
} else {
    document.getElementById("resultado").innerText = "Sua média é: "
     + media + "\nReprovado"
}

 }

