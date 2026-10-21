function estacao(){
    let mes = prompt("Digite um mês Ex: dezembro");
    let mostrar = document.getElementById('resultado');


    mes = mes.toUpperCase();

    if(mes == 'JANEIRO' || mes == 'FEVEREIRO' || mes == 'DEZEMBRO'){
        alert("mês de verão")

    }
    if(mes == 'MARÇO' || mes == 'APRIL' || mes == 'MAIO'){
        alert("mês de outono")

    }
    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
        alert("mês de inverno")

    }
    if(mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO'){
        alert("mês de primavera")

    }

}