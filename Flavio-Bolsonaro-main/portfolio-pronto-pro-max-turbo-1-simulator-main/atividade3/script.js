function calcular(){
    let nota1trim = Number(prompt("digite a nota do primeiro trimestre:"))
    let nota2trim = Number(prompt("digite a nota do segundo trimestre:"))

    let resultado = 180-(nota1trim+nota2trim);
    alert("voce precisa de " + resultado + "para ser aprovado")

    if(resultado <= 0){
        alert("Congratulation!, You already aprovado of the nota!!!");
    } else{
        alert("vocẽ precisa de " + resultado +  " para ser aprovado.");
    }

}