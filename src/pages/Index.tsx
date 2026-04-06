import { useEffect, useRef, useState } from "react";

const CONTENT = {
  nav: {
    logo: "AMS",
    links: [
      { ru: "О нас", en: "About", hy: "Մեր մասին" },
      { ru: "Услуги", en: "Services", hy: "Ծառայություններ" },
      { ru: "Как это работает", en: "How it works", hy: "Ինչպես է աշխատում" },
      { ru: "Преимущества", en: "Advantages", hy: "Առավելություններ" },
    ],
    cta: { ru: "Связаться", en: "Contact", hy: "Կապ" },
  },
  hero: {
    headline: {
      ru: "Интеграция ИИ в бизнес.",
      en: "AI integration into business.",
      hy: "Բիզնեսում ԱԲ ինտեգրում։",
    },
    subheadline: {
      ru: "Автономные системы, которые работают вместо людей.",
      en: "Autonomous systems that work instead of people.",
      hy: "Ինքնավար համակարգեր, որոնք աշխատում են մարդկանց փոխարեն։",
    },
    desc: {
      ru: "Создаём AI-консультантов, обучаем модели и внедряем системы, которые снижают расходы и увеличивают прибыль.",
      en: "We build AI consultants, train models, and implement systems that reduce costs and increase profit.",
      hy: "Մենք ստեղծում ենք ԱԲ խորհրդատուներ, ուսուցանում մոդելներ և ներդնում համակարգեր, որոնք նվազեցնում են ծախսերը և մեծացնում շահույթը։",
    },
    cta: { ru: "Получить консультацию", en: "Get a Consultation", hy: "Ստանալ խորհրդատվություն" },
  },
  about: {
    label: { ru: "О компании", en: "About", hy: "Մեր մասին" },
    title: {
      ru: "Автономные AI-системы для бизнеса",
      en: "Autonomous AI Systems for Business",
      hy: "Ինքնավար ԱԲ համակարգեր բիզնեսի համար",
    },
    items: [
      {
        icon: "◈",
        ru: "Без облаков",
        en: "Offline",
        hy: "Առանց ամպային ծառայությունների",
        descRu: "Системы работают локально — без зависимости от третьих сторон.",
        descEn: "Systems run locally — no third-party dependency.",
        descHy: "Համակարգերը աշխատում են տեղում՝ առանց կախվածության երրորդ կողմերից։",
      },
      {
        icon: "◉",
        ru: "Безопасность",
        en: "Secure",
        hy: "Անվտանգ",
        descRu: "Ваши данные остаются у вас. Никакой утечки информации.",
        descEn: "Your data stays with you. Zero information leakage.",
        descHy: "Ձեր տվյալները մնում են ձեզ մոտ։ Տեղեկատվության արտահոսք չկա։",
      },
      {
        icon: "◎",
        ru: "Полностью локально",
        en: "Fully local",
        hy: "Ամբողջությամբ տեղային",
        descRu: "Развёртывание на вашей инфраструктуре без компромиссов.",
        descEn: "Deployed on your infrastructure without compromise.",
        descHy: "Տեղակայում ձեր ենթակառուցվածքի վրա՝ առանց կոմպրոմիսների։",
      },
    ],
  },
  services: {
    label: { ru: "Услуги", en: "Services", hy: "Ծառայություններ" },
    title: { ru: "Что мы делаем", en: "What We Do", hy: "Ինչ ենք մենք անում" },
    items: [
      {
        num: "01",
        ru: "Интеграция AI",
        en: "AI Integration",
        hy: "ԱԲ ինտեգրացիա",
        descRu: "Автоматизация бизнес-процессов. Снижение операционных издержек.",
        descEn: "Business process automation. Reduced operational costs.",
        descHy: "Բիզնես գործընթացների ավտոմատացում։ Գործառնական ծախսերի կրճատում։",
      },
      {
        num: "02",
        ru: "AI-консультанты",
        en: "AI Consultants",
        hy: "ԱԲ խորհրդատուներ",
        descRu: "Обучение под вашу нишу. Знают продукт, клиентов и процессы.",
        descEn: "Domain-trained assistants. Know your product, clients, processes.",
        descHy: "Ուսուցում ձեր ոլորտի համար։ Գիտեն ձեր ապրանքը, հաճախորդներին, գործընթացները։",
      },
      {
        num: "03",
        ru: "Корпоративные модели",
        en: "Enterprise AI Models",
        hy: "Կորպորատիվ ԱԲ մոդելներ",
        descRu: "Собственная модель под бизнес. Полный контроль над данными.",
        descEn: "Custom model for your business. Full data ownership.",
        descHy: "Հատուկ մոդել ձեր բիզնեսի համար։ Ամբողջական վերահսկողություն տվյալների նկատմամբ։",
      },
    ],
  },
  steps: {
    label: { ru: "Процесс", en: "Process", hy: "Գործընթաց" },
    title: { ru: "Как это работает", en: "How It Works", hy: "Ինչպես է աշխատում" },
    items: [
      {
        num: "1",
        ru: "Анализ",
        en: "Analysis",
        hy: "Վերլուծություն",
        descRu: "Изучаем ваши процессы и задачи",
        descEn: "We study your processes and goals",
        descHy: "Ուսումնասիրում ենք ձեր գործընթացները",
      },
      {
        num: "2",
        ru: "База знаний",
        en: "Knowledge Base",
        hy: "Գիտելիքների բազա",
        descRu: "Формируем данные для обучения",
        descEn: "We build training data structures",
        descHy: "Կառուցում ենք ուսուցման տվյալների կառուցվածքները",
      },
      {
        num: "3",
        ru: "Настройка",
        en: "Setup",
        hy: "Կարգավորում",
        descRu: "Настраиваем и тестируем систему",
        descEn: "Configure and test the system",
        descHy: "Կարգավորում և փորձարկում ենք համակարգը",
      },
      {
        num: "4",
        ru: "Запуск",
        en: "Launch",
        hy: "Գործարկում",
        descRu: "Запускаем в работу, поддерживаем",
        descEn: "Deploy into production, support",
        descHy: "Գործարկում ենք, ապահովում ենք աջակցություն",
      },
    ],
  },
  advantages: {
    label: { ru: "Преимущества", en: "Advantages", hy: "Առավելություններ" },
    title: { ru: "Почему выбирают нас", en: "Why Choose Us", hy: "Ինչու ընտրել մեզ" },
    items: [
      {
        ru: "Автономность",
        en: "Autonomy",
        hy: "Ինքնավարություն",
        descRu: "Системы работают без участия человека 24/7",
        descEn: "Systems operate without human input 24/7",
        descHy: "Համակարգերն աշխատում են 24/7 առանց մարդու մասնակցության",
      },
      {
        ru: "Безопасность",
        en: "Security",
        hy: "Անվտանգություն",
        descRu: "Данные не покидают вашу инфраструктуру",
        descEn: "Data never leaves your infrastructure",
        descHy: "Տվյալները երբեք չեն լքում ձեր ենթակառուցվածքը",
      },
      {
        ru: "Масштабируемость",
        en: "Scalability",
        hy: "Մասշտաբայնություն",
        descRu: "Растёт вместе с вашим бизнесом",
        descEn: "Scales as your business grows",
        descHy: "Աճում է ձեր բիզնեսի հետ",
      },
    ],
  },
  cta: {
    title: { ru: "Готовы внедрить AI?", en: "Ready to implement AI?", hy: "Պատրա՞ստ եք ներդնել ԱԲ" },
    desc: {
      ru: "Оставьте заявку — разберём вашу задачу и предложим решение.",
      en: "Leave a request — we'll analyze your task and propose a solution.",
      hy: "Թողեք հայտ — կվերլուծենք ձեր խնդիրը և կառաջարկենք լուծում։",
    },
    btn: { ru: "Связаться", en: "Contact Us", hy: "Կապ հաստատել" },
  },
  footer: {
    copy: "© 2026 Автономные Мобильные Системы",
  },
};

function useIntersect(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useIntersect();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function TriLang({ text }: { text: { ru: string; en: string; hy: string } }) {
  return (
    <span className="tri-lang">
      <span className="lang-ru">{text.ru}</span>
      <span className="lang-sep"> / </span>
      <span className="lang-en">{text.en}</span>
      <span className="lang-sep"> / </span>
      <span className="lang-hy">{text.hy}</span>
    </span>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`ams-nav${scrolled ? " scrolled" : ""}`}>
      <div className="ams-nav-inner">
        <a href="#" className="ams-logo">
          <span className="logo-mark">▲</span>
          <span className="logo-text">AMS</span>
        </a>
        <div className="ams-nav-links">
          {CONTENT.nav.links.map((l, i) => (
            <a key={i} href={`#section-${i}`} className="nav-link">
              <span>{l.ru}</span>
            </a>
          ))}
        </div>
        <a href="#cta" className="ams-nav-cta">{CONTENT.nav.cta.ru}</a>
        <button className="ams-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="ams-mobile-menu">
          {CONTENT.nav.links.map((l, i) => (
            <a key={i} href={`#section-${i}`} className="nav-link-mobile" onClick={() => setOpen(false)}>
              {l.ru} / {l.en}
            </a>
          ))}
          <a href="#cta" className="ams-nav-cta mt-4" onClick={() => setOpen(false)}>{CONTENT.nav.cta.ru}</a>
        </div>
      )}
    </nav>
  );
}

export default function Index() {
  return (
    <div className="ams-root">
      <NavBar />

      {/* HERO */}
      <section className="ams-hero" id="section-0">
        <div className="hero-grid-bg" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="ams-container hero-content">
          <Reveal delay={0}>
            <div className="hero-label">Автономные Мобильные Системы</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="hero-title">
              <span className="block">{CONTENT.hero.headline.ru}</span>
              <span className="block hero-title-en">{CONTENT.hero.headline.en}</span>
              <span className="block hero-title-hy">{CONTENT.hero.headline.hy}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-sub">
              <p>{CONTENT.hero.subheadline.ru}</p>
              <p className="muted">{CONTENT.hero.subheadline.en}</p>
              <p className="muted">{CONTENT.hero.subheadline.hy}</p>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero-desc">
              <p>{CONTENT.hero.desc.ru}</p>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="hero-actions">
              <a href="#cta" className="btn-primary">
                {CONTENT.hero.cta.ru}
                <span className="btn-arrow">→</span>
              </a>
              <a href="#section-1" className="btn-ghost">
                {CONTENT.hero.cta.en}
              </a>
            </div>
          </Reveal>
          <Reveal delay={600}>
            <div className="hero-stats">
              <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Local / Локально</span></div>
              <div className="stat-div" />
              <div className="stat"><span className="stat-num">0</span><span className="stat-label">Data leaks / Утечек</span></div>
              <div className="stat-div" />
              <div className="stat"><span className="stat-num">24/7</span><span className="stat-label">Autonomous / Автономно</span></div>
            </div>
          </Reveal>
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <span className="scroll-line" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="ams-section" id="section-1">
        <div className="ams-container">
          <Reveal>
            <div className="section-label"><TriLang text={CONTENT.about.label} /></div>
            <h2 className="section-title">{CONTENT.about.title.ru}</h2>
            <p className="section-title-sub">{CONTENT.about.title.en} / {CONTENT.about.title.hy}</p>
          </Reveal>
          <div className="about-grid">
            {CONTENT.about.items.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="about-card">
                  <div className="about-icon">{item.icon}</div>
                  <div className="about-card-title">{item.ru}</div>
                  <div className="about-card-title-sub">{item.en} / {item.hy}</div>
                  <p className="about-card-desc">{item.descRu}</p>
                  <p className="about-card-desc muted">{item.descEn}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ams-section ams-section-dark" id="section-2">
        <div className="ams-container">
          <Reveal>
            <div className="section-label"><TriLang text={CONTENT.services.label} /></div>
            <h2 className="section-title">{CONTENT.services.title.ru}</h2>
            <p className="section-title-sub">{CONTENT.services.title.en} / {CONTENT.services.title.hy}</p>
          </Reveal>
          <div className="services-list">
            {CONTENT.services.items.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="service-row">
                  <div className="service-num">{item.num}</div>
                  <div className="service-body">
                    <div className="service-title">{item.ru}</div>
                    <div className="service-title-sub">{item.en} / {item.hy}</div>
                  </div>
                  <div className="service-desc">
                    <p>{item.descRu}</p>
                    <p className="muted">{item.descEn}</p>
                  </div>
                  <div className="service-arrow">→</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ams-section" id="section-3">
        <div className="ams-container">
          <Reveal>
            <div className="section-label"><TriLang text={CONTENT.steps.label} /></div>
            <h2 className="section-title">{CONTENT.steps.title.ru}</h2>
            <p className="section-title-sub">{CONTENT.steps.title.en} / {CONTENT.steps.title.hy}</p>
          </Reveal>
          <div className="steps-grid">
            {CONTENT.steps.items.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="step-card">
                  <div className="step-num">{step.num}</div>
                  <div className="step-line" />
                  <div className="step-title">{step.ru}</div>
                  <div className="step-title-sub">{step.en} / {step.hy}</div>
                  <p className="step-desc">{step.descRu}</p>
                  <p className="step-desc muted">{step.descEn}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="ams-section ams-section-dark" id="section-4">
        <div className="ams-container">
          <Reveal>
            <div className="section-label"><TriLang text={CONTENT.advantages.label} /></div>
            <h2 className="section-title">{CONTENT.advantages.title.ru}</h2>
            <p className="section-title-sub">{CONTENT.advantages.title.en} / {CONTENT.advantages.title.hy}</p>
          </Reveal>
          <div className="adv-grid">
            {CONTENT.advantages.items.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="adv-card">
                  <div className="adv-idx">0{i + 1}</div>
                  <h3 className="adv-title">{item.ru}</h3>
                  <div className="adv-title-sub">{item.en} / {item.hy}</div>
                  <p className="adv-desc">{item.descRu}</p>
                  <p className="adv-desc muted">{item.descEn}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ams-cta" id="cta">
        <div className="cta-glow" aria-hidden />
        <div className="ams-container cta-inner">
          <Reveal>
            <h2 className="cta-title">{CONTENT.cta.title.ru}</h2>
            <p className="cta-title-sub">{CONTENT.cta.title.en} / {CONTENT.cta.title.hy}</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="cta-desc">{CONTENT.cta.desc.ru}</p>
            <p className="cta-desc muted">{CONTENT.cta.desc.en}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="cta-form">
              <input className="cta-input" type="text" placeholder="Ваше имя / Your name / Ձեր անունը" />
              <input className="cta-input" type="tel" placeholder="+7 / +374 / телефон" />
              <button className="btn-primary btn-large">
                {CONTENT.cta.btn.ru} / {CONTENT.cta.btn.en}
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ams-footer">
        <div className="ams-container footer-inner">
          <div className="footer-logo">
            <span className="logo-mark">▲</span>
            <span className="logo-text">AMS</span>
          </div>
          <div className="footer-copy">{CONTENT.footer.copy}</div>
          <div className="footer-tagline">Autonomous Mobile Systems / Ինքնավար Շարժական Համակարգեր</div>
        </div>
      </footer>
    </div>
  );
}
