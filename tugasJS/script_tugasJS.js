function hitung(){
    var jumlah = 0;
    var inputNum = []

    var input = document.getElementsByName('nilai[]');

    for (var i = 0; i < input.length; i++){
        if(input[i].value == "") input[i].value = 0;
        inputNum[i] = parseFloat(input[i].value);
    }    

    for (var i = 0; i < input.length; i++){
        jumlah = jumlah + inputNum[i]
    }

    inputNum.sort((a,b)=>a-b);

    var rerata = jumlah/inputNum.length;
    var nilaiMaks = inputNum[inputNum.length-1];
    var nilaiMin = inputNum[0];
    if(inputNum.length % 2 == 0){
        var nilaiTengah = (inputNum[inputNum.length/2] + inputNum[(inputNum.length/2)-1])/2;
    }else{
        var nilaiTengah = inputNum[(inputNum.length-1)/2];
    }
    if(nilaiMaks == nilaiTengah && nilaiMin == nilaiTengah){
        nilaiMaks = "Tidak ada"
        nilaiMin = "Tidak ada"
        nilaiTengah = "Tidak ada"
    }
    if(nilaiMaks == nilaiTengah || nilaiMin == nilaiTengah) nilaiTengah = "Tidak ada"

    document.getElementById('rerata').innerHTML = rerata;
    document.getElementById('max').innerHTML = nilaiMaks;
    document.getElementById('min').innerHTML = nilaiMin;
    document.getElementById('tengah').innerHTML = nilaiTengah; 
}

function blah(){
    document.getElementById('rerata').innerHTML = "";
    document.getElementById('max').innerHTML = "";
    document.getElementById('min').innerHTML = "";
    document.getElementById('tengah').innerHTML = "";
}
