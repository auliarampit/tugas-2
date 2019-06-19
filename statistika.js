function Utama(){
    let nilai = [70, 60, 65, 65, 30, 40]
    nilai.sort()
    console.log('\nMean : '+cariMean(nilai))
    console.log('\nMedium :'+cariMedian(nilai))
    console.log('\nModus : '+cariModus(nilai))
}

function cariMean(data){
    let mean = data.reduce((tambah, current) => tambah + current) / data.length
    return mean
}

function cariMedian(data){
    let median = 0
    if(data.length%2 ==0){
        median = (data[(data.length/2)-1] + data [Math.ceil(data.length/2)])/2
    }else{
        median = (data[Math.ceil(data.length/2)])
    }
    return median
}

function cariModus(data){
    let frekuensiTerbanyak = 0
    let modus = 0
    for(let i = 0; i<data.length; i++){
        let frekuensi = 0
        for(let j=0; j<data.length; j++){
            if(data[i] === data[j] && i !==j){
                frekuensiTerbanyak = frekuensi
                modus = i
            }
        }
    }
    return data[modus]
}
Utama()