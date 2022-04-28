'use strict';

//variáveis
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;
let total = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos

btnVendas.addEventListener('click', venda, false);
btnVendas.addEventListener('click', totalVendas, false);
btnEstorno.addEventListener('click', estorno, false);
btnEstorno.addEventListener('click', totalVendas, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções

function venda(e) {
    if (document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);

    } else if (document.getElementById('mista').checked) {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);

    } else if (document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function estorno(e) {

    if (somaMussarela >= 1 && vendaMussarela >= 1) {
        if (document.getElementById('mussarela').checked) {
            somaMussarela = somaMussarela - 1;
            vendaMussarela = vendaMussarela - 25.00;
            document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
            document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
        }
    }
    
    if (somaMista >= 1 && vendaMista >= 1) {
        if (document.getElementById('mista').checked) {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    }
}
    if (somaCalabresa >= 1 && vendaCalabresa >= 1) {
    if (document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}
}

function totalVendas(e){
    total = vendaMussarela + vendaMista + vendaCalabresa;
    document.getElementById('totalVendas').innerHTML = total.toFixed(2);
}

function planilha(e){
    TableToExcel.convert(document.getElementById('table'));
}