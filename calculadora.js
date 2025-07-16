// Função para limpar o display
function clean() {
    document.getElementById('resultado').innerText = '';
}

// Função para apagar o último caractere
function back() {
    let display = document.getElementById('resultado').innerText;
    display = display.slice(0, -1);
    document.getElementById('resultado').innerText = display;
}

// Função para inserir um valor no display
function insert(value) {
    document.getElementById('resultado').innerText += value;
}

// Função para calcular a expressão
function calcular() {
    let display = document.getElementById('resultado').innerText;
    // Trocar 'X' por '*' para multiplicação
    display = display.replace(/X/g, '*');
    try {
        let resultado = eval(display);
        document.getElementById('resultado').innerText = resultado;
    } catch (error) {
        document.getElementById('resultado').innerText = 'Erro';
    }
}