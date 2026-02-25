console.log('%c\n  🐀 RATATÁ\n', 'color: #0055FF; font-size: 14px;');

var homerQuotes = [
    'Гнев, богиня, воспой Ахиллеса, Пелеева сына',
    'Муза, скажи мне о том многоопытном муже',
    'Встала из мрака младая с перстами пурпурными Эос',
    'Словно листья в лесу, таковы поколения людей',
    'Лучше быть батраком у бедняка, чем царём над мёртвыми',
    'Море винноцветное, тёмное, бесприютное',
    'Сердце из камня у тебя, а не из плоти',
    'И полетела душа его в мрачное царство Аида',
    'Кто же меня покалечил? Никто!',
    'Есть время для слов, и есть время для сна',
    'Бойся данайцев, дары приносящих',
    'Дым отечества нам сладок и приятен',
    'Глупец познаёт только то, что свершилось',
    'И камень точит вода, что струится упорно',
    'Зевс-громовержец кивнул, и Олимп содрогнулся',
    'Он пал, и доспехи его зазвенели над ним',
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
   ЛАЙТБОКС
   ============================ */
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightboxImg.src = '';
}

if (lightbox) {
    lightbox.addEventListener('click', closeLightbox);
    lightbox.addEventListener('touchend', closeLightbox);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeLightbox();
    });
}


/* ============================
   АВТОЗАГРУЗКА ФОТО
   ============================ */
var MAX_PHOTOS = 100;
var MAX_VIDEOS = 20;

function autoLoadGrid(gridId, folder, ext) {
    var grid = document.getElementById(gridId);
    if (!grid) return;
    ext = ext || '.png';

    for (var n = 1; n <= MAX_PHOTOS; n++) {
        (function(num) {
            var div = document.createElement('div');
            div.className = 'portfolio-item';
            var img = document.createElement('img');
            img.src = folder + '/photo' + num + ext;
            img.alt = '';
            img.loading = 'lazy';

            img.onload = function() {
                div.addEventListener('click', function(e) {
                    e.stopPropagation();
                    openLightbox(img.src);
                });
                div.addEventListener('touchend', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    openLightbox(img.src);
                }, { passive: false });
            };

            img.onerror = function() {
                div.remove();
            };

            div.appendChild(img);
            grid.appendChild(div);
        })(n);
    }
}


/* ============================
   ВИДЕО С ПРЕВЬЮ
   ============================ */
function autoLoadVideos(gridId, folder) {
    var grid = document.getElementById(gridId);
    if (!grid) return;

    for (var n = 1; n <= MAX_VIDEOS; n++) {
        (function(num) {
            var div = document.createElement('div');
            div.className = 'portfolio-video-item';

            var video = document.createElement('video');
            video.src = folder + '/video' + num + '.MP4';
            video.loop = true;
            video.playsInline = true;
            video.preload = 'metadata';
            video.muted = true;

            video.addEventListener('loadeddata', function() {
                video.currentTime = 0.1;
            });

            var playBtn = document.createElement('div');
            playBtn.className = 'video-play-btn';
            playBtn.innerHTML = '▶';

            function toggleVideo() {
                if (video.paused) {
                    document.querySelectorAll('.portfolio-video-item video').forEach(function(ov) {
                        if (ov !== video) {
                            ov.pause();
                            ov.muted = true;
                            ov.closest('.portfolio-video-item').classList.remove('playing');
                            ov.closest('.portfolio-video-item').querySelector('.video-play-btn').innerHTML = '▶';
                        }
                    });
                    video.muted = false;
                    video.play();
                    div.classList.add('playing');
                    playBtn.innerHTML = '❙❙';
                } else {
                    video.pause();
                    video.muted = true;
                    div.classList.remove('playing');
                    playBtn.innerHTML = '▶';
                }
            }

            video.onerror = function() {
                div.remove();
            };

            video.onloadedmetadata = function() {
                div.addEventListener('click', function(e) {
                    e.stopPropagation();
                    toggleVideo();
                });
                div.addEventListener('touchend', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleVideo();
                }, { passive: false });
            };

            div.appendChild(video);
            div.appendChild(playBtn);
            grid.appendChild(div);
        })(n);
    }
}

autoLoadGrid('jewelryGrid', 'images/jewelry', '.png');
autoLoadGrid('sweatersGrid', 'images/sweaters', '.png');
autoLoadVideos('aiGrid', 'images/ai');


/* ============================
   ГАЛЕРЕЯ — БЕСКОНЕЧНЫЙ СЛАЙДЕР
   ============================ */
var galleryTrack = document.getElementById('galleryTrack');
if (galleryTrack) {

    var ai = [];
    var folders = ['images/jewelry', 'images/sweaters'];

    folders.forEach(function(folder) {
        for (var n = 1; n <= MAX_PHOTOS; n++) {
            ai.push(folder + '/photo' + n + '.png');
        }
    });

    for (var i = ai.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = ai[i]; ai[i] = ai[j]; ai[j] = tmp;
    }

    var allImgs = ai.concat(ai);
    galleryTrack.innerHTML = '';
    var loadedCount = 0;
    var halfWidth = 0;

    allImgs.forEach(function(src) {
        var div = document.createElement('div');
        div.className = 'gallery-item';
        var img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.onload = function() {
            loadedCount++;
            if (loadedCount >= 10) {
                halfWidth = galleryTrack.scrollWidth / 2;
            }
        };
        img.onerror = function() {
            div.remove();
        };
        div.appendChild(img);
        galleryTrack.appendChild(div);
    });

    var pos = 0;
    var speed = 0.6;

    function getHalf() {
        var w = galleryTrack.scrollWidth / 2;
        if (w > 100) halfWidth = w;
    }

    window.addEventListener('load', getHalf);
    setTimeout(getHalf, 500);
    setTimeout(getHalf, 1500);
    setTimeout(getHalf, 3000);
    setTimeout(getHalf, 5000);

    function animateSlider() {
        if (halfWidth === 0) getHalf();
        pos -= speed;
        if (halfWidth > 0 && Math.abs(pos) >= halfWidth) {
            pos = 0;
        }
        galleryTrack.style.transform = 'translateX(' + pos + 'px)';
        requestAnimationFrame(animateSlider);
    }
    animateSlider();
}


/* ============================
   ПАША УБЕГАЕТ ОТ МЫШИ
   ============================ */
var pavelBlock = document.getElementById('pavelBlock');
if (pavelBlock && window.innerWidth > 768) {
    pavelBlock.classList.add('runaway');
    var offsetX = 0, offsetY = 0;

    document.addEventListener('mousemove', function(e) {
        var rect = pavelBlock.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = e.clientX - cx;
        var dy = e.clientY - cy;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 250) {
            var force = (250 - dist) / 250;
            var angle = Math.atan2(dy, dx);
            offsetX -= Math.cos(angle) * force * 18;
            offsetY -= Math.sin(angle) * force * 18;
            offsetX = Math.max(-300, Math.min(300, offsetX));
            offsetY = Math.max(-200, Math.min(200, offsetY));
            pavelBlock.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px)';
        } else {
            offsetX *= 0.95;
            offsetY *= 0.95;
            pavelBlock.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px)';
        }
    });
}


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
    var cc = ['#0055FF','#FFB6D9','#000000','#FF5555','#00CC88'];
    function chgC() {
        var c = cc[Math.floor(Math.random() * cc.length)];
        dot.style.backgroundColor = c;
        ring.style.borderColor = c;
    }
    chgC();
    setInterval(chgC, 3000);
    document.querySelectorAll('a,.btn,.service-line,.team-member,.gallery-item,.portfolio-item,.portfolio-video-item').forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            ring.style.width = '60px';
            ring.style.height = '60px';
            ring.style.marginLeft = '-10px';
            ring.style.marginTop = '-10px';
            ring.style.backgroundColor = 'rgba(255,182,217,0.15)';
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


/* ============================
   НАВИГАЦИЯ
   ============================ */
var nav = document.getElementById('nav');
if (nav) {
    window.addEventListener('scroll', function() {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}


/* ============================
   FADE-IN
   ============================ */
var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });


/* ============================
   ЛЕТАЮЩИЕ СИМВОЛЫ
   ============================ */
var syms = ['✦','◈','▲','●','◆','★','✕','◎','▪','♦','🐀'];
var fCols = ['#0055FF','#FFB6D9','#000000'];
var fC = document.getElementById('flyingSymbols');
if (fC) {
    function spSym() {
        var s = document.createElement('span');
        s.className = 'fly-sym';
        s.textContent = syms[Math.floor(Math.random() * syms.length)];
        s.style.left = Math.random() * 100 + 'vw';
        s.style.animationDuration = (5 + Math.random() * 10) + 's';
        s.style.fontSize = (10 + Math.random() * 20) + 'px';
        s.style.color = fCols[Math.floor(Math.random() * fCols.length)];
        fC.appendChild(s);
        setTimeout(function() { s.remove(); }, 15000);
    }
    setInterval(spSym, 1500);
}


/* ============================
   ASCII КРЫСЫ
   ============================ */
var rC = document.getElementById('ratContainer');
var rats = [
    '  (\\_  /)\n  ( •_•)\n  / > 🧀',
    '     /\\_/\\\n    ( o.o )\n     > ^ <',
    '  (\\__/)\n  (• ㅅ •)\n  /つ🧀つ',
    '  🐀',
    '   ⊂(◉‿◉)つ\n    RATATÁ',
    '   ∧_∧\n  ( •ω• )\n  |つ🧀|',
    '     🐀\n  ╱|、\n (˚ˎ 。7\n  |、˜〵'
];
if (rC) {
    function spRat() {
        var r = document.createElement('div');
        r.className = 'random-rat';
        r.innerHTML = '<pre>' + rats[Math.floor(Math.random() * rats.length)] + '</pre>';
        r.style.left = Math.floor(Math.random() * (window.innerWidth - 150)) + 'px';
        r.style.top = Math.floor(Math.random() * (Math.max(document.documentElement.scrollHeight, 2000) - 150)) + 'px';
        r.style.transform = 'rotate(' + (Math.random() * 30 - 15) + 'deg)';
        var rc = ['#0055FF','#FFB6D9','#cccccc','#000000'];
        r.style.color = rc[Math.floor(Math.random() * rc.length)];
        rC.appendChild(r);
        setTimeout(function() {
            r.style.opacity = '0';
            setTimeout(function() { r.remove(); }, 1000);
        }, 6000 + Math.random() * 8000);
    }
    function schRat() { spRat(); setTimeout(schRat, 2000 + Math.random() * 4000); }
    schRat();
}


/* ============================
   СЛОМАННЫЙ МОНИТОР
   ============================ */
var sC = document.getElementById('scanlines');
if (sC) {
    function spVL() {
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
        sC.appendChild(l);
        requestAnimationFrame(function() {
            l.style.transition = 'opacity 0.3s';
            l.style.opacity = String(op);
        });
        setTimeout(function() {
            l.style.transition = 'opacity 0.8s';
            l.style.opacity = '0';
            setTimeout(function() { l.remove(); }, 900);
        }, 500 + Math.random() * 3500);
    }
    function spFl() {
        var l = document.createElement('div');
        l.className = 'v-line v-line-flicker';
        l.style.width = (1 + Math.random() * 3) + 'px';
        l.style.left = Math.random() * 100 + 'vw';
        l.style.height = '100vh';
        l.style.top = '0';
        sC.appendChild(l);
        setTimeout(function() { l.remove(); }, 300 + Math.random() * 500);
    }
    function vB() {
        for (var i = 0; i < 2 + Math.floor(Math.random() * 5); i++) {
            (function(d) { setTimeout(spVL, d); })(i * 80);
        }
        setTimeout(vB, 12000 + Math.random() * 20000);
    }
    function gF() {
        var f = document.createElement('div');
        f.className = 'green-flash';
        document.body.appendChild(f);
        setTimeout(function() { f.remove(); }, 200);
    }
    function s1() { spVL(); setTimeout(s1, 3000 + Math.random() * 5000); }
    function s2() { spFl(); setTimeout(s2, 2000 + Math.random() * 6000); }
    function s3() { gF(); setTimeout(s3, 15000 + Math.random() * 25000); }
    s1(); s2(); s3();
    setTimeout(vB, 8000 + Math.random() * 10000);
}