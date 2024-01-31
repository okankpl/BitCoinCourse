const API_KEY = "6GIG5K6TRB00VG1Z";
let months = [
    "2021-10-31", "2021-11-30", "2021-12-31",
    "2022-01-31", "2022-02-28", "2022-03-31",
    "2022-04-30", "2022-05-31", "2022-06-30",
    "2022-07-31", "2022-08-31", "2022-09-30",
    "2022-10-31", "2022-11-30", "2022-12-31",
    "2023-01-31", "2023-02-28", "2023-03-31",
    "2023-04-30", "2023-05-31", "2023-06-30",
    "2023-07-31", "2023-08-31", "2023-09-30",
    "2023-10-31", "2023-11-30", "2023-12-31",
    "2024-01-31"
  ];
  let course =[]

async function loadCourse() {
  let url =
    "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=" +
    API_KEY;
  let response = await fetch(url); // die url wird durch den fetch befehl heruntergeladen und in die variable response geladen
  let responseAsJson = await response.json(); // response wird als json geeladen und angezeigt
  let Bitcoincourse = Math.round(
    responseAsJson["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
  document.getElementById( "course").innerHTML += 
  `<h4><b>${Bitcoincourse} €</b></h4>`;
  loadMonthlyCourse();
}

async function loadMonthlyCourse() {
  let url =
    'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CNY&apikey=' +
    API_KEY;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    let monthlyCourse = responseAsJson['Time Series (Digital Currency Monthly)'];
    console.log(responseAsJson['Time Series (Digital Currency Monthly)']['2024-01-31']['1b. open (USD)']);

    for (let i = 0; i < months.length; i++) {
        const courseEachMonth = Math.round(monthlyCourse[months[i]]['1b. open (USD']);
        course.push(courseEachMonth);
    }
}
