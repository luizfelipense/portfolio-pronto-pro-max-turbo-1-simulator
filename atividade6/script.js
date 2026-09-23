function site(){
    let nome;
    let reusult;
    let agora = new Date;

    nome = prompt("Qual é o seu nome?");
    reusult = window.document.getElementById('resultado');

    reusult.innerHTML = `<p>Olá, ${nome}! É um prazer conhece-lo </br> O sistema me enviou a seguinte informação: <mark>${agora}</mark></p>`;
    
}