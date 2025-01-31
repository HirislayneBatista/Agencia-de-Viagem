// // FORMULARIO //
// // Seleção dos botões e o campo de Data de Volta
// const idaVoltaBtn = document.getElementById('ida-volta-btn');
// const somenteIdaBtn = document.getElementById('somente-ida-btn');
// const dataVoltaGroup = document.getElementById('data-volta-group');

// // Evento para "Ida e Volta"
// idaVoltaBtn.addEventListener('click', (e) => {
//     e.preventDefault(); // Impede comportamento padrão do botão
//     dataVoltaGroup.style.display = 'block'; // Mostra o campo Data de Volta
//     idaVoltaBtn.classList.add('active');
//     somenteIdaBtn.classList.remove('active');
// });

// // Evento para "Somente Ida"
// somenteIdaBtn.addEventListener('click', (e) => {
//     e.preventDefault(); // Impede comportamento padrão do botão
//     dataVoltaGroup.style.display = 'none'; // Esconde o campo Data de Volta
//     somenteIdaBtn.classList.add('active');
//     idaVoltaBtn.classList.remove('active');
// });

// // Inicialização: Certifica-se de que "Data de Volta" está visível por padrão
// dataVoltaGroup.style.display = 'block';



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
    