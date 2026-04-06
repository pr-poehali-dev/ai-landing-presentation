import { useEffect, useRef, useState } from "react";

type Lang = "ru" | "en" | "hy";

const CONTENT = {
  nav: {
    links: [
      { ru: "О нас", en: "About", hy: "Մեր մասին" },
      { ru: "Услуги", en: "Services", hy: "Ծառայություններ" },
      { ru: "Как это работает", en: "How it works", hy: "Ինչպես է աշխատում" },
      { ru: "Преимущества", en: "Advantages", hy: "Առավելություններ" },
    ],
    cta: { ru: "Связаться", en: "Contact", hy: "Կապ" },
  },
  hero: {
    label: {
      ru: "Автономные Мобильные Системы",
      en: "Autonomous Mobile Systems",
      hy: "Ինքնավար Շարժական Համակարգեր",
    },
    headline: {
      ru: "Интеграция ИИ в бизнес. Автономные системы, которые работают вместо людей.",
      en: "AI integration into business. Autonomous systems that work instead of people.",
      hy: "Բիզնեսում ԱԲ ինտեգրում։ Ինքնավար համակարգեր, որոնք աշխատում են մարդկանց փոխարեն։",
    },
    desc: {
      ru: "Создаём AI-консультантов, обучаем модели и внедряем системы, которые снижают расходы и увеличивают прибыль.",
      en: "We build AI consultants, train models, and implement systems that reduce costs and increase profit.",
      hy: "Մենք ստեղծում ենք ԱԲ խորհրդատուներ, ուսուցանում մոդելներ և ներդնում համակարգեր, որոնք նվազեցնում են ծախսերը և մեծացնում շահույթը։",
    },
    cta: { ru: "Получить консультацию", en: "Get a Consultation", hy: "Ստանալ խորհրդատվություն" },
    ctaSub: { ru: "Узнать больше", en: "Learn more", hy: "Իմանալ ավելին" },
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
        title: { ru: "Без облаков", en: "Offline", hy: "Առանց ամպային ծառայությունների" },
        desc: {
          ru: "Системы работают локально — без зависимости от третьих сторон.",
          en: "Systems run locally — no third-party dependency.",
          hy: "Համակարգերը աշխատում են տեղում՝ առանց կախվածության երրորդ կողմերից։",
        },
      },
      {
        icon: "◉",
        title: { ru: "Безопасность", en: "Secure", hy: "Անվտանգ" },
        desc: {
          ru: "Ваши данные остаются у вас. Никакой утечки информации.",
          en: "Your data stays with you. Zero information leakage.",
          hy: "Ձեր տվյալները մնում են ձեզ մոտ։ Տեղեկատվության արտահոսք չկա։",
        },
      },
      {
        icon: "◎",
        title: { ru: "Полностью локально", en: "Fully local", hy: "Ամբողջությամբ տեղային" },
        desc: {
          ru: "Развёртывание на вашей инфраструктуре без компромиссов.",
          en: "Deployed on your infrastructure without compromise.",
          hy: "Տեղակայում ձեր ենթակառուցվածքի վրա՝ առանց կոմպրոմիսների։",
        },
      },
    ],
  },
  services: {
    label: { ru: "Услуги", en: "Services", hy: "Ծառայություններ" },
    title: { ru: "Что мы делаем", en: "What We Do", hy: "Ինչ ենք մենք անում" },
    items: [
      {
        num: "01",
        title: { ru: "Интеграция AI", en: "AI Integration", hy: "ԱԲ ինտեգրացիա" },
        desc: {
          ru: "Автоматизация бизнес-процессов. Снижение операционных издержек.",
          en: "Business process automation. Reduced operational costs.",
          hy: "Բիզնես գործընթացների ավտոմատացում։ Գործառնական ծախսերի կրճատում։",
        },
      },
      {
        num: "02",
        title: { ru: "AI-консультанты", en: "AI Consultants", hy: "ԱԲ խորհրդատուներ" },
        desc: {
          ru: "Обучение под вашу нишу. Знают продукт, клиентов и процессы.",
          en: "Domain-trained assistants. Know your product, clients, processes.",
          hy: "Ուսուցում ձեր ոլորտի համար։ Գիտեն ձեր ապրանքը, հաճախորդներին, գործընթացները։",
        },
      },
      {
        num: "03",
        title: { ru: "Корпоративные модели", en: "Enterprise AI Models", hy: "Կորպորատիվ ԱԲ մոդելներ" },
        desc: {
          ru: "Собственная модель под бизнес. Полный контроль над данными.",
          en: "Custom model for your business. Full data ownership.",
          hy: "Հատուկ մոդել ձեր բիզնեսի համար։ Ամբողջական վերահսկողություն տվյալների նկատմամբ։",
        },
      },
    ],
  },
  steps: {
    label: { ru: "Процесс", en: "Process", hy: "Գործընթաց" },
    title: { ru: "Как это работает", en: "How It Works", hy: "Ինչպես է աշխատում" },
    items: [
      {
        num: "1",
        title: { ru: "Анализ", en: "Analysis", hy: "Վերլուծություն" },
        desc: {
          ru: "Изучаем ваши процессы и задачи",
          en: "We study your processes and goals",
          hy: "Ուսումնասիրում ենք ձեր գործընթացները",
        },
      },
      {
        num: "2",
        title: { ru: "База знаний", en: "Knowledge Base", hy: "Գիտելիքների բազա" },
        desc: {
          ru: "Формируем данные для обучения",
          en: "We build training data structures",
          hy: "Կառուցում ենք ուսուցման տվյալների կառուցվածքները",
        },
      },
      {
        num: "3",
        title: { ru: "Настройка", en: "Setup", hy: "Կարգավորում" },
        desc: {
          ru: "Настраиваем и тестируем систему",
          en: "Configure and test the system",
          hy: "Կարգավորում և փորձարկում ենք համակարգը",
        },
      },
      {
        num: "4",
        title: { ru: "Запуск", en: "Launch", hy: "Գործարկում" },
        desc: {
          ru: "Запускаем в работу, поддерживаем",
          en: "Deploy into production, support",
          hy: "Գործարկում ենք, ապահովում ենք աջակցություն",
        },
      },
    ],
  },
  advantages: {
    label: { ru: "Преимущества", en: "Advantages", hy: "Առավելություններ" },
    title: { ru: "Почему выбирают нас", en: "Why Choose Us", hy: "Ինչու ընտրել մեզ" },
    items: [
      {
        title: { ru: "Автономность", en: "Autonomy", hy: "Ինքնավարություն" },
        desc: {
          ru: "Системы работают без участия человека 24/7",
          en: "Systems operate without human input 24/7",
          hy: "Համակարգերն աշխատում են 24/7 առանց մարդու մասնակցության",
        },
      },
      {
        title: { ru: "Безопасность", en: "Security", hy: "Անվտանգություն" },
        desc: {
          ru: "Данные не покидают вашу инфраструктуру",
          en: "Data never leaves your infrastructure",
          hy: "Տվյալները երբեք չեն լքում ձեր ենթակառուցվածքը",
        },
      },
      {
        title: { ru: "Масштабируемость", en: "Scalability", hy: "Մасштաbayunutyun" },
        desc: {
          ru: "Растёт вместе с вашим бизнесом",
          en: "Scales as your business grows",
          hy: "Աճում է ձեր բիզնեսի հետ",
        },
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
    namePlaceholder: { ru: "Ваше имя", en: "Your name", hy: "Ձեր անունը" },
    phonePlaceholder: { ru: "Телефон", en: "Phone", hy: "Հեռախոս" },
    btn: { ru: "Связаться", en: "Contact Us", hy: "Կապ հաստատել" },
  },
  footer: {
    copy: {
      ru: "© 2026 Автономные Мобильные Системы",
      en: "© 2026 Autonomous Mobile Systems",
      hy: "© 2026 Ինքնավար Շարժական Համակարգեր",
    },
  },
};

function useIntersect(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
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
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function T({ t, lang }: { t: Record<Lang, string>; lang: Lang }) {
  return <>{t[lang]}</>;
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="lang-switcher">
      {(["ru", "en", "hy"] as Lang[]).map((code) => (
        <button
          key={code}
          className={`lang-btn${lang === code ? " active" : ""}`}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function NavBar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
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
              <T t={l} lang={lang} />
            </a>
          ))}
        </div>
        <LangSwitcher lang={lang} setLang={setLang} />
        <a href="#cta" className="ams-nav-cta"><T t={CONTENT.nav.cta} lang={lang} /></a>
        <button className="ams-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="ams-mobile-menu">
          {CONTENT.nav.links.map((l, i) => (
            <a key={i} href={`#section-${i}`} className="nav-link-mobile" onClick={() => setOpen(false)}>
              <T t={l} lang={lang} />
            </a>
          ))}
          <LangSwitcher lang={lang} setLang={setLang} />
          <a href="#cta" className="ams-nav-cta" style={{ marginTop: 8 }} onClick={() => setOpen(false)}>
            <T t={CONTENT.nav.cta} lang={lang} />
          </a>
        </div>
      )}
    </nav>
  );
}

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");

  return (
    <div className="ams-root">
      <NavBar lang={lang} setLang={setLang} />

      {/* HERO */}
      <section className="ams-hero" id="section-0">
        <div className="hero-grid-bg" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="ams-container hero-content">
          <Reveal delay={0}>
            <div className="hero-label"><T t={CONTENT.hero.label} lang={lang} /></div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="hero-title"><T t={CONTENT.hero.headline} lang={lang} /></h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-desc">
              <p><T t={CONTENT.hero.desc} lang={lang} /></p>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero-actions">
              <a href="#cta" className="btn-primary">
                <T t={CONTENT.hero.cta} lang={lang} />
                <span className="btn-arrow">→</span>
              </a>
              <a href="#section-1" className="btn-ghost">
                <T t={CONTENT.hero.ctaSub} lang={lang} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="hero-stats">
              <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Local</span></div>
              <div className="stat-div" />
              <div className="stat"><span className="stat-num">0</span><span className="stat-label">Data leaks</span></div>
              <div className="stat-div" />
              <div className="stat"><span className="stat-num">24/7</span><span className="stat-label">Autonomous</span></div>
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
            <div className="section-label"><T t={CONTENT.about.label} lang={lang} /></div>
            <h2 className="section-title"><T t={CONTENT.about.title} lang={lang} /></h2>
          </Reveal>
          <div className="about-grid">
            {CONTENT.about.items.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="about-card">
                  <div className="about-icon">{item.icon}</div>
                  <div className="about-card-title"><T t={item.title} lang={lang} /></div>
                  <p className="about-card-desc"><T t={item.desc} lang={lang} /></p>
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
            <div className="section-label"><T t={CONTENT.services.label} lang={lang} /></div>
            <h2 className="section-title"><T t={CONTENT.services.title} lang={lang} /></h2>
          </Reveal>
          <div className="services-list">
            {CONTENT.services.items.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="service-row">
                  <div className="service-num">{item.num}</div>
                  <div className="service-body">
                    <div className="service-title"><T t={item.title} lang={lang} /></div>
                  </div>
                  <div className="service-desc">
                    <p><T t={item.desc} lang={lang} /></p>
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
            <div className="section-label"><T t={CONTENT.steps.label} lang={lang} /></div>
            <h2 className="section-title"><T t={CONTENT.steps.title} lang={lang} /></h2>
          </Reveal>
          <div className="steps-grid">
            {CONTENT.steps.items.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="step-card">
                  <div className="step-num">{step.num}</div>
                  <div className="step-line" />
                  <div className="step-title"><T t={step.title} lang={lang} /></div>
                  <p className="step-desc"><T t={step.desc} lang={lang} /></p>
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
            <div className="section-label"><T t={CONTENT.advantages.label} lang={lang} /></div>
            <h2 className="section-title"><T t={CONTENT.advantages.title} lang={lang} /></h2>
          </Reveal>
          <div className="adv-grid">
            {CONTENT.advantages.items.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="adv-card">
                  <div className="adv-idx">0{i + 1}</div>
                  <h3 className="adv-title"><T t={item.title} lang={lang} /></h3>
                  <p className="adv-desc"><T t={item.desc} lang={lang} /></p>
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
            <h2 className="cta-title"><T t={CONTENT.cta.title} lang={lang} /></h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="cta-desc"><T t={CONTENT.cta.desc} lang={lang} /></p>
          </Reveal>
          <Reveal delay={220}>
            <div className="cta-form">
              <input className="cta-input" type="text" placeholder={CONTENT.cta.namePlaceholder[lang]} />
              <input className="cta-input" type="tel" placeholder={CONTENT.cta.phonePlaceholder[lang]} />
              <button className="btn-primary btn-large">
                <T t={CONTENT.cta.btn} lang={lang} />
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
          <div className="footer-copy"><T t={CONTENT.footer.copy} lang={lang} /></div>
        </div>
      </footer>
    </div>
  );
}
