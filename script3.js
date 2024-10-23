document.getElementById('addItemBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('itemInput').value;
    if (inputValue.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = inputValue;
        li.className = 'list-group-item';
        document.getElementById('itemList').appendChild(li);
        document.getElementById('itemInput').value = '';
    }
});

const square = document.getElementById('square');
let topPosition = 50;
let leftPosition = 50;

document.addEventListener('keydown', function(event) {
    const step = 10;
    switch (event.key) {
        case 'ArrowUp':
            topPosition -= step;
            break;
        case 'ArrowDown':
            topPosition += step;
            break;
        case 'ArrowLeft':
            leftPosition -= step;
            break;
        case 'ArrowRight':
            leftPosition += step;
            break;
    }
    square.style.top = topPosition + 'px';
    square.style.left = leftPosition + 'px';
});
