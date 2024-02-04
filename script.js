document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('.results');
    let width = 5;
    let shipLocation = Math.floor(Math.random() * (width * width));
    let attempts = 0;
    let hits = 0;
    let isSunk = false;
    const maxAttempts = 3;

    // Create Board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.dataset.id = i;
            grid.appendChild(square);

            square.addEventListener('click', function(e) {
                let squareId = e.target.dataset.id;
                if(squareId == shipLocation) {
                    e.target.classList.add('hit');
                    resultDisplay.textContent = 'Hit!';
                    hits++;
                    if (hits === 1) {
                        isSunk = true;
                        resultDisplay.textContent = 'You sunk the battleship!';
                    }
                } else {
                    e.target.classList.add('miss');
                    resultDisplay.textContent = 'Miss!';
                }
                attempts++;
                if(attempts === maxAttempts) {
                    resultDisplay.textContent += ' Game Over!';
                    if(!isSunk) {
                        revealShip();
                    }
                }
            });
        }
    }

    function revealShip() {
        const ship = document.querySelector(`[data-id='${shipLocation}']`);
        ship.classList.add('ship');
    }

    createBoard();
});