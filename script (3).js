/* ===== МААЛЫМАТТАР — бардык тексттерди ушул жерден өзгөртсө болот ===== */
const CONTACT = { // шилтемелерди өзүңдүкүнө алмаштыр
  phone: 'tel:+996772646121', telegram: 'https://t.me/your_telegram',
  instagram: 'https://instagram.com/your_instagram', github: 'https://github.com/your-github', email: 'mailto:hello@samara.dev'
};
const ABOUT = [
  ['🎓', 'Билимим', `<h4>2006-жыл</h4><p>Крупская атындагы орус мектебин аяктадым.</p>
    <h4>ОшМУ — Финансы-экономикалык колледж</h4><p>Окууну аяктадым.</p>
    <h4>ОшМУ — Бизнес жана менеджмент факультети</h4><p>«Салык жана салык салуу» багыты боюнча билим алдым.</p>
    <h4>Атаназар кары медресеси</h4><p>Диний билим алып, медресени аяктадым.</p>`],
  ['💼', 'Иш тажрыйбам', `<h4>Азия Универсал Банк</h4><p>Практикадан өттүм.</p>
    <h4>РСК Банк</h4><p>Стажировкадан өттүм.</p>
    <h4>«Жаш Ниет» микрокредиттик агенттиги</h4><p>Иштедим.</p>
    <h4>Гулистан айыл өкмөтү</h4><p>Иштедим.</p>
    <h4>«Асылзада» диний уюму</h4><p class="now">● Азыркы учурда иштеп жатам.</p>
    <h4>«Шамс» жеке мектеби</h4><p class="now">● Азыркы учурда иштеп жатам.</p>
    <h4>Атаназар кары медресеси</h4><p class="now">● Азыркы учурда иштеп жатам.</p>`],
  ['🌐', 'Тилдер', `<h4>🇰🇬 Кыргыз тили</h4><p>Эркин сүйлөйм.</p><h4>🇷🇺 Орус тили</h4><p>Эркин сүйлөйм.</p>
    <h4>🇬🇧 Англис тили</h4><p>Билем.</p><h4>🇸🇦 Араб тили</h4><p>Учурда үйрөнүп жатам.</p>`],
  ['👨‍👩‍👦', 'Үй-бүлөм', `<p>Үй-бүлөлүүмүн, үч уулдун энесимин.</p>`],
  ['📚', 'Азыр үйрөнүп жатам', `<h4>IT</h4><p>HTML • CSS • JavaScript</p><h4>Араб тили</h4><p>Араб тилин учурда үйрөнүп жатам.</p>`]
];
// [аты, сүрөттөмө, "Көрүү" шилтемеси, GitHub шилтемеси] — '#' ордуна чыныгы URL коюңуз
const PROJECTS = [
  ['Nur Academy', 'Окуу борбору үчүн сайт.', '#', '#'],
  ['Араб тили', 'Сарф, нахв жана лугат боюнча окуу сайты.', '#', '#'],
  ['Крестик-нолик', 'JavaScript менен жасалган оюн.', '#', '#'],
  ['Samara Dubai', 'Абаялар үчүн заманбап сайт.', '#', '#'],
  ['Sapat Plast', 'Терезе жана эшик чыгарган компания үчүн сайт.', '#', '#']
];
const PATH = [['2006', 'Мектеп'], ['ОшМУ', 'Финансы-экономикалык билим'], ['ОшМУ', 'Салык жана салык салуу'],
  ['', 'Банк жана финансы тармагындагы тажрыйба'], ['', 'Микрокредиттик агенттик'], ['', 'Айыл өкмөтү'],
  ['', 'Диний жана билим берүү багыты'], ['2026', 'IT жана араб тили']];

const $ = s => document.querySelector(s);

/* ===== ПОРТФОЛИО БЕТИ ===== */
if ($('#about-cards')) {
  // Интерактивдүү карточкалар (smooth ачылат)
  $('#about-cards').innerHTML = ABOUT.map((a, i) => `<div class="item reveal" style="transition-delay:${i * .08}s">
    <button aria-expanded="false"><span style="font-size:1.6rem;color:inherit">${a[0]}</span>&nbsp;${a[1]}<span>＋</span></button>
    <div class="body"><div class="inner">${a[2]}</div></div></div>`).join('');
  document.querySelectorAll('.item button').forEach(b => b.onclick = () => {
    const item = b.parentNode, body = item.querySelector('.body'), open = item.classList.toggle('open');
    body.style.maxHeight = open ? body.scrollHeight + 'px' : 0;
    b.setAttribute('aria-expanded', open);
  });
  $('#project-list').innerHTML = PROJECTS.map((p, i) => `<article class="proj reveal" style="transition-delay:${i * .08}s">
    <div><b>0${i + 1}</b><h3>${p[0]}</h3><p class="muted">${p[1]}</p></div>
    <div class="row"><a class="btn" href="${p[2]}">Көрүү →</a><a class="btn" href="${p[3]}">GitHub →</a></div></article>`).join('');
  $('#path-list').innerHTML = PATH.map((p, i) => `<li class="reveal" style="transition-delay:${i * .07}s">${p[0] ? `<b>${p[0]}</b> — ` : ''}${p[1]}</li>`).join('');
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), {threshold: .15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ===== ВИЗИТКА БЕТИ ===== */
if ($('#contactBtns')) {
  $('#contactBtns').innerHTML = [['📞 Телефон', CONTACT.phone], ['Telegram', CONTACT.telegram], ['Instagram', CONTACT.instagram], ['GitHub', CONTACT.github], ['Email', CONTACT.email]]
    .map(c => `<a href="${c[1]}" ${c[1].startsWith('http') ? 'target="_blank" rel="noopener"' : ''} onclick="event.stopPropagation()">${c[0]}</a>`).join('');
  const flip = $('#flip'), toast = t => { $('#toast').textContent = t; setTimeout(() => $('#toast').textContent = '', 2500); };
  const turn = () => flip.classList.toggle('turned');
  $('#scene').onclick = turn; $('#qrBtn').onclick = turn;
  $('#scene').onkeydown = e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), turn());
  // Байланышка сактоо: .vcf файл жүктөлөт, телефон өзү контакт катары ачат
  $('#saveBtn').onclick = () => {
    const v = `BEGIN:VCARD\nVERSION:3.0\nFN:Самара\nORG:SAMARA\nTITLE:IT үйрөнүп жатам\nTEL;TYPE=CELL:+996772646121\nEMAIL:${CONTACT.email.replace('mailto:', '')}\nURL:${CONTACT.github}\nEND:VCARD`;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([v], {type: 'text/vcard'})); a.download = 'samara.vcf'; a.click();
    toast('Контакт файлы жүктөлдү');
  };
  // Бөлүшүү: телефондо меню ачылат, компьютерде шилтеме көчүрүлөт
  $('#shareBtn').onclick = async () => {
    const data = {title: 'SAMARA — визитка', url: location.href};
    try { if (navigator.share) { await navigator.share(data); } else { await navigator.clipboard.writeText(location.href); toast('Шилтеме көчүрүлдү'); } }
    catch (e) { toast('Шилтемени кол менен көчүрүңүз'); }
  };
}
