// FORMULARIO //
document.addEventListener("DOMContentLoaded", function () {
    const somenteIdaBtn = document.getElementById("somente-ida-btn");
    const idaVoltaBtn = document.getElementById("ida-volta-btn");
    const dataVoltaContainer = document.getElementById("data-volta-container");

    // Esconde o campo "Data de Volta" no início (opcional)
    dataVoltaContainer.style.display = "block";

    somenteIdaBtn.addEventListener("click", function (event) {
        event.preventDefault();
        dataVoltaContainer.style.display = "none";
        document.getElementById("data-volta").value = ""; // Limpa a data
    });

    idaVoltaBtn.addEventListener("click", function (event) {
        event.preventDefault();
        dataVoltaContainer.style.display = "block";
    });
});
    
