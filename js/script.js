preventForm = document.getElementById("prevent");
const backendSelect = "backend";
const frontendSelect = "frontend";
const projectSelect = "project";
const sumP = document.getElementById("sum");
const codeInput = document.getElementById("code");
const sconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



preventForm.addEventListener("submit", gestisciForm);





function gestisciForm(event) {
    event.preventDefault();
    let workSelect = document.getElementById("work").value;
    let prezzo;
    const hours = 10;
    if (workSelect === backendSelect) {
        prezzo = hours * 20.50
        console.log(prezzo);

    } else if (workSelect === frontendSelect) {
        prezzo = hours * 15.30
    } else if (workSelect === projectSelect) {
        prezzo = hours * 33.60
    } else {
        alert("Selezionare un tipo di lavoro")
    }

    let codiceSconto = codeInput.value;

    if (sconto.includes(codiceSconto)) {
        prezzo = prezzo * 0.75; 
    } else if (codiceSconto !== "") {
        alert("Codice promozionale non valido");
    }


    const tot = prezzo.toFixed(2);
    sumP.innerHTML = `<i class="bi bi-currency-euro"></i> ${tot}`

}










