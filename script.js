

const rulesButton = document.querySelector('#btn-rules');
const rules = document.querySelector('#rules');
const closeRulesButton = document.querySelector('#btn-close');

// Show Rules
rulesButton.addEventListener('click', () => {
    rules.classList.add('show');
});

// Hide Rules
closeRulesButton.addEventListener('click', () => {
    rules.classList.remove('show');
});

