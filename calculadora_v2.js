let memory = 0;

// Função para limpar o display
function clean() {
    document.getElementById('entrada').innerText = '';
    document.getElementById('resultado').innerText = '';
}

// Função para apagar o último caractere
function back() {
    let display = document.getElementById('entrada').innerText;
    display = display.slice(0, -1);
    document.getElementById('entrada').innerText = display;
}

// Função para inserir um valor no display
function insert(value) {
    document.getElementById('entrada').innerText += value;
}

// Função para calcular a expressão
function calcular() {
    let display = document.getElementById('entrada').innerText;
    display = display.replace(/X/g, '*');
    try {
        let resultado = eval(display);
        document.getElementById('resultado').innerText = resultado;
    } catch (error) {
        document.getElementById('resultado').innerText = 'Erro';
    }
}

// Função para adicionar valor à memória
function memoryAdd() {
    let display = document.getElementById('resultado').innerText;
    memory += parseFloat(display);
}

// Função para recuperar o valor da memória
function memoryRecall() {
    document.getElementById('entrada').innerText += memory;
}