function change1() {
    var dropdown1 = document.getElementById("type1");
    var currency1 = dropdown1.options[dropdown1.selectedIndex].value;
    var input1 = document.getElementById("currency1");

    var dropdown2 = document.getElementById("type2");
    var currency2 = dropdown2.options[dropdown2.selectedIndex].value;
    var input2 = document.getElementById("currency2");

    input1.value = convert(input2, currency2, currency1);
}

function change2() {
    var dropdown1 = document.getElementById("type1");
    var currency1 = dropdown1.options[dropdown1.selectedIndex].value;
    var input1 = document.getElementById("currency1");

    var dropdown2 = document.getElementById("type2");
    var currency2 = dropdown2.options[dropdown2.selectedIndex].value;
    var input2 = document.getElementById("currency2");

    input2.value = convert(input1, currency1, currency2);
}

function convert(amount, from, to) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml");
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.send();
}
