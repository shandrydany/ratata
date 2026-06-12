console.log('%c\n  ⛵ катамаран\n', 'color: #2a9d8f; font-size: 14px;');

/* ============================
   ЦИТАТЫ ГОМЕРА
   ============================ */
var homerQuotes = [
    'Гнев, богиня, воспой Ахиллеса, Пелеева сына',
    'Муза, скажи мне о том многоопытном муже',
    'Встала из мрака младая с перстами пурпурными Эос',
    'Словно листья в лесу, таковы поколения людей',
    'Лучше быть батраком у бедняка, чем царём над мёртвыми',
    'Море винноцветное, тёмное, бесприютное',
    'Сердце из камня у тебя, а не из плоти',
    'Есть время для слов, и есть время для сна',
    'Бойся данайцев, дары приносящих',
    'Дым отечества нам сладок и приятен',
    'Глупец познаёт только то, что свершилось',
    'И камень точит вода, что струится упорно',
    'Зевс-громовержец кивнул, и Олимп содрогнулся',
    'Ахиллес ответил: я знаю свой рок, и он мне не страшен',
    'Аргус узнал хозяина и умер, вильнув хвостом',
    'Итака — маленький остров, но слаще его нет на свете',
    'Гефест ковал щит, и на нём уместился весь мир'
];

var hp = document.querySelector('.random-phrase');
if (hp) hp.textContent = homerQuotes[Math.floor(Math.random() * homerQuotes.length)];

var fe = document.querySelector('.random-footer');
if (fe) {
    fe.textContent = homerQuotes[Math.floor(Math.random() * homerQuotes.length)];
    setInterval(function() {
        fe.style.opacity = 0;
        setTimeout(function() {
            fe.textContent = homerQuotes[Math.floor(Math.random() * homerQuotes.length)];
            fe.style.opacity = 1;
        }, 400);
    }, 10000);
}

/* ============================
   АКВАРЕЛЬ — ЖИВЫЕ ПЯТНА
   ============================ */
(function() {
    var canvas = document.getElementById('watercolor');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    /* рисуем в низком разрешении — blur в CSS всё сгладит,
       а производительность будет отличной */
    var SCALE = 0.35;
    var W, H;

    function resize() {
        W = canvas.width = Math.ceil(window.innerWidth * SCALE);
        H = canvas.height = Math.ceil(window.innerHeight * SCALE);
        ctx.fillStyle = '#faf8f3';
        ctx.fillRect(0, 0, W, H);
    }
    resize();
    window.addEventListener('resize', resize);

    /* морская палитра: бирюза, тил, глубокий синий */
    var palette = [
        [42, 157, 143],
        [29, 122, 140],
        [38, 70, 83],
        [58, 175, 169],
        [15, 76, 92],
        [91, 192, 190],
        [27, 108, 168],
        [69, 123, 157]
    ];

    var mouse = { x: -9999, y: -9999, px: -9999, py: -9999, vx: 0, vy: 0 };

    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX * SCALE;
        mouse.y = e.clientY * SCALE;
    });
    document.addEventListener('mouseleave', function() {
        mouse.x = mouse.y = -9999;
    });

    function Blob() {
        this.respawn();
        this.x = Math.random() * W;
        this.y = Math.random() * H;
    }

    Blob.prototype.respawn = function() {
        this.color = palette[Math.floor(Math.random() * palette.length)];
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = (0.05 + Math.random() * 0.13) * Math.max(W, H);
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.05 + Math.random() * 0.15;
        this.alpha = 0.02 + Math.random() * 0.025;
        this.phase = Math.random() * Math.PI * 2;
        this.pulse = 0.003 + Math.random() * 0.008;
        this.life = 600 + Math.random() * 1200; /* кадры жизни */
    };

    var blobs = [];
    var COUNT = window.innerWidth > 768 ? 14 : 8;
    for (var i = 0; i < COUNT; i++) blobs.push(new Blob());

    /* временные брызги от мыши */
    var splashes = [];

    function drawBlob(x, y, r, c, a) {
        var g = ctx.createRadialGradient(x, y, r * 0.1, x, y, r);
        g.addColorStop(0, 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')');
        g.addColorStop(0.7, 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + (a * 0.5) + ')');
        g.addColorStop(1, 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }

    var t = 0;

    function frame() {
        t++;

        /* скорость мыши — чем резче движение, тем сильнее размазывается краска */
        mouse.vx = mouse.x - mouse.px;
        mouse.vy = mouse.y - mouse.py;
        mouse.px = mouse.x;
        mouse.py = mouse.y;
        var mSpeed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

        /* медленное "высыхание" к цвету бумаги — старые слои
           растворяются, оставляя акварельные разводы */
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = 'rgba(250, 248, 243, 0.012)';
        ctx.fillRect(0, 0, W, H);

        /* пятна смешиваются как настоящая краска */
        ctx.globalCompositeOperation = 'multiply';

        var influence = Math.max(W, H) * 0.28;

        for (var i = 0; i < blobs.length; i++) {
            var b = blobs[i];

            /* собственная жизнь: блуждание + дыхание */
            b.angle += (Math.random() - 0.5) * 0.2;
            b.x += Math.cos(b.angle) * b.speed;
            b.y += Math.sin(b.angle) * b.speed;
            var r = b.r * (1 + 0.3 * Math.sin(t * b.pulse + b.phase));
            var a = b.alpha;

            /* реакция на мышь: пятно "оттекает" от курсора и густеет */
            var dx = b.x - mouse.x;
            var dy = b.y - mouse.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < influence && dist > 0.01) {
                var force = (1 - dist / influence) * (0.6 + mSpeed * 0.08);
                b.x += (dx / dist) * force * 2.5;
                b.y += (dy / dist) * force * 2.5;
                /* лёгкий снос по направлению движения мыши — смешивание */
                b.x += mouse.vx * force * 0.35;
                b.y += mouse.vy * force * 0.35;
                a += force * 0.02; /* краска концентрируется */
            }

            /* мягко заворачиваем у краёв */
            if (b.x < -r) b.x = W + r;
            if (b.x > W + r) b.x = -r;
            if (b.y < -r) b.y = H + r;
            if (b.y > H + r) b.y = -r;

            drawBlob(b.x, b.y, r, b.color, a);

            /* пятно прожило своё — растворяется и рождается заново */
            if (--b.life <= 0) b.respawn();
        }

        /* брызги от быстрого движения мыши */
        if (mSpeed > 3 && mouse.x > 0 && Math.random() > 0.5) {
            splashes.push({
                x: mouse.x + (Math.random() - 0.5) * 30,
                y: mouse.y + (Math.random() - 0.5) * 30,
                r: 6 + Math.random() * Math.min(mSpeed * 2.5, 35),
                color: palette[Math.floor(Math.random() * palette.length)],
                life: 1
            });
        }

        for (var s = splashes.length - 1; s >= 0; s--) {
            var sp = splashes[s];
            sp.life -= 0.012;
            sp.r += 0.4; /* пятно расползается по бумаге */
            if (sp.life <= 0) {
                splashes.splice(s, 1);
                continue;
            }
            drawBlob(sp.x, sp.y, sp.r, sp.color, 0.03 * sp.life);
        }

        requestAnimationFrame(frame);
    }
    frame();
})();

/* ============================
   КУРСОР (только десктоп)
   ============================ */
var dot = document.getElementById('cursorDot');
var ring = document.getElementById('cursorRing');
var mx = -100, my = -100, rx = -100, ry = -100;
if (dot && ring && window.innerWidth > 768) {
    var cs = document.createElement('style');
    cs.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(cs);
    dot.style.display = 'block';
    ring.style.display = 'block';
    document.addEventListener('mousemove', function(e) {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = 'translate(' + (mx - 4) + 'px,' + (my - 4) + 'px)';
    });
    function aRing() {
        rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
        ring.style.transform = 'translate(' + (rx - 20) + 'px,' + (ry - 20) + 'px)';
        requestAnimationFrame(aRing);
    }
    aRing();
    /* морские цвета */
    var cc = ['#2a9d8f', '#264653', '#1d7a8c', '#0f4c5c', '#5bc0be'];
    function chgC() {
        var c = cc[Math.floor(Math.random() * cc.length)];
        dot.style.backgroundColor = c;
        ring.style.borderColor = c;
    }
    chgC();
    setInterval(chgC, 4000);
}