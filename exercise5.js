function inverteString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    console.log(`String invertida: ${invertida}`);
}


inverteString("javascript"); 
