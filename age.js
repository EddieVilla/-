console.log('hello dev!');

function getStartMs() {
const input = document.getElementById('start-date');
if (input && input.value) {
const [y, m, d] = input.value.split('-').map(Number);
return Date.UTC(y, m - 1, d, 0, 0, 0);
}
return Date.UTC(1995, 0, 1, 0, 0, 0);
}
const msPerYear = 1000 * 60 * 60 * 24 * 365.2425; // average year length
function renderYearsSince() {
const startMs = getStartMs();
const nowMs = Date.now();
const currentYear = Math.round(((nowMs - startMs) / msPerYear) * 1e9) / 1e9;
const container = document.getElementById('years-since-1995');
if (container) {
container.textContent = currentYear.toFixed(9);
}
}

renderYearsSince();
setInterval(renderYearsSince, 100);

const dateInput = document.getElementById('start-date');
if (dateInput) {
dateInput.addEventListener('input', renderYearsSince);
}


