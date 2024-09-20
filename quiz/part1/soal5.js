//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    let empty = ''
    let jumlah = 0
    for(let i = 0; i < kata.length; i++){
        jumlah = abjad.indexOf(kata[i]) + 1
        empty += abjad[jumlah]
    }
    return empty
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu