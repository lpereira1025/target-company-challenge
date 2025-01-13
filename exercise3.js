const faturamentoMensal = [
    { dia: 1, valor: 221.0 },
    { dia: 2, valor: 180.5 },
    { dia: 3, valor: 0.0 },
    { dia: 4, valor: 300.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 500.0 },
];

function analisaFaturamento(faturamento) {
    let valores = faturamento.filter(f => f.valor > 0).map(f => f.valor);
    let menor = Math.min(...valores);
    let maior = Math.max(...valores);
    let media = valores.reduce((sum, val) => sum + val, 0) / valores.length;
    let diasAcimaMedia = valores.filter(val => val > media).length;

    console.log(`Menor valor: ${menor}`);
    console.log(`Maior valor: ${maior}`);
    console.log(`Dias acima da média: ${diasAcimaMedia}`);
}


analisaFaturamento(faturamentoMensal);
