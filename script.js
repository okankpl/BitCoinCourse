const API_KEY = "6GIG5K6TRB00VG1Z";

async function loadCourse() {
  let url =
    "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=" +
    API_KEY;
    let response = await fetch(url); // die url wird durch den fetch befehl heruntergeladen und in die variable response geladen
    let responseAsJson = await response.json(); // response wird als json geeladen und angezeigt
    let Bitcoincourse = Math.round(responseAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate']);
    console.log(Bitcoincourse);
    document.getElementById('course').innerHTML += `<h4><b>${Bitcoincourse} €</b></h4>`;
}
