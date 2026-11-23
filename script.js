  /* =====================================================================
   ГЛАВНЫЙ БЛОК НАСТРОЙКИ КАРТОЧЕК (МЕНЯЙТЕ ФОТО И ТЕКСТЫ ТОЛЬКО ЗДЕСЬ!)
   ---------------------------------------------------------------------
   Положите все файлы картинок в папку "immmmg/" рядом с index.html.
   ===================================================================== */
const EXHIBITS_DATA = [
  {
    number: "01",
    category: "weapons",
    categoryName: "Арсенал",
    year: "XIX — XX вв.",
    title: "Витрина с ружьями и саблями",
    image: "immmmg/lgllg.jpeg",
    personality: "Традиционное оружие и охотничье снаряжение в культуре казахской степи символизировали самостоятельность, мастерство и готовность защищать родной край.",
    exhibitInfo: "Крупный план витрины с охотничьими ружьями (в том числе с оптическим прицелом), саблями в ножнах, кинжалом и кожаным набором с ножами слева."
  },
  {
    number: "02",
    category: "documents",
    categoryName: "Документы",
    year: "1964 — 1986",
    title: "Стенд «Алма-Ата 1964–1986»",
    image: "immmmg/lm.jpeg",
    personality: "Период 1960–1980-х годов связан с масштабным градостроительством, развитием науки и культуры в Алма-Ате и формированием современного облика столицы республики.",
    exhibitInfo: "Панорамный вид информационного стенда «Алма-Ата 1964–1986 / Alma-Ata 1964–1986» с архивными фотографиями зданий, цитатами на трех языках и горизонтальными витринами у основания."
  },
  {
    number: "03",
    category: "photos",
    categoryName: "Фотоархив",
    year: "XX век",
    title: "Фотоколлаж на темной стене",
    image: "immmmg/sssssssssssssssssssssssss.jpeg",
    personality: "Архивные снимки фиксируют государственную работу, зарубежные поездки и встречи руководителей эпохи с гражданами и общественными деятелями.",
    exhibitInfo: "Подборка черно-белых и цветных фотографий в светлых рамках на темной стене — выступления у микрофона, официальные встречи и кадры поездок."
  },
  {
    number: "04",
    category: "personal",
    categoryName: "Экспонаты",
    year: "Экспозиция",
    title: "Периодическая система элементов",
    image: "immmmg/ttyty.jpeg",
    personality: "Развитие фундаментальной и прикладной науки, геологоразведки и промышленности занимало важное место в повестке руководства Казахстана.",
    exhibitInfo: "Фрагмент экспоната с таблицей химических элементов (от водорода H до радона Rn), оформленной в ячейках с металлическими разделителями."
  },
  {
    number: "05",
    category: "photos",
    categoryName: "Фотоархив",
    year: "2026 г.",
    title: "Я у стенда «1964–1986»",
    image: "immmmg/WhatsApp Image 2026-11-20 at 9.39.01 PM.jpeg",
    personality: "Живой интерес к истории родного города и страны помогает бережно сохранять память о людях и событиях прошлого.",
    exhibitInfo: "Кадр со мной в выставочном зале на фоне информационного стенда «1964–1986» с историческими фотографиями и текстовыми материалами."
  },
  {
    number: "06",
    category: "documents",
    categoryName: "Документы",
    year: "1947 г.",
    title: "Автобиография и архивный лист",
    image: "immmmg/wwwwwwwwwwwww.jpeg",
    personality: "Официальные биографические документы и справки сохраняют хронологию учебы, трудового пути и партийно-государственной работы деятелей эпохи.",
    exhibitInfo: "Два архивных листа с машинописным текстом биографического характера, рукописными правками и подписью с датой «27/XI-47»."
  },
  {
    number: "07",
    category: "interior",
    categoryName: "Интерьер",
    year: "Зал музея",
    title: "Общий вид зала с витринами",
    image: "immmmg/;;pppppppp.jpeg",
    personality: "Музейное пространство объединяет мемориальные материалы, биографические стенды и предметы старины, создавая целостный образ эпохи.",
    exhibitInfo: "Вид выставочного зала: слева — длинная стеклянная витрина с оружием и предметами, напротив — скамья, ковер и стенды с портретами и схемами."
  },
  {
    number: "08",
    category: "photos",
    categoryName: "Фотоархив",
    year: "XX век",
    title: "Стенд с высказываниями о личности",
    image: "immmmg/234.jpeg",
    personality: "Оценки современников, писателей, деятелей культуры и международных собеседников раскрывают масштаб личности и авторитет Д. А. Кунаева.",
    exhibitInfo: "Фрагмент экспозиции с портретами и цитатами (в том числе об Ильясе Есенберлине, Бибигуль Тулегеновой, Олжасе Сулейменове и Динмухамеде Кунаеве) на казахском, русском и английском языках."
  },
  {
    number: "09",
    category: "personal",
    categoryName: "Экспонаты",
    year: "1982 г.",
    title: "Сувенир «Набор минералов» (1982)",
    image: "immmmg/434.jpeg",
    personality: "Природные богатства недр и геологическая наука всегда имели особое значение для экономики Казахстана.",
    exhibitInfo: "Памятный подарок от Института геологии Академии наук (1982 г.) в виде композиции из различных минералов и кристаллов в стеклянной витрине."
  },
  {
    number: "10",
    category: "documents",
    categoryName: "Документы",
    year: "1955 — 1978",
    title: "Стенды «Космос» и «Добывающая промышленность»",
    image: "immmmg/dddddddd.jpeg",
    personality: "Освоение космоса с Байконура и развитие топливно-энергетического комплекса вывели Казахстан на передовые позиции в союзной экономике.",
    exhibitInfo: "Разделы экспозиции, посвященные транспорту и инфраструктуре, космонавтике (с макетом ракеты) и добыче угля и нефти (с показателями «132» и «100»)."
  }
];

/* =====================================================================
   ЛОГИКА РАБОТЫ САЙТА (ОТРИСОВКА КАРТОЧЕК, ФИЛЬТРЫ, МОДАЛКА, МУЗЫКА)
   ===================================================================== */
let currentFilter = 'all';
let currentModalIndex = 0;
let filteredList = [...EXHIBITS_DATA];

const galleryGrid = document.getElementById('galleryGrid');
const allCountEl = document.getElementById('allCount');

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function handleImageError(imgElement, titleText) {
  if (!imgElement) return;
  imgElement.onerror = null;
  const safeTitle = escapeXml(titleText || 'Экспонат');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#182019"/>
      <rect x="30" y="30" width="740" height="540" rx="12" fill="none" stroke="#3A4D39" stroke-width="2" stroke-dasharray="8 8"/>
      <text x="400" y="285" fill="#F0EFE9" font-family="Georgia, serif" font-size="28" text-anchor="middle">${safeTitle}</text>
      <text x="400" y="325" fill="#9BA39B" font-family="Arial, sans-serif" font-size="16" text-anchor="middle">Поместите фото в папку immmmg/</text>
    </svg>`;
  imgElement.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

const heroImg = document.getElementById('heroImg');
if (heroImg) {
  heroImg.addEventListener('error', () => handleImageError(heroImg, 'Экспозиция музея'), { once: true });
}

function renderCards(filter = 'all') {
  currentFilter = filter;
  filteredList = filter === 'all'
    ? EXHIBITS_DATA
    : EXHIBITS_DATA.filter(item => item.category === filter);

  if (allCountEl) {
    allCountEl.textContent = EXHIBITS_DATA.length;
  }
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';

  filteredList.forEach((item, idx) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.style.animationDelay = `${Math.min(idx * 0.05, 0.45)}s`;
    card.innerHTML = `
      <div class="card-thumb">
        <img alt="" loading="lazy">
        <span class="card-badge">№ ${escapeXml(item.number)}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${escapeXml(item.categoryName)}</span>
          <span>${escapeXml(item.year)}</span>
        </div>
        <h3 class="card-title">${escapeXml(item.title)}</h3>
        <p class="card-excerpt">${escapeXml(item.exhibitInfo)}</p>
        <div class="card-footer">
          <span>О личности и предмете</span>
          <b class="card-action">Подробнее ↗</b>
        </div>
      </div>
    `;

    const img = card.querySelector('img');
    img.alt = item.title;
    img.addEventListener('error', () => handleImageError(img, item.title), { once: true });
    img.src = item.image;

    card.addEventListener('click', () => {
      playClickSound();
      openModal(idx);
    });
    galleryGrid.appendChild(card);
  });
}

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    playClickSound();
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards(btn.dataset.filter);
  });
});

const modal = document.getElementById('exhibitModal');
const modalImg = document.getElementById('modalImg');
const modalMeta = document.getElementById('modalMeta');
const modalTitle = document.getElementById('modalTitle');
const modalPersonality = document.getElementById('modalPersonality');
const modalExhibitInfo = document.getElementById('modalExhibitInfo');

function openModal(index) {
  currentModalIndex = index;
  const item = filteredList[currentModalIndex];
  if (!item || !modal) return;

  modalImg.onerror = () => handleImageError(modalImg, item.title);
  modalImg.src = item.image;
  modalImg.alt = item.title;

  modalMeta.textContent = `${item.categoryName} · ЭКСПОНАТ №${item.number} · ${item.year}`;
  modalTitle.textContent = item.title;
  modalPersonality.textContent = item.personality;
  modalExhibitInfo.textContent = item.exhibitInfo;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('modalClose')?.addEventListener('click', closeModal);
document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);

document.getElementById('prevExhibit')?.addEventListener('click', () => {
  if (!filteredList.length) return;
  playClickSound();
  const prev = (currentModalIndex - 1 + filteredList.length) % filteredList.length;
  openModal(prev);
});

document.getElementById('nextExhibit')?.addEventListener('click', () => {
  if (!filteredList.length) return;
  playClickSound();
  const next = (currentModalIndex + 1) % filteredList.length;
  openModal(next);
});

document.addEventListener('keydown', (e) => {
  if (!modal || !modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') document.getElementById('prevExhibit')?.click();
  if (e.key === 'ArrowRight') document.getElementById('nextExhibit')?.click();
});

document.getElementById('shareExhibit')?.addEventListener('click', () => {
  const item = filteredList[currentModalIndex];
  if (!item) return;
  const text = `${item.title} — Дом-музей`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(`${text} (${window.location.href})`).then(() => {
      showToast('Ссылка на экспонат скопирована');
    }).catch(() => {
      showToast('Не удалось скопировать ссылку');
    });
  }
});

document.getElementById('photoUploadInput')?.addEventListener('change', (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    const newNum = String(EXHIBITS_DATA.length + 1).padStart(2, '0');
    const cleanName = file.name.replace(/\.[^/.]+$/, '');
    EXHIBITS_DATA.unshift({
      number: newNum,
      category: 'photos',
      categoryName: 'Архив посетителя',
      year: '2026 г.',
      title: cleanName || 'Новый экспонат',
      image: event.target.result,
      personality: 'Исторический контекст и воспоминания эпохи.',
      exhibitInfo: 'Фотография добавлена в виртуальную экспозицию музея.'
    });
    renderCards(currentFilter);
    showToast('Фотография добавлена в каталог');
  };
  reader.readAsDataURL(file);
});

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  if (!scrollProgress) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = percent + '%';
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

/* =====================================================================
   ЗВУКИ КЛИКОВ И СПОКОЙНАЯ МЕЛОДИЯ (WEB AUDIO API)
   ===================================================================== */
let soundEnabled = true;
let musicPlaying = false;
let audioCtx = null;
let melodyTimer = null;
let stepIndex = 0;

const MELODY_NOTES = [293.66, 349.23, 440.00, 523.25, 440.00, 349.23, 329.63, 220.00];

function ensureAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

document.getElementById('soundToggle')?.addEventListener('click', function() {
  soundEnabled = !soundEnabled;
  this.classList.toggle('muted', !soundEnabled);
  showToast(soundEnabled ? 'Звуки нажатий включены' : 'Звуки нажатий выключены');
});

function playClickSound() {
  if (!soundEnabled) return;
  try {
    ensureAudioContext();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(540, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0008, audioCtx.currentTime + 0.09);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.09);
  } catch (e) {}
}

function playMelodyNote(freq) {
  if (!audioCtx || !musicPlaying) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.025, now + 0.18);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.45);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 1.5);
}

function startMelody() {
  stopMelody();
  ensureAudioContext();
  if (!audioCtx) return;
  playMelodyNote(MELODY_NOTES[stepIndex % MELODY_NOTES.length]);
  stepIndex++;

  melodyTimer = setInterval(() => {
    if (!musicPlaying) return;
    playMelodyNote(MELODY_NOTES[stepIndex % MELODY_NOTES.length]);
    stepIndex++;
  }, 1150);
}

function stopMelody() {
  if (melodyTimer) {
    clearInterval(melodyTimer);
    melodyTimer = null;
  }
}

document.getElementById('musicToggle')?.addEventListener('click', function() {
  musicPlaying = !musicPlaying;
  this.classList.toggle('playing', musicPlaying);
  const label = document.getElementById('musicLabel');
  if (label) label.textContent = musicPlaying ? 'Пауза' : 'Музыка';

  try {
    if (musicPlaying) {
      startMelody();
      showToast('Мелодия включена');
    } else {
      stopMelody();
      showToast('Мелодия на паузе');
    }
  } catch (e) {}
});

renderCards('all');