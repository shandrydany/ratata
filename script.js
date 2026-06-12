// ===== буквы заголовка: каждая чуть повёрнута, как наклеена вручную =====
const title = document.getElementById('title');
const letters = title.textContent.split('');
title.textContent = '';

letters.forEach((letter, i) => {
  const span = document.createElement('span');
  span.textContent = letter;
  // случайный лёгкий наклон и сдвиг
  const rotate = (Math.random() * 8 - 4).toFixed(1);   // от -4 до +4 градусов
  const lift = (Math.random() * 6 - 3).toFixed(1);     // от -3 до +3 px
  span.style.transform = `rotate(${rotate}deg) translateY(${lift}px)`;
  title.appendChild(span);
});

// ===== волны: лёгкое покачивание =====
const waves = document.querySelectorAll('.wave');

let t = 0;
function animateWaves() {
  t += 0.01;
  waves.forEach((wave, i) => {
    const shift = Math.sin(t + i * 1.5) * (8 + i * 4); // каждая волна со своей амплитудой
    const bottomBase = [0, -25, -55][i];
    wave.style.transform = `translateX(${shift}px)`;
    wave.style.bottom = `${bottomBase + Math.sin(t * 1.3 + i) * 3}px`;
  });
  requestAnimationFrame(animateWaves);
}
animateWaves();

// ===== кораблик качается на волнах =====
const boat = document.getElementById('boat');
let bt = 0;
function rockBoat() {
  bt += 0.02;
  const sway = Math.sin(bt) * 6;        // покачивание вверх-вниз
  const tilt = Math.sin(bt * 0.8) * 5;  // наклон
  boat.style.transform = `translateY(${sway}px) rotate(${tilt}deg)`;
  requestAnimationFrame(rockBoat);
}
rockBoat();