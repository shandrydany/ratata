/* ============================================
   RATATÁ — ДИЧЬ БЕЗ КОМПРОМИССОВ
   ============================================ */

// --- ASCII в консоли ---
console.log('%c' + `
    ___
   (o o)
  (  >  )
   | | |
  RATATÁ  🐀
`, 'color: #0055FF; font-size: 14px; font-family: monospace;');


// --- ГОМЕР (Илиада + Одиссея) ---
const homerQuotes = [
    'Гнев, богиня, воспой Ахиллеса, Пелеева сына',
    'Муза, скажи мне о том многоопытном муже',
    'Встала из мрака младая с перстами пурпурными Эос',
    'Словно листья в лесу, таковы поколения людей',
    'Из всех созданий, что дышат и ходят по нашей земле, человек самый жалкий',
    'Лучше быть батраком у бедняка, чем царём над мёртвыми',
    'Мёд по устам, а в груди его помыслы были иные',
    'Между блаженных богов нерушимая вспыхнула распря',
    'Море винноцветное, тёмное, бесприютное',
    'Сердце из камня у тебя, а не из плоти',
    'Так говорил он, и слёзы лились по щекам его тёмным',
    'И полетела душа его в мрачное царство Аида',
    'Кто же меня покалечил? Никто!',
    'Винноцветное море шумело, ударяясь о скалы',
    'Одиссей многоумный ответил ему, усмехаясь',
    'Были мы в битвах, и дух наш ещё не угас',
    'Тяжко стонала земля под ногами бегущих',
    'Боги — они не для всех одинаково милостивы',
    'Ночь наступила, и спать хорошо, если дело исполнено',
    'Есть время для слов, и есть время для сна',
    'Бросил он жребий свой в шлем Агамемнона, сына Атрея',
    'Крепко смыкая ресницы, как будто железная дрёма',
    'Нет ничего на земле погибельней и злее, чем женщина',
    'Пусть земля мне будет пухом'
];

const heroPhrase = document.querySelector('.random-phrase');
if (heroPhrase) {
    heroPhrase.textContent = homerQuotes[Math.floor(Math.random() * homerQuotes.length)];
}

const footerEl = document.querySelector('.random-footer');
if (footerEl) {
    footerEl.textContent = homerQuotes[Math.floor(Math.random() * homerQuotes.length)];
    setInterval(() => {
        footerEl.style.opacity = 0;
        setTimeout(() => {
            footerEl.textContent = homerQuotes[Math.floor(Math.random() * homerQuotes.length)];
            footerEl.style.opacity = 1;
        }, 400);
    }, 5000);
}


// --- КУРСОР (меняет форму + цвет) ---
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX - 4 + 'px';
    dot.style.top = mouseY - 4 + 'px';
});

function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX - 20 + 'px';
    ring.style.top = ringY - 20 + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Меняем форму и цвет каждые 3 сек
const cursorShapes = ['circle', 'cross', 'star', 'square', 'diamond'];
const cursorColors = ['#0055FF', '#FFB6D9', '#000000', '#FF5555', '#00CC88'];
let currentShape = 'circle';
let currentColor = '#0055FF';

function changeCursor() {
    currentShape = cursorShapes[Math.floor(Math.random() * cursorShapes.length)];
    currentColor = cursorColors[Math.floor(Math.random() * cursorColors.length)];

    // Убираем все классы форм
    cursorShapes.forEach(s => {
        dot.classList.remove('shape-' + s);
        ring.classList.remove('shape-' + s);
    });

    dot.classList.add('shape-' + currentShape);
    ring.classList.add('shape-' + currentShape);

    dot.style.setProperty('--c', currentColor);
    ring.style.setProperty('--c', currentColor);
}

changeCursor();
setInterval(changeCursor, 3000);

// Hover
document.querySelectorAll('a, .btn, .bento-item, .service-card, .team-member').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});


// --- НАВИГАЦИЯ ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});


// --- FADE-IN ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// --- ЛЕТАЮЩИЕ СИМВОЛЫ ---
const symbols = ['✦', '◈', '▲', '●', '◆', '★', '✕', '◎', '▪', '♦', '🐀'];
const flyColors = ['#0055FF', '#FFB6D9', '#000000'];
const flyContainer = document.getElementById('flyingSymbols');

function spawnSymbol() {
    const sym = document.createElement('span');
    sym.className = 'fly-sym';
    sym.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sym.style.left = Math.random() * 100 + 'vw';
    sym.style.animationDuration = (5 + Math.random() * 10) + 's';
    sym.style.fontSize = (10 + Math.random() * 20) + 'px';
    sym.style.color = flyColors[Math.floor(Math.random() * flyColors.length)];
    flyContainer.appendChild(sym);
    setTimeout(() => sym.remove(), 15000);
}
setInterval(spawnSymbol, 1500);


// --- ASCII КРЫСЫ В РАНДОМНЫХ МЕСТАХ ---
const ratContainer = document.getElementById('ratContainer');

const rats = [
`   ___
  (o o)
 (  >  )
  | | |`,

`  ~(____)~
   (o  o)
   (>  <)`,

`     /\\_/\\
    ( o.o )
     > ^ <
    /|   |\\`,

`  (\\__/)
  (• ㅅ •)
  /つ🧀つ`,

`  🐀`,

`   ⊂(◉‿◉)つ
    RATATÁ`,

`  ⌐■-■
  ( ◕_◕)
  🐀 sup`,

`   ∧_∧
  ( •ω• )
  |つ🧀|`
];

function spawnRat() {
    const rat = document.createElement('div');
    rat.className = 'random-rat';
    rat.innerHTML = '<pre>' + rats[Math.floor(Math.random() * rats.length)] + '</pre>';

    const maxX = window.innerWidth - 150;
    const maxY = Math.max(document.documentElement.scrollHeight, 2000) - 150;

    rat.style.left = Math.floor(Math.random() * maxX) + 'px';
    rat.style.top = Math.floor(Math.random() * maxY) + 'px';
    rat.style.transform = 'rotate(' + (Math.random() * 30 - 15) + 'deg)';

    // Случайный цвет крысы
    const ratColors = ['#0055FF', '#FFB6D9', '#cccccc', '#000000'];
    rat.style.color = ratColors[Math.floor(Math.random() * ratColors.length)];

    ratContainer.appendChild(rat);

    const lifetime = 6000 + Math.random() * 8000;
    setTimeout(() => {
        rat.style.opacity = '0';
        setTimeout(() => rat.remove(), 1000);
    }, lifetime);
}

function scheduleRat() {
    spawnRat();
    setTimeout(scheduleRat, 2000 + Math.random() * 4000);
}
scheduleRat();
