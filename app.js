const criteria = [
  { key: "echr", label: "Опыт ЕСПЧ", weight: 28 },
  { key: "sanctions", label: "Санкционный кейс-фит", weight: 22 },
  { key: "rankings", label: "Chambers / Legal 500", weight: 16 },
  { key: "sealed", label: "Закрытые материалы", weight: 13 },
  { key: "value", label: "Цена / эффективность", weight: 11 },
  { key: "payment", label: "Оплата и KYC", weight: 10 },
];

const palette = ["#2563eb", "#f97316", "#14b8a6", "#22c55e", "#8b5cf6", "#f43f5e", "#06b6d4"];

let nextConsultantId = 1;
let budgetCap = 900;

let consultants = [
  {
    name: "ALRUD",
    fullName: "ALRUD Law Firm",
    jurisdiction: "Россия",
    color: palette[0],
    website: "https://www.alrud.com/",
    partnerName: "Sergey Petrachkov",
    partnerUrl: "https://www.alrud.com/people/SergeyPetrachkov",
    rate: 520,
    paymentText: "Retainer через согласованный банковский маршрут, KYC вручную",
    wireFriendly: false,
    lowConflict: false,
    mediaLinks: [
      { label: "Official site", url: "https://www.alrud.com/" },
      { label: "Partner profile", url: "https://www.alrud.com/people/SergeyPetrachkov" },
      { label: "Rankings and awards", url: "https://www.alrud.com/awards" },
    ],
    sources: [
      { label: "Firm", url: "https://www.alrud.com/" },
      { label: "People", url: "https://www.alrud.com/lawyers" },
      { label: "Awards", url: "https://www.alrud.com/awards" },
    ],
    cells: {
      experience: "Российский local counsel для фактуры, процессуальной истории, санкционных и международных litigation-вопросов.",
      rankings: "На странице awards указаны позиции по arbitration proceedings, international litigation и sanctions law.",
      credentials: "Крупная российская фирма; профиль партнера Sergey Petrachkov указывает dispute resolution, restructuring/insolvency и international arbitration.",
      successes: "Подходит как локальный counsel для российской фактуры, доказательств, процессуальных документов и координации с европейским PIL counsel.",
      price: "Средне-высокий чек; ценность выше при сложной локальной фактуре.",
      payment: "Нужна отдельная проверка маршрута платежа и санкционного комплаенса.",
      risks: "Главный риск: восприятие в европейской стратегии и потенциальный conflict check.",
    },
    scores: { echr: 48, sanctions: 58, rankings: 82, sealed: 66, value: 70, payment: 45 },
  },
  {
    name: "Asters",
    fullName: "Asters Law Firm",
    jurisdiction: "Украина",
    color: palette[1],
    website: "https://www.asterslaw.com/",
    partnerName: "Oleksiy Didkovskiy",
    partnerUrl: "https://www.asterslaw.com/our_team/didkovskiy/",
    rate: 430,
    paymentText: "EUR/USD invoice, bank wire, enhanced KYC",
    wireFriendly: true,
    lowConflict: true,
    mediaLinks: [
      { label: "ECHR / disputes practice", url: "https://www.asterslaw.com/expertise/practice/international_arbitration/" },
      { label: "Lawdragon recognition", url: "https://www.asterslaw.com/press_center/news/asters_international_dispute_resolution_partners_are_recognised_by_the_2026_lawdragon_500_leading_global_litigators/" },
    ],
    sources: [
      { label: "Firm", url: "https://www.asterslaw.com/" },
      { label: "Chambers search", url: "https://chambers.com/search?query=Asters%20Ukraine" },
      { label: "Legal 500 search", url: "https://www.legal500.com/?s=Asters%20Ukraine" },
    ],
    cells: {
      experience: "Сильный украинский litigation и regulatory контекст; полезны для дела после проигрыша в Верховном суде Украины.",
      rankings: "Проверять актуальные рейтинги Chambers / Legal 500 Ukraine по disputes, corporate и regulatory.",
      credentials: "Крупная украинская фирма с международной клиентской базой и публичной репутацией.",
      successes: "Наиболее релевантны для доступа к украинской процедуре, локальным адвокатам и материалам дела.",
      price: "Ниже лондонских ставок; можно использовать как основной локальный хаб.",
      payment: "Обычно проще согласовать банковскую оплату, но нужен санкционный и AML скрининг.",
      risks: "Может потребоваться европейский barrister / PIL counsel для финальной архитектуры ЕСПЧ.",
    },
    scores: { echr: 68, sanctions: 86, rankings: 80, sealed: 88, value: 84, payment: 78 },
  },
  {
    name: "Doughty Street",
    fullName: "Doughty Street Chambers",
    jurisdiction: "UK / Европа",
    color: palette[2],
    website: "https://www.doughtystreet.co.uk/",
    partnerName: "Caoilfhionn Gallagher KC",
    partnerUrl: "https://www.doughtystreet.co.uk/barristers/caoilfhionn-gallagher-kc-associate",
    rate: 920,
    paymentText: "UK invoice, GBP/EUR wire, clerk-led onboarding",
    wireFriendly: true,
    lowConflict: true,
    mediaLinks: [
      { label: "Profile: successful cases", url: "https://www.doughtystreet.co.uk/barristers/caoilfhionn-gallagher-kc-associate" },
      { label: "Chambers search", url: "https://chambers.com/search?query=Caoilfhionn%20Gallagher%20KC" },
      { label: "Legal 500 search", url: "https://www.legal500.com/?s=Caoilfhionn%20Gallagher%20KC" },
    ],
    sources: [
      { label: "Firm", url: "https://www.doughtystreet.co.uk/" },
      { label: "Chambers search", url: "https://chambers.com/search?query=Doughty%20Street%20Chambers" },
      { label: "Legal 500 search", url: "https://www.legal500.com/?s=Doughty%20Street%20Chambers" },
    ],
    cells: {
      experience: "Сильный фокус на human rights, civil liberties, public law и международных судах.",
      rankings: "Проверять актуальные позиции в UK Bar directories по civil liberties, human rights и public international law.",
      credentials: "Известные barristers / KCs, профильная репутация в правах человека и стратегических делах.",
      successes: "Полезны для формулирования жалобы в ЕСПЧ, interim measures, admissibility и международной стратегии.",
      price: "Дорого; лучше брать на архитектуру позиции, review и ключевые документы.",
      payment: "Относительно понятный UK billing, но возможен запрос на instructing solicitor.",
      risks: "Нужны ранний бюджетный cap и проверка конфликта по политически чувствительным лицам.",
    },
    scores: { echr: 94, sanctions: 82, rankings: 90, sealed: 72, value: 52, payment: 74 },
  },
].map(attachRuntimeFields);

const importProfiles = [
  {
    match: (url) => url.includes("doughtystreet.co.uk"),
    data: {
      name: "Doughty imported",
      fullName: "Doughty Street Chambers",
      jurisdiction: "UK / Европа",
      website: "https://www.doughtystreet.co.uk/",
      partnerName: "Caoilfhionn Gallagher KC",
      partnerUrl: "https://www.doughtystreet.co.uk/barristers/caoilfhionn-gallagher-kc-associate",
      rate: 920,
      paymentText: "UK invoice, GBP/EUR wire, clerk-led onboarding",
      wireFriendly: true,
      lowConflict: true,
      mediaLinks: [
        { label: "Profile: successful cases", url: "https://www.doughtystreet.co.uk/barristers/caoilfhionn-gallagher-kc-associate" },
        { label: "Chambers search", url: "https://chambers.com/search?query=Caoilfhionn%20Gallagher%20KC" },
        { label: "Legal 500 search", url: "https://www.legal500.com/?s=Caoilfhionn%20Gallagher%20KC" },
      ],
      sources: [{ label: "Imported URL", url: "https://www.doughtystreet.co.uk/" }],
      scores: { echr: 94, sanctions: 82, rankings: 90, sealed: 72, value: 52, payment: 74 },
    },
  },
  {
    match: (url) => url.includes("asterslaw.com"),
    data: {
      name: "Asters imported",
      fullName: "Asters Law Firm",
      jurisdiction: "Украина",
      website: "https://www.asterslaw.com/",
      partnerName: "Oleksiy Didkovskiy",
      partnerUrl: "https://www.asterslaw.com/our_team/didkovskiy/",
      rate: 430,
      paymentText: "EUR/USD invoice, bank wire, enhanced KYC",
      wireFriendly: true,
      lowConflict: true,
      mediaLinks: [
        { label: "ECHR / disputes practice", url: "https://www.asterslaw.com/expertise/practice/international_arbitration/" },
        { label: "Lawdragon recognition", url: "https://www.asterslaw.com/press_center/news/asters_international_dispute_resolution_partners_are_recognised_by_the_2026_lawdragon_500_leading_global_litigators/" },
      ],
      sources: [{ label: "Imported URL", url: "https://www.asterslaw.com/" }],
      scores: { echr: 68, sanctions: 86, rankings: 80, sealed: 88, value: 84, payment: 78 },
    },
  },
  {
    match: (url) => url.includes("alrud.com"),
    data: {
      name: "ALRUD imported",
      fullName: "ALRUD Law Firm",
      jurisdiction: "Россия",
      website: "https://www.alrud.com/",
      partnerName: "Sergey Petrachkov",
      partnerUrl: "https://www.alrud.com/people/SergeyPetrachkov",
      rate: 520,
      paymentText: "Retainer через согласованный банковский маршрут, KYC вручную",
      wireFriendly: false,
      lowConflict: false,
      mediaLinks: [
        { label: "Official site", url: "https://www.alrud.com/" },
        { label: "Partner profile", url: "https://www.alrud.com/people/SergeyPetrachkov" },
        { label: "Rankings and awards", url: "https://www.alrud.com/awards" },
      ],
      sources: [{ label: "Imported URL", url: "https://www.alrud.com/" }],
      scores: { echr: 48, sanctions: 58, rankings: 82, sealed: 66, value: 70, payment: 45 },
    },
  },
];

const weights = Object.fromEntries(criteria.map((criterion) => [criterion.key, criterion.weight]));
const sliders = document.querySelector("#sliders");
const budgetInput = document.querySelector("#budgetCap");
const budgetValue = document.querySelector("#budgetValue");
const table = document.querySelector("#comparisonTable");
const scoreStrip = document.querySelector("#scoreStrip");
const leaderName = document.querySelector("#leaderName");
const leaderScore = document.querySelector("#leaderScore");
const importStatus = document.querySelector("#importStatus");

function attachRuntimeFields(consultant) {
  return {
    ...consultant,
    id: nextConsultantId++,
    edits: consultant.edits || {},
  };
}

function rowsForTable() {
  return [
    { key: "score", label: "Итог", value: (consultant) => `<div class="score-cell" style="color:${consultant.color}">${scoreConsultant(consultant)}</div>` },
    { key: "jurisdiction", label: "Юрисдикция", value: (consultant) => consultant.jurisdiction },
    { key: "website", label: "Сайт", value: (consultant) => renderLink("Открыть сайт", consultant.website) },
    { key: "partner", label: "Партнер", value: (consultant) => renderLink(consultant.partnerName, consultant.partnerUrl) },
    { key: "experience", label: "Опыт", value: (consultant) => consultant.cells.experience },
    { key: "rankings", label: "Рейтинги", value: (consultant) => consultant.cells.rankings },
    { key: "credentials", label: "Регалии", value: (consultant) => consultant.cells.credentials },
    { key: "successes", label: "Успешные кейсы", value: (consultant) => consultant.cells.successes },
    { key: "media", label: "СМИ / кейсы", value: renderMediaLinks },
    { key: "price", label: "Цена", value: (consultant) => `${consultant.rate} EUR/час<br><span class="muted">${consultant.cells.price}</span>` },
    { key: "payment", label: "Оплата", value: (consultant) => `${consultant.paymentText}<br><span class="muted">${consultant.cells.payment}</span>` },
    { key: "risks", label: "Риски", value: (consultant) => consultant.cells.risks },
    { key: "ratings", label: "Оценки", value: renderTags },
    { key: "sources", label: "Источники", value: renderSources },
  ];
}

function scoreConsultant(consultant) {
  const totalWeight = criteria.reduce((sum, criterion) => sum + weights[criterion.key], 0);
  const base = criteria.reduce((sum, criterion) => {
    return sum + consultant.scores[criterion.key] * weights[criterion.key];
  }, 0) / totalWeight;

  const budgetPenalty = consultant.rate > budgetCap ? Math.min(18, (consultant.rate - budgetCap) / 35) : 0;
  const rankingPenalty = document.querySelector("#requireRankings").checked && consultant.scores.rankings < 70 ? 12 : 0;
  const wirePenalty = document.querySelector("#requireWire").checked && !consultant.wireFriendly ? 14 : 0;
  const conflictPenalty = document.querySelector("#requireSanctions").checked && !consultant.lowConflict ? 14 : 0;

  return Math.max(0, Math.round(base - budgetPenalty - rankingPenalty - wirePenalty - conflictPenalty));
}

function rankedConsultants() {
  return [...consultants].sort((a, b) => scoreConsultant(b) - scoreConsultant(a));
}

function buildControls() {
  sliders.innerHTML = criteria
    .map(
      (criterion) => `
        <div class="slider-row">
          <label for="${criterion.key}">
            <span>${criterion.label}</span>
            <span id="${criterion.key}Value">${weights[criterion.key]}</span>
          </label>
          <input id="${criterion.key}" type="range" min="0" max="50" value="${weights[criterion.key]}" />
        </div>
      `
    )
    .join("");

  criteria.forEach((criterion) => {
    document.querySelector(`#${criterion.key}`).addEventListener("input", (event) => {
      weights[criterion.key] = Number(event.target.value);
      document.querySelector(`#${criterion.key}Value`).textContent = weights[criterion.key];
      render();
    });
  });

  budgetInput.addEventListener("input", (event) => {
    budgetCap = Number(event.target.value);
    budgetValue.textContent = budgetCap;
    render();
  });

  ["requireRankings", "requireWire", "requireSanctions"].forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("change", render);
  });

  document.querySelector("#resetButton").addEventListener("click", resetFilters);
}

function resetFilters() {
  criteria.forEach((criterion) => {
    weights[criterion.key] = criterion.weight;
    document.querySelector(`#${criterion.key}`).value = criterion.weight;
    document.querySelector(`#${criterion.key}Value`).textContent = criterion.weight;
  });
  budgetCap = 900;
  budgetInput.value = 900;
  budgetValue.textContent = 900;
  document.querySelector("#requireRankings").checked = true;
  document.querySelector("#requireWire").checked = false;
  document.querySelector("#requireSanctions").checked = false;
  render();
}

function renderScoreStrip(ranked) {
  scoreStrip.innerHTML = ranked
    .map((consultant) => {
      const score = scoreConsultant(consultant);
      return `
        <article class="score-card">
          <strong>${score}</strong>
          <span>${escapeHtml(consultant.name)}</span>
          <div class="bar"><i style="width: ${score}%; background: ${consultant.color}"></i></div>
        </article>
      `;
    })
    .join("");
}

function renderTable(ranked) {
  const rows = rowsForTable();
  table.innerHTML = `
    <thead>
      <tr>
        <th>Критерий</th>
        ${ranked
          .map(
            (consultant) => `
              <th class="firm-head">
                <span class="firm-title"><i class="dot" style="background:${consultant.color}"></i>${escapeHtml(consultant.name)}</span>
                <span class="firm-meta">${escapeHtml(consultant.fullName)}</span>
              </th>
            `
          )
          .join("")}
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (row) => `
            <tr>
              <td>${row.label}</td>
              ${ranked.map((consultant) => renderEditableCell(consultant, row)).join("")}
            </tr>
          `
        )
        .join("")}
    </tbody>
  `;
}

function renderEditableCell(consultant, row) {
  const value = consultant.edits[row.key] ?? row.value(consultant);
  return `
    <td
      class="editable-cell"
      contenteditable="true"
      data-consultant-id="${consultant.id}"
      data-row-key="${row.key}"
      spellcheck="false"
    >${value}</td>
  `;
}

function renderTags(consultant) {
  return `
    <div class="tag-list">
      ${criteria
        .map((criterion) => `<span class="tag">${criterion.label}: ${consultant.scores[criterion.key]}</span>`)
        .join("")}
    </div>
  `;
}

function renderLink(label, url) {
  if (!url) return `<span class="muted">Нужно добавить ссылку</span>`;
  return `<a class="source-link" contenteditable="false" href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderMediaLinks(consultant) {
  if (!consultant.mediaLinks?.length) return `<span class="muted">Нужно проверить публичные кейсы</span>`;
  return consultant.mediaLinks.map((source) => renderLink(source.label, source.url)).join(" · ");
}

function renderSources(consultant) {
  const sources = consultant.sources?.length ? consultant.sources : consultant.mediaLinks;
  return sources
    .map((source) => `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join(" · ");
}

function saveEditedCell(cell) {
  const consultant = consultants.find((item) => item.id === Number(cell.dataset.consultantId));
  if (!consultant) return;
  consultant.edits[cell.dataset.rowKey] = cell.innerHTML.trim();
}

function addConsultantFromForm(event) {
  event.preventDefault();
  const name = document.querySelector("#newName").value.trim() || "New counsel";
  const partnerName = document.querySelector("#newPartner").value.trim() || "Lead counsel TBD";
  const partnerUrl = document.querySelector("#newPartnerUrl").value.trim();
  const jurisdiction = document.querySelector("#newJurisdiction").value.trim() || "TBD";
  const rate = Number(document.querySelector("#newRate").value) || 500;
  const paymentText = document.querySelector("#newPayment").value;
  const echr = Number(document.querySelector("#newEchr").value) || 50;
  const rankings = Number(document.querySelector("#newRank").value) || 50;
  const value = Number(document.querySelector("#newValue").value) || 50;
  const payment = Number(document.querySelector("#newPay").value) || 50;

  consultants.push(
    attachRuntimeFields({
      name,
      fullName: "Custom consultant",
      jurisdiction,
      color: palette[consultants.length % palette.length],
      website: normalizeUrl(document.querySelector("#consultantUrl").value.trim()),
      partnerName,
      partnerUrl: normalizeUrl(partnerUrl),
      rate,
      paymentText,
      wireFriendly: payment >= 65,
      lowConflict: true,
      mediaLinks: [
        { label: "Chambers check", url: "https://chambers.com/search?query=" + encodeURIComponent(name) },
        { label: "Legal 500 check", url: "https://www.legal500.com/?s=" + encodeURIComponent(name) },
        { label: "Media check", url: "https://www.google.com/search?q=" + encodeURIComponent(`${name} successful case ECHR`) },
      ],
      sources: [{ label: "Manual check", url: "https://www.google.com/search?q=" + encodeURIComponent(`${name} Chambers Legal 500 ECHR`) }],
      cells: {
        experience: "Добавленный вручную профиль. Уточнить team lead, admissions, языки и предыдущие дела в ЕСПЧ.",
        rankings: "Проверить Chambers, Legal 500, Who's Who Legal и профильные bar directories.",
        credentials: "Запросить CV, shortlist matters, рекомендации клиентов и conflict confirmation.",
        successes: "Запросить релевантные sanctions / Article 6 / Article 8 / Article 1 Protocol 1 matters.",
        price: "Оценка по введенной ставке; нужен cap и staged budget.",
        payment: "Проверить invoice route, AML/KYC и валюту оплаты.",
        risks: "Пока unknown: нужен conflict check, санкционный скрининг и подтверждение capacity.",
      },
      scores: {
        echr,
        sanctions: Math.round((echr + rankings) / 2),
        rankings,
        sealed: 60,
        value,
        payment,
      },
    })
  );

  render();
}

function addConsultantFromUrl() {
  const rawUrl = document.querySelector("#consultantUrl").value.trim();
  const url = normalizeUrl(rawUrl);
  if (!url) {
    importStatus.textContent = "Вставьте ссылку на сайт фирмы или профиль консультанта.";
    return;
  }

  const lowerUrl = url.toLowerCase();
  const knownProfile = importProfiles.find((profile) => profile.match(lowerUrl));
  const data = knownProfile ? knownProfile.data : makeDraftProfile(url);

  consultants.push(
    attachRuntimeFields({
      ...data,
      color: palette[consultants.length % palette.length],
      cells: {
        experience: knownProfile
          ? "Автозаполнено из известного профиля прототипа. Перед наймом проверить свежие кейсы, capacity и conflict check."
          : "Черновик по ссылке. Нужен реальный review сайта, поиск по ЕСПЧ, Chambers, Legal 500 и СМИ.",
        rankings: knownProfile
          ? "Рейтинговые ориентиры добавлены из публичных профилей и требуют fresh check."
          : "Автоматически созданы ссылки на Chambers / Legal 500 check; статус рейтингов неизвестен.",
        credentials: "Запросить CV ведущего партнера, admissions, языки, рекомендации клиентов и список релевантных matters.",
        successes: knownProfile
          ? "В колонку добавлены публичные ссылки на практику/профиль/кейсы."
          : "Пока нет подтвержденных successful cases; проверить сайт, СМИ и базы решений.",
        price: "Ставка оценочная; нужен staged budget, cap и условия success / abort fee.",
        payment: "Проверить invoice route, AML/KYC, валюту и возможность оплаты без российского банка.",
        risks: "Автоимпорт не заменяет due diligence: нужен conflict check и санкционный скрининг.",
      },
    })
  );

  importStatus.textContent = knownProfile
    ? "ИИ-импорт добавил колонку по известному профилю. Данные все равно нужно проверить."
    : "ИИ-импорт создал черновую колонку по домену. Проверьте данные вручную.";
  render();
}

function makeDraftProfile(url) {
  const host = new URL(url).hostname.replace(/^www\./, "");
  const label = host.split(".")[0].replace(/[-_]/g, " ");
  const name = label.replace(/\b\w/g, (letter) => letter.toUpperCase());

  return {
    name,
    fullName: "Imported from URL",
    jurisdiction: "TBD",
    website: url,
    partnerName: "Lead counsel TBD",
    partnerUrl: url,
    rate: 550,
    paymentText: "Needs manual KYC check",
    wireFriendly: false,
    lowConflict: true,
    mediaLinks: [
      { label: "Website", url },
      { label: "Chambers check", url: "https://chambers.com/search?query=" + encodeURIComponent(name) },
      { label: "Legal 500 check", url: "https://www.legal500.com/?s=" + encodeURIComponent(name) },
      { label: "Media check", url: "https://www.google.com/search?q=" + encodeURIComponent(`${name} ECHR successful case`) },
    ],
    sources: [{ label: "Imported URL", url }],
    scores: { echr: 55, sanctions: 55, rankings: 45, sealed: 50, value: 65, payment: 45 },
  };
}

function exportPdf() {
  window.print();
}

function exportExcel() {
  const clone = table.cloneNode(true);
  clone.querySelectorAll("[contenteditable]").forEach((cell) => cell.removeAttribute("contenteditable"));
  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          table { border-collapse: collapse; font-family: Arial, sans-serif; }
          th, td { border: 1px solid #d9e2ec; padding: 8px; vertical-align: top; }
          th { background: #eff6ff; }
        </style>
      </head>
      <body>${clone.outerHTML}</body>
    </html>
  `;
  const blob = new Blob(["\ufeff", html], { type: "application/vnd.ms-excel;charset=utf-8" });
  downloadBlob(blob, `echr-counsel-selector-${new Date().toISOString().slice(0, 10)}.xls`);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function normalizeUrl(url) {
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const ranked = rankedConsultants();
  const leader = ranked[0];
  leaderName.textContent = leader.name;
  leaderScore.textContent = `${scoreConsultant(leader)} / 100`;
  renderScoreStrip(ranked);
  renderTable(ranked);
}

buildControls();
table.addEventListener("focusout", (event) => {
  if (event.target.matches(".editable-cell")) saveEditedCell(event.target);
});
table.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  event.preventDefault();
  window.open(link.href, "_blank", "noopener");
});
table.addEventListener("keydown", (event) => {
  if (event.target.matches(".editable-cell") && event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    event.target.blur();
  }
});
document.querySelector("#consultantForm").addEventListener("submit", addConsultantFromForm);
document.querySelector("#aiImportButton").addEventListener("click", addConsultantFromUrl);
document.querySelector("#addColumnButton").addEventListener("click", () => document.querySelector("#newName").focus());
document.querySelector("#exportPdfButton").addEventListener("click", exportPdf);
document.querySelector("#exportExcelButton").addEventListener("click", exportExcel);
render();
