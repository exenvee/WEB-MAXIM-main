// Calendar Logic
const monthYearText = document.getElementById('month-year');
const calendarDaysGrid = document.getElementById('calendar-days-grid');
const yearSelect = document.getElementById('year-select');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Generate Year Options
function generateYearOptions() {
  const startYear = 2020;
  const endYear = 2030;
  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    if (year === currentYear) {
      option.selected = true;
    }
    yearSelect.appendChild(option);
  }
}

// Render Calendar
function renderCalendar() {
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  monthYearText.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${currentYear}`;
  
  calendarDaysGrid.innerHTML = '';

  for (let i = 0; i < firstDay.getDay(); i++) {
    calendarDaysGrid.innerHTML += `<div class="calendar-day"></div>`;
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    calendarDaysGrid.innerHTML += `<div class="calendar-day">${day}</div>`;
  }
}

// Change Month
function changeMonth(direction) {
  currentMonth += direction;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  } else if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  yearSelect.value = currentYear; // Update year selector
  renderCalendar();
}

// Change Year
function changeYear(direction) {
  currentYear += direction;
  yearSelect.value = currentYear;
  renderCalendar();
}

// Change Year from Select
function changeYearFromSelect() {
  currentYear = parseInt(yearSelect.value);
  renderCalendar();
}

generateYearOptions();
renderCalendar();

// Clock Logic
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const timeText = document.getElementById('time-text');

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (hours % 12) * 30 + (minutes / 2);
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  const formattedTime = now.toLocaleTimeString();
  timeText.textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock();
