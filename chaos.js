/* ============================================
   RATATÁ — ДИЧЬ БЕЗ КОМПРОМИССОВ
   ============================================ */

console.log('%c' + `
     🐀
  ╱|、
 (˚ˎ 。7
  |、˜〵
  RATATÁ
`, 'color: #0055FF; font-size: 14px; font-family: monospace;');


// --- ГОМЕР (73 цитаты) ---
var homerQuotes = [
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
    'Пусть земля мне будет пухом',
    'Бойся данайцев, дары приносящих',
    'Немногие сыновья подобны своим отцам; большинство хуже, и лишь немногие лучше',
    'Язык у людей гибок; речей в нём край непочатый',
    'Злую участь смертным назначили боги',
    'Двух одинаковых дней не бывает у смертных',
    'Дым отечества нам сладок и приятен',
    'Прячь великую скорбь под безмолвным сердцем',
    'Стыд погибающим — великая сила',
    'Скрывай свои замыслы даже от ближних',
    'Не властны мы над жизнью и над смертью',
    'Каждый стоящий у власти мнит себя мудрым',
    'Жадность была и будет началом всех бедствий',
    'Глупец познаёт только то, что свершилось',
    'И камень точит вода, что струится упорно',
    'Блажен, кто дерзает, ибо удача сопутствует смелым',
    'О скитаньях его поведай и нам хотя бы отчасти',
    'Странник, приди и скажи лакедемонянам, что мы пали',
    'Силой великой дышало лицо его, точно у зверя',
    'Десять лет осаждали мы город великий Приама',
    'Ни один трус не получит от судьбы щедрого дара',
    'Медленно зрей: поспешивший увянет до срока',
    'Легкомыслие — худшее, что есть в людях',
    'И поднял он крик, подобный крику десяти тысяч воинов',
    'Оружие подняв, шагнул он навстречу судьбе',
    'Тот, кто бежит, — спину свою подставляет для стрел',
    'Зевс-громовержец кивнул, и Олимп содрогнулся',
    'Уже горели корабли, и пламя лизало канаты',
    'Кони несли колесницу, и пыль поднималась до неба',
    'Копьё вонзилось в щит, и медь зазвенела, как колокол',
    'Он пал, и доспехи его зазвенели над ним',
    'Афина-Паллада направила руку героя',
    'Гектор стоял перед стенами Трои, и ветер трепал его плащ',
    'Текли по равнине два войска, как два потока весенних',
    'Ахиллес ответил: я знаю свой рок, и он мне не страшен',
    'Навсикая белорукая бросила мяч подружкам',
    'Пенелопа ткала и распускала свой бесконечный покров',
    'Телемах взглянул на отца и не узнал его',
    'Цирцея протянула кубок, и спутники Одиссея забыли дорогу домой',
    'Сирены пели, и канаты скрипели от напряжения',
    'Сцилла разверзла шесть ужасных голов',
    'Калипсо плакала на берегу, глядя на уходящий парус',
    'Циклоп взревел, и скалы посыпались с горных вершин',
    'Аргус узнал хозяина и умер, вильнув хвостом',
    'Старик Лаэрт копался в саду, не ведая, что сын вернулся',
    'Итака — маленький остров, но слаще его нет на свете',
    'Кровь женихов залила каменный пол',
    'Приам пришёл к Ахиллу и целовал ему руки, убившие его сына',
    'Андромаха стояла на стене и держала младенца',
    'Патрокл надел доспехи Ахилла и вышел на бой',
    'Гефест ковал щит, и на нём уместился весь мир'
];

var heroPhrase = document.querySelector('.random-phrase');
if (heroPhrase) {
    heroPhrase.textContent = homerQuotes[Math.floor(Math.random() * homerQuotes.length)];
}

var footerEl = document.querySelector('.random-footer');
if (footerEl) {
    footerEl.textContent = homerQuotes[Math.floor(Math.random() * homerQuotes.length)];
    setInterval(function() {
        footerEl.style.opacity = 0;
        setTimeout(function() {
            footerEl.textContent = homerQuotes[Math.floor(Math.random() * homerQuotes.length)];
            footerEl.style.opacity = 1;
        }, 400);
    }, 10000);
}


// --- КАСТОМНЫЙ КУРСОР (ПРОСТОЙ И РАБОЧИЙ) ---
var dot = document.getElementById('cursorDot');
var ring = document.getElementById('cursorRing');
var mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;

if (dot && ring && window.innerWidth > 768) {

    // Прячем системный курсор через JS
    var style = document.createElement('style');
    style.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(style);

    // Показываем наш курсор
    dot.style.display = 'block';
    ring.style.display = 'block';

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = 'translate(' + (mouseX - 4) + 'px, ' + (mouseY - 4) + 'px)';
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = 'translate(' + (ringX - 20) + 'px, ' + (ringY - 20) + 'px)';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Меняем цвет каждые 3 сек
    var cursorColors = ['#0055FF', '#FFB6D9', '#000000', '#FF5555', '#00CC88'];

    function changeCursorColor() {
        var color = cursorColors[Math.floor(Math.random() * cursorColors.length)];
        dot.style.backgroundColor = color;
        ring.style.borderColor = color;
    }

    changeCursorColor();
    setInterval(changeCursorColor, 3000);

    // Hover эффект
    document.querySelectorAll('a, .btn, .bento-item, .service-card, .team-member').forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            ring.style.width = '60px';
            ring.style.height = '60px';
            ring.style.marginLeft = '-10px';
            ring.style.marginTop = '-10px';
            ring.style.backgroundColor = 'rgba(255, 182, 217, 0.15)';
        });
        el.addEventListener('mouseleave', function() {
            ring.style.width = '40px';
            ring.style.height = '40px';
            ring.style.marginLeft = '0';
            ring.style.marginTop = '0';
            ring.style.backgroundColor = 'transparent';
        });
    });
}


// --- НАВИГАЦИЯ ---
var nav = document.getElementById('nav');
if (nav) {
    window.addEventListener('scroll', function() {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}


// --- FADE-IN ---
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });


// --- ЛЕТАЮЩИЕ СИМВОЛЫ ---
var symbols = ['✦', '◈', '▲', '●', '◆', '★', '✕', '◎', '▪', '♦', '🐀'];
var flyColors = ['#0055FF', '#FFB6D9', '#000000'];
var flyContainer = document.getElementById('flyingSymbols');

if (flyContainer) {
    function spawnSymbol() {
        var sym = document.createElement('span');
        sym.className = 'fly-sym';
        sym.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        sym.style.left = Math.random() * 100 + 'vw';
        sym.style.animationDuration = (5 + Math.random() * 10) + 's';
        sym.style.fontSize = (10 + Math.random() * 20) + 'px';
        sym.style.color = flyColors[Math.floor(Math.random() * flyColors.length)];
        flyContainer.appendChild(sym);
        setTimeout(function() { sym.remove(); }, 15000);
    }
    setInterval(spawnSymbol, 1500);
}


// --- ASCII КРЫСЫ ---
var ratContainer = document.getElementById('ratContainer');

var rats = [
`  (\\_ /)
  ( •_•)
  / > 🧀`,

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
  |つ🧀|`,

`     🐀
  ╱|、
 (˚ˎ 。7
  |、˜〵
  じしˍ,)ノ`,

`  ~~(°▽°)~~
   /|  |\\
   _|  |_`
];

if (ratContainer) {
    function spawnRat() {
        var rat = document.createElement('div');
        rat.className = 'random-rat';
        rat.innerHTML = '<pre>' + rats[Math.floor(Math.random() * rats.length)] + '</pre>';

        var maxX = window.innerWidth - 150;
        var maxY = Math.max(document.documentElement.scrollHeight, 2000) - 150;

        rat.style.left = Math.floor(Math.random() * maxX) + 'px';
        rat.style.top = Math.floor(Math.random() * maxY) + 'px';
        rat.style.transform = 'rotate(' + (Math.random() * 30 - 15) + 'deg)';

        var ratColors = ['#0055FF', '#FFB6D9', '#cccccc', '#000000'];
        rat.style.color = ratColors[Math.floor(Math.random() * ratColors.length)];

        ratContainer.appendChild(rat);

        var lifetime = 6000 + Math.random() * 8000;
        setTimeout(function() {
            rat.style.opacity = '0';
            setTimeout(function() { rat.remove(); }, 1000);
        }, lifetime);
    }

    function scheduleRat() {
        spawnRat();
        setTimeout(scheduleRat, 2000 + Math.random() * 4000);
    }
    scheduleRat();
}


// --- СЛОМАННЫЙ МОНИТОР: ВЕРТИКАЛЬНЫЕ ПОЛОСЫ ---
var scanContainer = document.getElementById('scanlines');

if (scanContainer) {

    function spawnVerticalLine() {
        var line = document.createElement('div');
        line.className = 'v-line';

        var w;
        if (Math.random() > 0.7) {
            w = 15 + Math.random() * 60;
        } else {
            w = 1 + Math.random() * 4;
        }
        line.style.width = w + 'px';
        line.style.left = Math.random() * 100 + 'vw';

        if (Math.random() > 0.4) {
            line.style.height = '100vh';
            line.style.top = '0';
        } else {
            var h = 20 + Math.random() * 60;
            line.style.height = h + 'vh';
            line.style.top = Math.random() * (100 - h) + 'vh';
        }

        var op = 0.04 + Math.random() * 0.15;

        if (Math.random() > 0.8) {
            line.classList.add('v-line-bright');
            op = 0.15 + Math.random() * 0.2;
        }

        scanContainer.appendChild(line);

        requestAnimationFrame(function() {
            line.style.transition = 'opacity 0.3s ease';
            line.style.opacity = String(op);
        });

        var holdTime = 500 + Math.random() * 3500;
        setTimeout(function() {
            line.style.transition = 'opacity 0.8s ease';
            line.style.opacity = '0';
            setTimeout(function() { line.remove(); }, 900);
        }, holdTime);
    }

    function spawnFlicker() {
        var line = document.createElement('div');
        line.className = 'v-line v-line-flicker';
        line.style.width = (1 + Math.random() * 3) + 'px';
        line.style.left = Math.random() * 100 + 'vw';
        line.style.height = '100vh';
        line.style.top = '0';
        scanContainer.appendChild(line);
        setTimeout(function() { line.remove(); }, 300 + Math.random() * 500);
    }

    function verticalBurst() {
        var count = 2 + Math.floor(Math.random() * 5);
        for (var i = 0; i < count; i++) {
            (function(delay) {
                setTimeout(spawnVerticalLine, delay);
            })(i * 80);
        }
        setTimeout(verticalBurst, 12000 + Math.random() * 20000);
    }

    function greenFlash() {
        var flash = document.createElement('div');
        flash.className = 'green-flash';
        document.body.appendChild(flash);
        setTimeout(function() { flash.remove(); }, 200);
    }

    function scheduleVertical() {
        spawnVerticalLine();
        setTimeout(scheduleVertical, 3000 + Math.random() * 5000);
    }

    function scheduleFlicker() {
        spawnFlicker();
        setTimeout(scheduleFlicker, 2000 + Math.random() * 6000);
    }

    function scheduleFlash() {
        greenFlash();
        setTimeout(scheduleFlash, 15000 + Math.random() * 25000);
    }

    scheduleVertical();
    scheduleFlicker();
    scheduleFlash();
    setTimeout(verticalBurst, 8000 + Math.random() * 10000);
}
