function addCustomer() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": document.getElementById("txtname").value,
        "address": document.getElementById("txtAddress").value,
        "city": document.getElementById("txtcity").value,
        "date": document.getElementById("dateInput").value
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

async function loadTable() {
    let res = await fetch("http://localhost:8080/get-customers");
    let data = await res.json();
    

    document.getElementById("tblCustomers")
    let body = "";
    data.forEach((customer) => {
        body += `<tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.address}</td>
        <td>${customer.city}</td>
        <td>${customer.date}</td>
        </tr>`;
    });
    document.getElementById("tblCustomers").innerHTML = body;
}
loadTable();