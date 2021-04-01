
function calculate() {
    var buy = document.getElementById("buy").value;
    var sell = document.getElementById("sell").value;
    var profit = (sell*0.88)-buy;
    var percent = (profit*100)/buy;
    document.getElementById("profit").innerHTML = profit.toFixed(2);
    document.getElementById("percent").innerHTML = percent.toFixed(2);
}

function clearMe () {
    document.getElementById("buy").value = '';
    document.getElementById("percent").innerHTML = '';
    document.getElementById("profit").innerHTML = '';
    document.getElementById("sell").value ='';

}



