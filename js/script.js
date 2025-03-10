preventForm = document.getElementById("prevent");
const backendSelect = "backend";
const frontendSelect = "frontend";
const projectSelect = "project";
const sumP = document.getElementById("sum");
const codeInput = document.getElementById("code");
const sconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let workSelect = document.getElementById("work").value;

preventForm.addEventListener("submit", gestisciForm);

for (let i = 0; i < sconto.length; i++) {
    const curSconto = sconto[i];


}




function gestisciForm(event) {
    event.preventDefault();
    let workSelect = document.getElementById("work").value;
    let prezzo;
    if (workSelect === projectSelect) {
        prezzo = 10 * 33.60
        console.log(prezzo);

    } else if (workSelect === frontendSelect) {
        prezzo = 10 * 15.30
    } else {
        prezzo = 10 * 20.50
    }

    let prezzoScontato = codeInput.value;
    

    const tot = prezzo.toFixed(2);
    sumP.innerHTML = `<i class="bi bi-currency-euro"></i> ${tot}`

}










