// FORMULARIO //
// Seleção dos botões e o campo de Data de Volta
const idaVoltaBtn = document.getElementById('ida-volta-btn');
const somenteIdaBtn = document.getElementById('somente-ida-btn');
const dataVoltaGroup = document.getElementById('data-volta-group');

// Evento para "Ida e Volta"
idaVoltaBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Impede comportamento padrão do botão
    dataVoltaGroup.style.display = 'block'; // Mostra o campo Data de Volta
    idaVoltaBtn.classList.add('active');
    somenteIdaBtn.classList.remove('active');
});

// Evento para "Somente Ida"
somenteIdaBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Impede comportamento padrão do botão
    dataVoltaGroup.style.display = 'none'; // Esconde o campo Data de Volta
    somenteIdaBtn.classList.add('active');
    idaVoltaBtn.classList.remove('active');
});

// Inicialização: Certifica-se de que "Data de Volta" está visível por padrão
dataVoltaGroup.style.display = 'block';

