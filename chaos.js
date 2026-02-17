console.log('%c\n     🐀\n  ╱|、\n (˚ˎ 。7\n  |、˜〵\n  RATATÁ\n', 'color: #0055FF; font-size: 14px;');

var homerQuotes = [
    'Гнев, богиня, воспой Ахиллеса, Пелеева сына',
    'Муза, скажи мне о том многоопытном муже',
    'Встала из мрака младая с перстами пурпурными Эос',
    'Словно листья в лесу, таковы поколения людей',
    'Лучше быть батраком у бедняка, чем царём над мёртвыми',
    'Мёд по устам, а в груди его помыслы были иные',
    'Море винноцветное, тёмное, бесприютное',
    'Сердце из камня у тебя, а не из плоти',
    'И полетела душа его в мрачное царство Аида',
    'Кто же меня покалечил? Никто!',
    'Одиссей многоумный ответил ему, усмехаясь',
    'Были мы в битвах, и дух наш ещё не угас',
    'Тяжко стонала земля под ногами бегущих',
    'Есть время для слов, и есть время для сна',
    'Бойся данайцев, дары приносящих',
    'Дым отечества нам сладок и приятен',
    'Стыд погибающим — великая сила',
    'Глупец познаёт только то, что свершилось',
    'И камень точит вода, что струится упорно',
    'Блажен, кто дерзает, ибо удача сопутствует смелым',
    'Зевс-громовержец кивнул, и Олимп содрогнулся',
    'Он пал, и доспехи его зазвенели над ним',
    'Афина-Паллада направила руку героя',
    'Ахиллес ответил: я знаю свой рок, и он мне не страшен',
    'Пенелопа ткала и распускала свой бесконечный покров',
    'Аргус узнал хозяина и умер, вильнув хвостом',
    'Итака — маленький остров, но слаще его нет на свете',
    'Приам пришёл к Ахиллу и целовал ему руки',
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

var galleryContainer = document.getElementById('randomGallery');
if (galleryContainer) {
    var allImages = [
        'images/jewerly/photo1.png',
        'images/jewerly/photo2.png',
        'images/jewerly/photo3.png',
        'images/jewerly/photo4.png',
        'images/jewerly/photo5.png',
        'images/jewerly/photo6.png',
        'images/jewerly/photo7.png',
        'images/jewerly/photo8.png',
        'images/jewerly/photo9.png',
        'images/jewerly/photo10.png',
        'images/jewerly/photo11.png',
        'images/sweaters/series1/photo1.png',
        'images/sweaters/series1/photo2.png',
        'images/sweaters/series1/photo3.png',
        'images/sweaters/series1/photo4.png',
        'images/sweaters/series1/photo5.png',
        'images/sweaters/series2/photo1.png',
        'images/sweaters/series2/photo2.png',
        'images/sweaters/series2/photo3.png',
        'images/sweaters/series2/photo4.png',
        'images/sweaters/series2/photo5.png',
        'images/sweaters/series2/photo6.png',
        'images/sweaters/series3/photo1.png',
        'images/sweaters/series3/photo2.png',
        'images/sweaters/series3/photo3.png',
        'images/sweaters/series3/photo4.png',
        'images/sweaters/series3/photo5.png',
        'images/sweaters/series3/photo6.png',
        'images/sweaters/series4/photo1.png',
        'images/sweaters/series4/photo2.png',
        'images/sweaters/series4/photo3.png',
        'images/sweaters/series4/photo4.png',
        'images/sweaters/series4/photo5.png',
        'images/sweaters/series4/photo6.png',
        'images/sweaters/series4/photo7.png',
        'images/sweaters/series5/photo1.png',
        'images/sweaters/series5/photo2.png',
        'images/sweaters/series5/photo3.png',
        'images/sweaters/series5/photo4.png',
        'images/sweaters/series5/photo5.png',
        'images/sweaters/series5/photo6.png',
        'images/sweaters/series5/photo7.png'
    ];
    function shuffle(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
        }
        return arr;
    }
    var shuffled = shuffle(allImages.slice());
    for (var i = 0; i < Math.min(9, shuffled.length); i++) {
        var item = document.createElement('div');
        item.className = 'gallery-item';
        var img = document.createElement('img');
        img.src = shuffled[i];
        img.alt = '';
        img.loading = 'lazy';
        item.appendChild(img);
        galleryContainer.appendChild(item);
    }
}

var dot = document.getElementById('cursorDot');
var ring = document.getElementById('cursorRing');
var mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;
if (dot && ring && window.innerWidth > 768) {
    var cs = document.createElement('style');
    cs.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(cs);
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
    var cc = ['#0055FF', '#FFB6D9', '#000000', '#FF5555', '#00CC88'];
    function chgColor() {
        var c = cc[Math.floor(Math.random() * cc.length)];
        dot.style.backgroundColor = c;
        ring.style.borderColor = c;
    }
    chgColor();
    setInterval(chgColor, 3000);
    document.querySelectorAll('a, .btn, .service-line, .team-member, .gallery-item, .portfolio-item, .portfolio-video-item').forEach(function(el) {
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

var nav = document.getElementById('nav');
if (nav) {
    window.addEventListener('scroll', function() {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
});

var symbols = ['✦', '◈', '▲', '●', '◆', '★', '✕', '◎', '▪', '♦', '🐀'];
var flyColors = ['#0055FF', '#FFB6D9', '#000000'];
var flyContainer = document.getElementById('flyingSymbols');
if (flyContainer) {
    function spawnSymbol() {
        var s = document.createElement('span');
        s.className = 'fly-sym';
        s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        s.style.left = Math.random() * 100 + 'vw';
        s.style.animationDuration = (5 + Math.random() * 10) + 's';
        s.style.fontSize = (10 + Math.random() * 20) + 'px';
        s.style.color = flyColors[Math.floor(Math.random() * flyColors.length)];
        flyContainer.appendChild(s);
        setTimeout(function() { s.remove(); }, 15000);
    }
    setInterval(spawnSymbol, 1500);
}

var ratContainer = document.getElementById('ratContainer');
var rats = [
    '  (\\_  /)\n  ( •_•)\n  / > 🧀',
    '  ~(____)~\n   (o  o)\n   (>  <)',
    '     /\\_/\\\n    ( o.o )\n     > ^ <\n    /|   |\\',
    '  (\\__/)\n  (• ㅅ •)\n  /つ🧀つ',
    '  🐀',
    '   ⊂(◉‿◉)つ\n    RATATÁ',
    '  ⌐■-■\n  ( ◕_◕)\n  🐀 sup',
    '   ∧_∧\n  ( •ω• )\n  |つ🧀|',
    '     🐀\n  ╱|、\n (˚ˎ 。7\n  |、˜〵\n  じしˍ,)ノ',
    '  ~~(°▽°)~~\n   /|  |\\\n   _|  |_'
];
if (ratContainer) {
    function spawnRat() {
        var r = document.createElement('div');
        r.className = 'random-rat';
        r.innerHTML = '<pre>' + rats[Math.floor(Math.random() * rats.length)] + '</pre>';
        var mx = window.innerWidth - 150;
        var my = Math.max(document.documentElement.scrollHeight, 2000) - 150;
        r.style.left = Math.floor(Math.random() * mx) + 'px';
        r.style.top = Math.floor(Math.random() * my) + 'px';
        r.style.transform = 'rotate(' + (Math.random() * 30 - 15) + 'deg)';
        var rc = ['#0055FF', '#FFB6D9', '#cccccc', '#000000'];
        r.style.color = rc[Math.floor(Math.random() * rc.length)];
        ratContainer.appendChild(r);
        var lt = 6000 + Math.random() * 8000;
        setTimeout(function() {
            r.style.opacity = '0';
            setTimeout(function() { r.remove(); }, 1000);
        }, lt);
    }
    function scheduleRat() {
        spawnRat();
        setTimeout(scheduleRat, 2000 + Math.random() * 4000);
    }
    scheduleRat();
}

var scanContainer = document.getElementById('scanlines');
if (scanContainer) {
    function spawnVLine() {
        var l = document.createElement('div');
        l.className = 'v-line';
        var w = Math.random() > 0.7 ? 15 + Math.random() * 60 : 1 + Math.random() * 4;
        l.style.width = w + 'px';
        l.style.left = Math.random() * 100 + 'vw';
        if (Math.random() > 0.4) {
            l.style.height = '100vh';
            l.style.top = '0';
        } else {
            var h = 20 + Math.random() * 60;
            l.style.height = h + 'vh';
            l.style.top = Math.random() * (100 - h) + 'vh';
        }
        var op = 0.04 + Math.random() * 0.15;
        if (Math.random() > 0.8) {
            l.classList.add('v-line-bright');
            op = 0.15 + Math.random() * 0.2;
        }
        scanContainer.appendChild(l);
        requestAnimationFrame(function() {
            l.style.transition = 'opacity 0.3s ease';
            l.style.opacity = String(op);
        });
        var ht = 500 + Math.random() * 3500;
        setTimeout(function() {
            l.style.transition = 'opacity 0.8s ease';
            l.style.opacity = '0';
            setTimeout(function() { l.remove(); }, 900);
        }, ht);
    }
    function spawnFlicker() {
        var l = document.createElement('div');
        l.className = 'v-line v-line-flicker';
        l.style.width = (1 + Math.random() * 3) + 'px';
        l.style.left = Math.random() * 100 + 'vw';
        l.style.height = '100vh';
        l.style.top = '0';
        scanContainer.appendChild(l);
        setTimeout(function() { l.remove(); }, 300 + Math.random() * 500);
    }
    function vBurst() {
        var c = 2 + Math.floor(Math.random() * 5);
        for (var i = 0; i < c; i++) {
            (function(d) { setTimeout(spawnVLine, d); })(i * 80);
        }
        setTimeout(vBurst, 12000 + Math.random() * 20000);
    }
    function gFlash() {
        var f = document.createElement('div');
        f.className = 'green-flash';
        document.body.appendChild(f);
        setTimeout(function() { f.remove(); }, 200);
    }
    function schV() { spawnVLine(); setTimeout(schV, 3000 + Math.random() * 5000); }
    function schF() { spawnFlicker(); setTimeout(schF, 2000 + Math.random() * 6000); }
    function schG() { gFlash(); setTimeout(schG, 15000 + Math.random() * 25000); }
    schV();
    schF();
    schG();
    setTimeout(vBurst, 8000 + Math.random() * 10000);
}

document.querySelectorAll('.portfolio-video-item').forEach(function(item) {
    var video = item.querySelector('video');
    if (!video) return;
    item.addEventListener('click', function() {
        if (video.paused) {
            document.querySelectorAll('.portfolio-video-item video').forEach(function(v) {
                if (v !== video) {
                    v.pause();
                    v.closest('.portfolio-video-item').classList.remove('playing');
                }
            });
            video.play();
            item.classList.add('playing');
        } else {
            video.pause();
            item.classList.remove('playing');
        }
    });
    item.addEventListener('mouseenter', function() {
        if (video.paused) video.currentTime = 0.5;
    });
});