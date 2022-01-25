function convert45(num) {

    if (num > 45) {
        return "O numero não pode ser maior que 45 minutos";
    } else {
        var tempo = num / 1.5
        var minutos = Math.floor(tempo);
        var segundos = Math.round((tempo - minutos) * 60);
        if (segundos < 10) {
            segundos = "0" + segundos;
        }
        return minutos + ":" + segundos;
    }

}



var inputs = document.querySelectorAll(".time");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function() {
        var num = this.value;
        if (num > 45) {
            alert("Limite de 45 minutos");
            num = 45;
        }
        var result = document.getElementById("result" + this.id);
        result.innerHTML = convert45(num);
    });

}

var sum = 0;
var sum2 = 0;
var inserts = document.querySelectorAll(".time");
for (var i = 0; i < inserts.length; i++) {
    inserts[i].addEventListener("keyup", function() {
        sum += Math.floor(parseInt(this.value));
        if (sum > 45) {
            alert("Limite de 45 minutos atingido");
            sum = 45;
        }
        sum2 = convert45(sum);
        var sumres = document.getElementById("sum1");
        var sum2res = document.getElementById("sum2");
        sumres.innerHTML = sum;
        sum2res.innerHTML = sum2;
    });
}