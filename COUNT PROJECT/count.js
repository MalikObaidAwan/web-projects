// Get elements
const countLabel = document.getElementById('countLabel');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize count
let count = 0;
updateCountLabel();

// Increase count
increaseBtn.addEventListener('click', () => {
    count++;
    updateCountLabel();
});

// Decrease count
decreaseBtn.addEventListener('click', () => {
    count--;
    updateCountLabel();
});

// Reset count
resetBtn.addEventListener('click', () => {
    count = 0;
    updateCountLabel();
});

// Function to update count label
function updateCountLabel() {
    countLabel.textContent = count;
}
