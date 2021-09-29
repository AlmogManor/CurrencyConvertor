var root = document.querySelector(':root');

window.addEventListener("load", loadPage);

function loadPage() {
    var data = window.localStorage.getItem('colorsData');
    if (data != null) {
        const values = data.split("#");

        root.style.setProperty("--currencyTypeColor", "#" + values[1]);
        root.style.setProperty("--currencyTypeBackgroundColor", "#" + values[2]);
        root.style.setProperty("--textColor", "#" + values[3]);
        root.style.setProperty("--textBackgroundColor", "#" + values[4]);
        root.style.setProperty("--textBorderColor", "#" + values[5]);
        root.style.setProperty("--backgroundColor", "#" + values[6]);


    }

    loadColors();
}

function loadColors() {
    cpCurrencyType.value = getComputedStyle(document.documentElement).getPropertyValue("--currencyTypeColor");
    cpCurrencyTypeBackground.value = getComputedStyle(document.documentElement).getPropertyValue("--currencyTypeBackgroundColor");
    cpText.value = getComputedStyle(document.documentElement).getPropertyValue("--textColor");
    cpTextBackground.value = getComputedStyle(document.documentElement).getPropertyValue("--textBackgroundColor");
    cpTextBorder.value = getComputedStyle(document.documentElement).getPropertyValue("--textBorderColor");
    cpBackground.value = getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
}

function saveColors() {
    var colors = "";
    colors += getComputedStyle(document.documentElement).getPropertyValue("--currencyTypeColor");
    colors += getComputedStyle(document.documentElement).getPropertyValue("--currencyTypeBackgroundColor");
    colors += getComputedStyle(document.documentElement).getPropertyValue("--textColor");
    colors += getComputedStyle(document.documentElement).getPropertyValue("--textBackgroundColor");
    colors += getComputedStyle(document.documentElement).getPropertyValue("--textBorderColor");
    colors += getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");

    window.localStorage.setItem('colorsData', colors);
}


document.getElementById("reset-button").addEventListener("click", resetButton);
function resetButton() {
    root.style.setProperty("--currencyTypeColor", "#86CEEB");
    root.style.setProperty("--currencyTypeBackgroundColor", "#FFFFFF");
    root.style.setProperty("--textColor", "#000000");
    root.style.setProperty("--textBackgroundColor", "#FFFFFF");
    root.style.setProperty("--textBorderColor", "#7C7C7C");
    root.style.setProperty("--backgroundColor", "#FFFFFF");

    saveColors();
    loadColors();
}

let cpCurrencyType = document.getElementById("cp-currency-type");
cpCurrencyType.onchange = function () {
    document.getElementById("cp-currency-type-v").innerHTML = cpCurrencyType.value;

    root.style.setProperty("--currencyTypeColor", cpCurrencyType.value);
    saveColors();
}

//--------------------------------------------------------------------

let cpCurrencyTypeBackground = document.getElementById("cp-currency-type-background");
cpCurrencyTypeBackground.onchange = function () {
    document.getElementById("cp-currency-type-background-v").innerHTML = cpCurrencyTypeBackground.value;

    root.style.setProperty("--currencyTypeBackgroundColor", cpCurrencyTypeBackground.value);
    saveColors();
}

//--------------------------------------------------------------------

let cpText = document.getElementById("cp-text");
cpText.onchange = function () {
    document.getElementById("cp-text-v").innerHTML = cpText.value;

    root.style.setProperty("--textColor", cpText.value);
    saveColors();
}

//--------------------------------------------------------------------

let cpTextBackground = document.getElementById("cp-text-background");
cpTextBackground.onchange = function () {
    document.getElementById("cp-text-background-v").innerHTML = cpTextBackground.value;

    root.style.setProperty("--textBackgroundColor", cpTextBackground.value);
    saveColors();
}

//--------------------------------------------------------------------

let cpTextBorder = document.getElementById("cp-text-border");
cpTextBorder.onchange = function () {
    document.getElementById("cp-text-border-v").innerHTML = cpTextBorder.value;

    root.style.setProperty("--textBorderColor", cpTextBorder.value);
    saveColors();
}

//--------------------------------------------------------------------

let cpBackground = document.getElementById("cp-background");
cpBackground.onchange = function () {
    document.getElementById("cp-background-v").innerHTML = cpBackground.value;

    root.style.setProperty("--backgroundColor", cpBackground.value);
    saveColors();
}