let rates = []
document.addEventListener('DOMContentLoaded', function() {
//USD based
// fetch("https://api.ratesapi.io/api/latest?base=USD").then(response => response.json()).then(data => {
    fetch("https://api.exchangerate.host/latest?base=BTC").then(response => response.json()).then(data => {    
    document.querySelector('#date').innerHTML = "As of: " + data.date;    
    
    rates = data.rates;
    document.querySelector('#usd').innerHTML = 'US Dollar:   ' + rates.USD.toFixed(2); 
    document.querySelector('#eur').innerHTML = 'Euro:   ' + rates.EUR.toFixed(2); 
    document.querySelector('#cny').innerHTML = 'Chinese Yuan: ' + rates.CNY.toFixed(2);    
    document.querySelector('#krw').innerHTML = 'Korean Won:   ' + rates.KRW.toFixed(2); 
    document.querySelector('#jpy').innerHTML = 'Japanese Yen:   ' + rates.JPY.toFixed(2); 
    document.querySelector('#inr').innerHTML = 'Indian Rupee:   ' + rates.INR.toFixed(2); 
    document.querySelector('#aud').innerHTML = 'Australian Dollar:   ' + rates.AUD.toFixed(2); 
    document.querySelector('#gbp').innerHTML = 'British Pound:   ' + rates.GBP.toFixed(2); 
    document.querySelector('#rub').innerHTML = 'Russian Ruble:   ' + rates.RUB.toFixed(2); 
    document.querySelector('#cad').innerHTML = 'Canadian Dollar:   ' + rates.CAD.toFixed(2); 
    document.querySelector('#mxn').innerHTML = 'Mexican Peso:   ' + rates.MXN.toFixed(2); 
    
 })

})

/* $(document).ready(function () {

    $('xdiv').hover(
    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('src');
            $(this).attr('src', $(this).attr('data-alt-src'));
            $(this).attr('data-alt-src', $temp);
        });

        $(this).fadeIn();
    },

    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('data-alt-src');
            $(this).attr('data-alt-src', $(this).attr('src'));
            $(this).attr('src', $temp);
        });

        $(this).fadeIn();

    });
}); */