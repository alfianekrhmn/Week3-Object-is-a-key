//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    let empty1 = []
    let empty2 = []
    for(let i = 0; i <= angka1; i++){
        if(angka1 % i == 0){
            empty1.push(i)
        }
    }
    for(let j = 0; j <= angka2; j++){
        if(angka2 % j == 0){
            empty2.push(j)
        }
    }
    let beforeResult = []
    for(let k = 0; k < empty2.length; k++){
        if(empty1.indexOf(empty2[k]) != -1){
            beforeResult.push(empty2[k])
        }
    }
    return beforeResult[beforeResult.length - 1]
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1