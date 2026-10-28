const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav a');
const languageToggle = document.querySelector('#language-toggle');
const backToTop = document.querySelector('.footer > a[href="#top"]');

// The footer action explicitly scrolls instead of relying only on hash navigation.
backToTop?.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  history.replaceState(null, '', '#top');
});

toggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const translations = {
  en: {
    nav: ['About', 'Experience', 'Selected work', 'Credentials', "Let's connect <span>+</span>"],
    eyebrow: 'Product Owner &middot; Product Manager &middot; Scrum Master',
    heroTitle: 'Turning complex<br><em>delivery</em> into<br>momentum.',
    heroIntro: 'I help teams build useful technology with clarity &mdash; connecting product value, stakeholder alignment, and practical execution across SaaS, enterprise software, AI, and digital platforms.',
    heroButton: 'Explore selected work <span>+</span>',
    orbit: ['Product', 'People', 'Progress'],
    aside: 'Ankara, Turkey<br>Working across EMEA, Asia &amp; North America.',
    signals: ['years in product &amp; delivery', 'SAFe 6.0 Scrum Master', 'Management &amp; Organization', 'Scrum teams led'],
    labels: ['Profile', 'Professional experience', 'Selected work', 'Way of working', 'Toolkit &amp; credentials', 'Contact'],
    aboutTitle: 'Product thinking.<br><em>Delivery discipline.</em>',
    aboutLead: 'Product and project delivery professional with 6+ years of experience across SaaS, enterprise software, AI, and technology projects in EMEA, Asia, and North America.',
    aboutP1: 'I work across stakeholder coordination, backlog prioritization, Agile/Scrum delivery, project planning, risk management, customer-facing implementations, AI/ML products, and multiple workstreams.',
    aboutP2: 'My approach combines hands-on technical product exposure with a strong focus on product value, delivery quality, and practical execution &mdash; keeping teams aligned, outcomes visible, and decisions moving.',
    aboutLink: 'See how I work <span>+</span>',
    experienceTitle: 'Leading the work<br><em>from intent to impact.</em>',
    experienceIntro: 'From recruitment technology to AI products and multi-platform delivery, I coordinate people, priorities, and execution across the full project lifecycle.',
    experienceRoles: ['IT Project Manager', 'Senior Scrum Master', 'Scrum Master'],
    experienceDates: ['Feb 2023 &mdash; Sep 2026', 'Jan 2024 &mdash; Feb 2025', 'Jan 2020 &mdash; Feb 2023'],
    experienceBullets: [
      ['Coordinated delivery for a recruitment platform while aligning projects with business objectives and customer-focused outcomes.', 'Led planning, execution, monitoring, and closure while managing scope, timelines, resources, and risks.', 'Managed multiple project teams and workstreams across different time zones and priorities.', 'Used Jira, Asana, Trello, and Microsoft Project for progress tracking, coordination, and reporting.'],
      ['Collaborated with Product Owners and Client Success Managers to deliver AI products and big-data ML models.', 'Led 3+ Scrum teams through stand-ups, sprint planning, retrospectives, impediment removal, and continuous improvement.', 'Mentored team members on Agile practices and supported smooth sprint execution.'],
      ['Led delivery of e-commerce, restaurant reservation, and airport luggage-management products across web, Android, and iOS.', 'Managed project charters, plans, budgets, communications, and risk documentation across the lifecycle.', 'Built stakeholder relationships to align expectations, mitigate risks, and drive successful outcomes.']
    ],
    workTitle: 'Projects with<br><em>real-world weight.</em>',
    workIntro: 'Products and platforms shaped through cross-functional delivery, stakeholder alignment, and a bias toward useful outcomes.',
    projectTypes: ['Recruitment technology', 'Mobility &middot; Analytics', 'Airport operations', 'Restaurant technology', 'E-commerce'],
    projectTitles: ['Marn platform &amp; apps', 'TAXA', 'Go-Carte app', 'Skipro', 'Takhayar'],
    projectDescriptions: ['A mass recruitment technology solution covering recruitment, management, payments, retention, and workforce efficiency across employee, business, and operations products.', 'A taxi booking ecosystem connecting riders and drivers with Android and iOS apps, fleet operations, and over 100 analytics reports.', 'An Android tablet application for airport trolley management, clerk attendance, NFC cards, and passenger ticketing.', 'A digital platform streamlining restaurant reservations and crowd management, improving customer flow and reducing operational costs.', 'A Saudi-based e-commerce platform focused on a seamless shopping experience, convenient delivery, and customer satisfaction.'],
    projectTags: [['Web &amp; mobile', '200+ reports', 'Agile delivery'], ['Android + iOS', 'Operations', 'Metabase'], ['Android tablet', 'NFC'], ['Customer journey', 'Automation'], ['Product experience', 'Commerce']],
    approachTitle: 'Build the rhythm.<br><em>Protect the focus.</em>',
    approachLead: 'The best delivery systems feel less like a process and more like a team finding its stride.',
    principles: [['Make work visible', 'Transparent workflows, shared context, and a single source of truth help teams make better decisions faster.'], ['Facilitate with intent', 'Every ceremony should create value &mdash; from sharper planning to more honest retrospectives and stronger collaboration.'], ['Turn feedback into flow', 'Short learning loops keep products close to user needs and teams close to meaningful outcomes.']],
    toolkitTitle: 'The tools are only useful<br>when the <em>team is aligned.</em>',
    credentialKickers: ['Education', 'Certification', 'Education', 'Certification'],
    credentialBodies: ['Management and Organization<br><strong>Kocaeli University &middot; 2025</strong>', 'SAFe 6.0 Scrum Master<br><strong>Scaled Agile</strong>', 'Business Administration<br><strong>IUG University &middot; 2015</strong>', 'Certified Scrum Master<br><strong>Scrum Alliance</strong>'],
    contactTitle: 'Have a complex<br><em>challenge?</em>',
    contactIntro: "I'm always happy to connect and collaborate with people building useful things.",
    footerRole: 'Product Owner &middot; Project Manager &middot; Scrum Master',
    backTop: 'Back to top &uarr;'
  },
  tr: {
    nav: ['Hakkımda', 'Deneyim', 'Seçili çalışmalar', 'Yetkinlikler', 'İletişime geç <span>+</span>'],
    eyebrow: 'Ürün Sahibi &middot; Ürün Yöneticisi &middot; Scrum Master',
    heroTitle: 'Karmaşık işleri<br><em>teslimata</em><br>dönüştürüyorum.',
    heroIntro: 'Ekiplerin faydalı teknolojiler geliştirmesine yardımcı oluyorum; ürün değerini, paydaş uyumunu ve pratik uygulamayı SaaS, kurumsal yazılım, yapay zekâ ve dijital platformlarda bir araya getiriyorum.',
    heroButton: 'Seçili çalışmaları incele <span>+</span>',
    orbit: ['Ürün', 'İnsan', 'İlerleme'],
    aside: 'Ankara, Türkiye<br>EMEA, Asya ve Kuzey Amerika ile çalışıyorum.',
    signals: ['ürün ve teslimat deneyimi', 'SAFe 6.0 Scrum Master', 'Yönetim ve Organizasyon', 'yönettiğim Scrum ekibi'],
    labels: ['Profil', 'Profesyonel deneyim', 'Seçili çalışmalar', 'Çalışma yaklaşımı', 'Araçlar ve yetkinlikler', 'İletişim'],
    aboutTitle: 'Ürün bakışı.<br><em>Teslimat disiplini.</em>',
    aboutLead: 'EMEA, Asya ve Kuzey Amerika’da SaaS, kurumsal yazılım, yapay zekâ ve teknoloji projelerinde 6+ yıllık deneyime sahip ürün ve proje teslimat profesyoneliyim.',
    aboutP1: 'Paydaş koordinasyonu, backlog önceliklendirme, Agile/Scrum teslimatı, proje planlama, risk yönetimi, müşteri odaklı uygulamalar, AI/ML ürünleri ve çoklu iş akışlarıyla çalışıyorum.',
    aboutP2: 'Yaklaşımım; teknik ürün deneyimini ürün değeri, teslimat kalitesi ve pratik uygulamaya odaklanan bir çalışma biçimiyle birleştirir. Ekipleri uyumlu, sonuçları görünür ve kararları hareket halinde tutarım.',
    aboutLink: 'Nasıl çalıştığımı gör <span>+</span>',
    experienceTitle: 'İşi fikirden<br><em>etkiye taşıyorum.</em>',
    experienceIntro: 'İşe alım teknolojisinden yapay zekâ ürünlerine ve çok platformlu teslimatlara kadar, tüm proje yaşam döngüsünde insanları, öncelikleri ve uygulamayı koordine ediyorum.',
    experienceRoles: ['BT Proje Yöneticisi', 'Kıdemli Scrum Master', 'Scrum Master'],
    experienceDates: ['Şub 2023 &mdash; Eyl 2026', 'Oca 2024 &mdash; Şub 2025', 'Oca 2020 &mdash; Şub 2023'],
    experienceBullets: [
      ['İşe alım platformunun teslimatını koordine ederek projeleri iş hedefleri ve müşteri odaklı sonuçlarla hizaladım.', 'Kapsam, takvim, kaynak ve riskleri yöneterek planlama, uygulama, izleme ve kapanış süreçlerine liderlik ettim.', 'Farklı zaman dilimleri ve önceliklerde birden fazla proje ekibini ve iş akışını yönettim.', 'İlerleme takibi, koordinasyon ve raporlama için Jira, Asana, Trello ve Microsoft Project kullandım.'],
      ['Ürün Sahipleri ve Müşteri Başarı Yöneticileriyle birlikte yapay zekâ ürünleri ve büyük veri makine öğrenmesi modelleri geliştirdim.', '3+ Scrum ekibine günlük toplantılar, sprint planlama, retrospektifler, engel kaldırma ve sürekli iyileştirme süreçlerinde liderlik ettim.', 'Ekip üyelerine Agile uygulamaları konusunda mentorluk yaparak sprint teslimatını destekledim.'],
      ['E-ticaret, restoran rezervasyonu ve havalimanı bagaj yönetimi ürünlerinin web, Android ve iOS teslimatlarına liderlik ettim.', 'Yaşam döngüsü boyunca proje sözleşmeleri, planlar, bütçeler, iletişim ve risk dokümantasyonunu yönettim.', 'Beklentileri hizalamak, riskleri azaltmak ve başarılı sonuçlar elde etmek için paydaş ilişkileri kurdum.']
    ],
    workTitle: 'Gerçek dünyada<br><em>karşılığı olan işler.</em>',
    workIntro: 'Çapraz fonksiyonlu teslimat, paydaş uyumu ve faydalı sonuçlara odaklanan ürün ve platformlar.',
    projectTypes: ['İşe alım teknolojisi', 'Mobilite &middot; Analitik', 'Havalimanı operasyonları', 'Restoran teknolojisi', 'E-ticaret'],
    projectTitles: ['Marn platformu ve uygulamaları', 'TAXA', 'Go-Carte uygulaması', 'Skipro', 'Takhayar'],
    projectDescriptions: ['İşe alım, yönetim, ödeme, çalışan bağlılığı ve iş gücü verimliliğini kapsayan; çalışan, işletme ve operasyon ürünlerinden oluşan teknoloji çözümü.', 'Yolcuları ve sürücüleri Android ve iOS uygulamaları, filo operasyonları ve 100’den fazla analitik raporla buluşturan taksi ekosistemi.', 'Havalimanı arabalarının yönetimi, personel devam takibi, NFC kartları ve yolcu biletleme için Android tablet uygulaması.', 'Restoran rezervasyonlarını ve yoğunluk yönetimini kolaylaştıran, müşteri akışını ve operasyonel verimliliği iyileştiren dijital platform.', 'Sorunsuz alışveriş deneyimi, kolay teslimat ve müşteri memnuniyetine odaklanan Suudi Arabistan merkezli e-ticaret platformu.'],
    projectTags: [['Web ve mobil', '200+ rapor', 'Agile teslimat'], ['Android + iOS', 'Operasyon', 'Metabase'], ['Android tablet', 'NFC'], ['Müşteri yolculuğu', 'Otomasyon'], ['Ürün deneyimi', 'Ticaret']],
    approachTitle: 'Ritmi kur.<br><em>Odağı koru.</em>',
    approachLead: 'En iyi teslimat sistemleri bir süreçten çok, ritmini bulan bir ekip gibi hissettirir.',
    principles: [['İşi görünür kıl', 'Şeffaf iş akışları, ortak bağlam ve tek bir doğruluk kaynağı ekiplerin daha hızlı ve iyi kararlar almasını sağlar.'], ['Niyetle kolaylaştır', 'Her seremoni değer üretmeli; daha net planlamadan daha dürüst retrospektiflere ve güçlü iş birliğine kadar.'], ['Geri bildirimi akışa dönüştür', 'Kısa öğrenme döngüleri ürünleri kullanıcı ihtiyaçlarına, ekipleri de anlamlı sonuçlara yakın tutar.']],
    toolkitTitle: 'Araçlar ancak ekip<br><em>uyumluysa değerlidir.</em>',
    credentialKickers: ['Eğitim', 'Sertifika', 'Eğitim', 'Sertifika'],
    credentialBodies: ['Yönetim ve Organizasyon<br><strong>Kocaeli Üniversitesi &middot; 2025</strong>', 'SAFe 6.0 Scrum Master<br><strong>Scaled Agile</strong>', 'İşletme<br><strong>IUG Üniversitesi &middot; 2015</strong>', 'Certified Scrum Master<br><strong>Scrum Alliance</strong>'],
    contactTitle: 'Karmaşık bir<br><em>probleminiz mi var?</em>',
    contactIntro: 'Faydalı işler geliştiren insanlarla tanışmaktan ve iş birliği yapmaktan her zaman mutluluk duyarım.',
    footerRole: 'Ürün Sahibi &middot; Proje Yöneticisi &middot; Scrum Master',
    backTop: 'Başa dön &uarr;'
  }
};

const setHTML = (selector, value) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    const next = Array.isArray(value) ? value[index] : value;
    if (next !== undefined) element.innerHTML = next;
  });
};

function applyLanguage(language) {
  const t = translations[language];
  document.documentElement.lang = language;
  document.title = language === 'tr' ? 'Adem Alfarra &mdash; Ürün Sahibi &middot; Ürün Yöneticisi &middot; Scrum Master' : 'Adem Alfarra &mdash; Product Owner &middot; Product Manager &middot; Scrum Master';
  setHTML('.nav > a:not(.nav-cta)', t.nav.slice(0, 4));
  setHTML('.nav-cta', t.nav[4]);
  setHTML('.eyebrow', `<span class="status-dot"></span> ${t.eyebrow}`);
  setHTML('.hero h1', t.heroTitle);
  setHTML('.hero-intro', t.heroIntro);
  setHTML('.hero .button-primary', t.heroButton);
  setHTML('.orbit-label', t.orbit);
  setHTML('.aside-note', t.aside);
  setHTML('.signal-strip span:last-child', t.signals);
  setHTML('.section-label span:last-child', t.labels);
  setHTML('.about h2', t.aboutTitle);
  setHTML('.about-copy .lead', t.aboutLead);
  setHTML('.about-copy p:nth-of-type(2)', t.aboutP1);
  setHTML('.about-copy p:nth-of-type(3)', t.aboutP2);
  setHTML('.about-copy .text-link', t.aboutLink);
  setHTML('.experience-intro h2', t.experienceTitle);
  setHTML('.experience-intro p', t.experienceIntro);
  setHTML('.experience-item h3 small', t.experienceRoles);
  setHTML('.experience-meta span:first-child', t.experienceDates);
  if (language === 'tr') setHTML('.experience-meta span:nth-child(2)', ['Suudi Arabistan', 'Kanada', 'Suudi Arabistan']);
  else setHTML('.experience-meta span:nth-child(2)', ['Riyadh, Saudi Arabia', 'Ontario, Canada', 'Riyadh, Saudi Arabia']);
  t.experienceBullets.forEach((items, index) => setHTML(`.experience-item:nth-child(${index + 1}) li`, items));
  setHTML('.work-heading h2', t.workTitle);
  setHTML('.work-heading p', t.workIntro);
  setHTML('.project-type', t.projectTypes);
  setHTML('.project-content h3', t.projectTitles);
  setHTML('.project-content p', t.projectDescriptions);
  t.projectTags.forEach((items, index) => setHTML(`.project-card:nth-child(${index + 1}) .tags span`, items));
  setHTML('.approach h2', t.approachTitle);
  setHTML('.approach .lead', t.approachLead);
  t.principles.forEach((item, index) => {
    setHTML(`.principle:nth-child(${index + 1}) h3`, item[0]);
    setHTML(`.principle:nth-child(${index + 1}) p`, item[1]);
  });
  setHTML('.toolkit h2', t.toolkitTitle);
  setHTML('.credential-kicker', t.credentialKickers);
  setHTML('.credential-card p', t.credentialBodies);
  setHTML('.contact h2', t.contactTitle);
  setHTML('.contact-card > p', t.contactIntro);
  setHTML('.footer > span:nth-child(2)', t.footerRole);
  setHTML('.footer > a[href="#top"]', t.backTop);
  languageToggle.textContent = language === 'en' ? 'TR' : 'EN';
  languageToggle.setAttribute('aria-label', language === 'en' ? 'Switch to Turkish' : 'Switch to English');
  localStorage.setItem('portfolio-language', language);
}

languageToggle?.addEventListener('click', () => {
  applyLanguage(document.documentElement.lang === 'en' ? 'tr' : 'en');
});

const initialLanguage = localStorage.getItem('portfolio-language') === 'tr' ? 'tr' : 'en';
applyLanguage(initialLanguage);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.section-pad:not(.hero), .project-card, .principle, .tool-pill').forEach((element) => {
  element.classList.add('scroll-reveal');
  revealObserver.observe(element);
});
