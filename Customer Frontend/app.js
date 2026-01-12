function addCustomer(){
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "id": 0,
  "name": "string",
  "address": "string",
  "city": "string",
  "date": "2026-01-07T17:39:12.190Z"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/add-customer", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

function loadTable(){
    
}