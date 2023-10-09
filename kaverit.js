let kaverit = [];

for (let i = 1; i <= 10; i++) {
    let nimi = prompt("Syötä " + i + ". kaverin nimi:");
    kaverit.push(nimi);
}

let kaveriLista = document.getElementById("kaverilista");

kaverit.forEach(function(nimi) {
    let listItem = document.createElement("li");
    listItem.textContent = nimi;
    kaveriLista.appendChild(listItem);
});