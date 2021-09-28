window.addEventListener("load", loadRates);

document.getElementById("currency1").addEventListener("input", change2);
document.getElementById("type1").addEventListener("change", change1);

document.getElementById("currency2").addEventListener("input", change1);
document.getElementById("type2").addEventListener("change", change2);


function change1() {
    var dropdown1 = document.getElementById("type1");
    var currency1 = dropdown1.options[dropdown1.selectedIndex].value;
    var input1 = document.getElementById("currency1");

    var dropdown2 = document.getElementById("type2");
    var currency2 = dropdown2.options[dropdown2.selectedIndex].value;
    var input2 = document.getElementById("currency2");

    convert(parseFloat(input2.value), currency2, currency1, input1);
}

function change2() {
    var dropdown1 = document.getElementById("type1");
    var currency1 = dropdown1.options[dropdown1.selectedIndex].value;
    var input1 = document.getElementById("currency1");

    var dropdown2 = document.getElementById("type2");
    var currency2 = dropdown2.options[dropdown2.selectedIndex].value;
    var input2 = document.getElementById("currency2");

    convert(parseFloat(input1.value), currency1, currency2, input2);
}

function convert(amount, from, to, fieldToEdit) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://mycorsproxyalmog.herokuapp.com/https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml");
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var data = this.responseText;

            var toEURrate = 0.0;
            if (from == "EUR") {
                toEURrate = 1.0;
            } else {
                var regex = from + "' rate='.+'"
                var match = data.match(regex)[0]

                toEURrate = parseFloat(match.substring(regex.length - 3, match.length - 1)).toFixed(3);
            }

            var fromEURrate = 0.0;
            if (to == "EUR") {
                fromEURrate = 1.0;
            } else {
                var regex = to + "' rate='.+'"
                var match = data.match(regex)[0]

                fromEURrate = parseFloat(match.substring(regex.length - 3, match.length - 1)).toFixed(3);
            }

            fieldToEdit.value = Number((amount / toEURrate * fromEURrate).toFixed(3));
        }
    });

    xhr.send();
}

function loadRates() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml");
    xhr.withCredentials = false;
    xhr.send();
}
