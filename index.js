function calculo() {
    const V = parseInt(document.getElementById('V').value);
    const N = parseInt(document.getElementById('N').value);
    const multiplicador = Math.floor(N/5)
    let T;

    const resultado = document.getElementById('resultado');

    T = (5+V)*multiplicador+V+20

    console.log('Valor de N é: ' + N);
    console.log('Valor de V é: ' + V);
    resultado.innerText = `Seu vigor total é de ${T}`;
}