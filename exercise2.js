function verificaFibonacci(num) {
    let a = 0, b = 1, temp;

    while (a < num) {
        temp = a;
        a = b;
        b = temp + b;
    }

    if (a === num) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

verificaFibonacci(21); 
