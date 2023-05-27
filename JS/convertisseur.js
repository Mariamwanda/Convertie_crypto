
function showCurrencyName(){
    var selectCurrency = document.getElementById("toCurrency");
    var currencyName = selectCurrency.options[selectCurrency.selectedIndex].text;
    document.getElementById("currencyName").innerHTML = currencyName;
}

function showFromCurrencyName(){
    var selectFromCurrency = document.getElementById("fromCurrency");
    var fromcurrencyName = selectFromCurrency.options[selectFromCurrency.SelectedIndex].text;
    document.getElementById("fromCurrencyName").innerHTML = fromcurrencyName;
}