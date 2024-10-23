// Contador de Cliques
let count = 0;
document.getElementById('clickCounterBtn').addEventListener('click', function() {
    count++;
    document.getElementById('counter').textContent = "Cliques: " + count;
});

// Mostrar/Esconder Texto
const textToToggle = document.getElementById('textToToggle');
const toggleTextBtn = document.getElementById('toggleTextBtn');
toggleTextBtn.addEventListener('click', function() {
    if (textToToggle.style.display === 'none') {
        textToToggle.style.display = 'block';
        toggleTextBtn.textContent = 'Esconder';
    } else {
        textToToggle.style.display = 'none';
        toggleTextBtn.textContent = 'Mostrar';
    }
});
