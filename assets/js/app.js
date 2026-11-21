// ============ DATA ============
const sectors = [
  { id: 'health', name: 'Healthcare', icon: '🏥', desc: 'Ayushman Bharat, Digital Health Mission, Telemedicine', color: '#ef4444' },
  { id: 'education', name: 'Education', icon: '🎓', desc: 'NEP 2020, DIKSHA, SWAYAM, Skill India', color: '#3b82f6' },
  { id: 'agri', name: 'Agriculture', icon: '🌾', desc: 'PM-KISAN, Soil Health, e-NAM, Crop Insurance', color: '#22c55e' },
  { id: 'finance', name: 'Financial Inclusion', icon: '💰', desc: 'Jan Dhan, UPI, DBT, PM-SVANidhi, Mudra', color: '#f59e0b' },
  { id: 'transport', name: 'Transport', icon: '🚂', desc: 'FASTag, Vande Bharat, Freight Corridors, Drone Logistics', color: '#8b5cf6' },
  { id: 'rural', name: 'Rural Development', icon: '🏘️', desc: 'MGNREGA, PMAY-G, Jal Jeevan Mission, PMGSY', color: '#14b8a6' },
  { id: 'urban', name: 'Urban Affairs', icon: '🏙️', desc: 'Smart Cities, AMRUT, PMAY-U, Metro Rail', color: '#ec4899' },
  { id: 'energy', name: 'Energy', icon: '⚡', desc: 'Saubhagya, UJALA, Green Hydrogen, Solar Parks', color: '#f97316' },
  { id: 'water', name: 'Water Resources', icon: '💧', desc: 'Namami Gange, Atal Bhujal, Interlinking Rivers', color: '#06b6d4' },
  { id: 'defence', name: 'Defence', icon: '🛡️', desc: 'Agnipath, DRDO, Defence Corridors, iDEX', color: '#64748b' },
  { id: 'space', name: 'Space', icon: '🚀', desc: 'Gaganyaan, Chandrayaan, Aditya-L1, IN-SPACe', color: '#1e293b' },
  { id: 'digital', name: 'Digital India', icon: '💻', desc: 'Aadhaar, DigiLocker, UMANG, API Setu, ONDC', color: '#6366f1' },
];

const allServices = [
  { name: 'Aadhaar Enrollment & Update', dept: 'UIDAI', cat: 'identity', status: 'Online' },
  { name: 'PAN Card Application', dept: 'Income Tax', cat: 'identity', status: 'Online' },
  { name: 'Passport Seva', dept: 'MEA', cat: 'identity', status: 'Online' },
  { name: 'Voter ID Registration', dept: 'ECI', cat: 'identity', status: 'Online' },
  { name: 'Driving Licence', dept: 'MoRTH', cat: 'identity', status: 'Online' },
  { name: 'Ayushman Bharat Card', dept: 'NHA', cat: 'health', status: 'Online' },
  { name: 'COVID Vaccination Certificate', dept: 'MoHFW', cat: 'health', status: 'Online' },
  { name: 'Teleconsultation (eSanjeevani)', dept: 'MoHFW', cat: 'health', status: 'Online' },
  { name: 'PM-KISAN Beneficiary Status', dept: 'Agriculture', cat: 'agriculture', status: 'Online' },
  { name: 'Crop Insurance Claim', dept: 'Agriculture', cat: 'agriculture', status: 'Online' },
  { name: 'Soil Health Card', dept: 'Agriculture', cat: 'agriculture', status: 'Online' },
  { name: 'Jan Dhan Account Opening', dept: 'DFS', cat: 'finance', status: 'Online' },
  { name: 'UPI Transaction History', dept: 'NPCI', cat: 'finance', status: 'Online' },
  { name: 'DBT Payment Status', dept: 'Controller General of Accounts', cat: 'finance', status: 'Online' },
  { name: 'PM-SVANidhi Loan', dept: 'MoHUA', cat: 'finance', status: 'Online' },
  { name: 'Scholarship Application (NSP)', dept: 'Education', cat: 'education', status: 'Online' },
  { name: 'DIKSHA Course Access', dept: 'Education', cat: 'education', status: 'Online' },
  { name: 'Skill India Registration', dept: 'MSDE', cat: 'education', status: 'Online' },
  { name: 'FASTag Recharge', dept: 'NHAI', cat: 'transport', status: 'Online' },
  { name: 'Train Ticket Booking (IRCTC)', dept: 'Railways', cat: 'transport', status: 'Online' },
  { name: 'Vande Bharat Schedule', dept: 'Railways', cat: 'transport', status: 'Online' },
  { name: 'MGNREGA Job Card', dept: 'Rural Development', cat: 'benefits', status: 'Online' },
  { name: 'PMAY-G Application', dept: 'Rural Development', cat: 'benefits', status: 'Online' },
  { name: 'Ration Card Services', dept: 'Food & PDS', cat: 'benefits', status: 'Online' },
  { name: 'LPG Subsidy (PAHAL)', dept: 'Petroleum', cat: 'benefits', status: 'Online' },
];

const modules = [
  { id: 'overview', name: 'National Overview', icon: '📊' },
  { id: 'health', name: 'Healthcare', icon: '🏥' },
  { id: 'education', name: 'Education', icon: '🎓' },
  { id: 'agri', name: 'Agriculture', icon: '🌾' },
  { id: 'finance', name: 'Financial Inclusion', icon: '💰' },
  { id: 'transport', name: 'Transport', icon: '🚂' },
];

// Dynamic metrics generator
function randomMetric(base, variance = 0.15) {
  const val = base * (1 + (Math.random() - 0.5) * 2 * variance);
  return Math.round(val);
}

function formatNumber(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return n.toLocaleString();
}

function generateMetrics() {
  return {
    overview: [
      { label: 'Active Citizens', value: formatNumber(randomMetric(950_000_000)), note: '+2.3% vs last month' },
      { label: 'Services Delivered', value: formatNumber(randomMetric(420_000_000)), note: '98.7% SLA met' },
      { label: 'Grievances Resolved', value: formatNumber(randomMetric(18_500_000)), note: 'Avg 4.2 days' },
      { label: 'Digital Transactions', value: formatNumber(randomMetric(14_200_000_000)), note: '₹234T volume' },
    ],
    health: [
      { label: 'AB-PMJAY Beneficiaries', value: formatNumber(randomMetric(580_000_000)), note: '32M hospitalizations' },
      { label: 'ABHA IDs Created', value: formatNumber(randomMetric(520_000_000)), note: '1.2M linked records' },
      { label: 'eSanjeevani Consultations', value: formatNumber(randomMetric(280_000_000)), note: '94% satisfaction' },
      { label: 'Health Facilities Onboarded', value: formatNumber(randomMetric(210_000)), note: '87% public sector' },
    ],
    education: [
      { label: 'Students Enrolled (K-12)', value: formatNumber(randomMetric(265_000_000)), note: 'GER 74.6%' },
      { label: 'DIKSHA Active Users', value: formatNumber(randomMetric(180_000_000)), note: '4.2B learning sessions' },
      { label: 'Skill Certifications', value: formatNumber(randomMetric(42_000_000)), note: '72% placement rate' },
      { label: 'SWAYAM Course Completions', value: formatNumber(randomMetric(8_500_000)), note: '5,200+ courses' },
    ],
    agri: [
      { label: 'PM-KISAN Beneficiaries', value: formatNumber(randomMetric(110_000_000)), note: '₹2.8L Cr disbursed' },
      { label: 'e-NAM Mandis Integrated', value: formatNumber(randomMetric(1_389)), note: '1.7 Cr farmers' },
      { label: 'Soil Health Cards Issued', value: formatNumber(randomMetric(230_000_000)), note: 'Cycle 2: 89% done' },
      { label: 'Crop Insurance Claims Paid', value: formatNumber(randomMetric(1_200_000)), note: '₹1.1L Cr settled' },
    ],
    finance: [
      { label: 'Jan Dhan Accounts', value: formatNumber(randomMetric(510_000_000)), note: '56% women holders' },
      { label: 'UPI Monthly Volume', value: formatNumber(randomMetric(13_500_000_000)), note: '₹19.6L Cr value' },
      { label: 'DBT Transfers (FY)', value: formatNumber(randomMetric(7_800)), note: '₹34L Cr transferred' },
      { label: 'PM-SVANidhi Loans', value: formatNumber(randomMetric(52_000_000)), note: '89% to street vendors' },
    ],
    transport: [
      { label: 'FASTag Penetration', value: formatNumber(randomMetric(97)) + '%', note: '6.8 Cr tags issued' },
      { label: 'Vande Bharat Trains', value: formatNumber(randomMetric(82)), note: 'Connecting 28 states' },
      { label: 'Freight Corridor Progress', value: formatNumber(randomMetric(78)) + '%', note: 'DFCCIL eastern/western' },
      { label: 'Drone Delivery Pilots', value: formatNumber(randomMetric(14)), note: 'Medical & agri focus' },
    ],
  };
}

const aiInsights = [
  '🤖 AI Insight: Healthcare utilization spikes 23% during festival seasons — predictive scaling recommended for AB-PMJAY claims processing.',
  '🤖 AI Insight: UPI failure rate dropped to 0.34% after NPCI\'s new routing algorithm — saving ₹2,800 Cr/month in retries.',
  '🤖 AI Insight: PM-KISAN beneficiary verification via satellite imagery reduced ghost beneficiaries by 12% in pilot districts.',
  '🤖 AI Insight: School dropout risk model identifies 4.2L at-risk students with 87% accuracy — enabling targeted interventions.',
  '🤖 AI Insight: FASTag lane congestion prediction reduces avg wait time from 4.2min to 1.8min at top 50 toll plazas.',
  '🤖 AI Insight: Multilingual chatbot handles 68% of citizen queries without human escalation — 22 languages supported.',
];

// ============ STATE ============
let currentView = 'home';
let currentModule = 'overview';
let currentLanguage = 'en';
let isOnline = true;
let metricsData = generateMetrics();

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  renderSectorsGrid('sectorsGrid', sectors.slice(0, 6));
  renderAllSectorsGrid();
  renderModulePills();
  renderDashboardPanel('overview');
  renderServicesTable();
  startAutoRefresh();
  updateLastUpdated();
});

// ============ VIEW SWITCHING ============
function switchView(viewId) {
  document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });

  const viewEl = document.getElementById('view-' + viewId);
  const tabEl = document.querySelector('.nav-tab[data-view="' + viewId + '"]');
  if (viewEl) viewEl.classList.add('active');
  if (tabEl) {
    tabEl.classList.add('active');
    tabEl.setAttribute('aria-selected', 'true');
  }
  currentView = viewId;

  if (viewId === 'dashboard') {
    renderDashboardPanel(currentModule);
  }
  
  announceToScreenReader('Navigated to ' + getViewName(viewId));
}

// ============ LANGUAGE ============
const translations = {
  en: { home: 'Home', sectors: 'Sectors', dashboard: 'Dashboard', services: 'Services', about: 'About' },
  hi: { home: 'होम', sectors: 'सेक्टर', dashboard: 'डैशबोर्ड', services: 'सेवाएं', about: 'हमारे बारे में' },
  ta: { home: 'முகப்பு', sectors: 'துறைங்கள்', dashboard: 'டாஷ்போர்டு', services: 'சேவைகள்', about: 'எங்களைப் பற்றி' },
  te: { home: 'హోమ్', sectors: 'ప్రముఖాలు', dashboard: 'డాష్‌బోర్డ్', services: 'సేవలు', about: 'మా గురించి' },
};

function setLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.lang-btn[data-lang="' + lang + '"]').classList.add('active');
  const t = translations[lang];
  document.querySelectorAll('.nav-tab').forEach((tab, i) => {
    const views = ['home', 'sectors', 'dashboard', 'services', 'about'];
    tab.textContent = t[views[i]];
  });
  if (currentView === 'dashboard') renderDashboardPanel(currentModule);
  if (currentView === 'services') renderServicesTable();
}

// ============ STATUS TOGGLE ============
function toggleStatus() {
  isOnline = !isOnline;
  const pill = document.getElementById('statusPill');
  const text = document.getElementById('statusText');
  const dot = pill.querySelector('.status-dot');
  if (isOnline) {
    pill.classList.remove('offline');
    text.textContent = 'Online';
    dot.style.background = 'var(--green)';
    pill.setAttribute('aria-pressed', 'false');
  } else {
    pill.classList.add('offline');
    text.textContent = 'Offline';
    dot.style.background = '#f59e0b';
    pill.setAttribute('aria-pressed', 'true');
  }
}

// ============ VOICE MODAL ============
function openVoiceModal() {
  document.getElementById('voiceModal').classList.add('active');
  document.getElementById('voiceTranscript').textContent = '';
  const wave = document.getElementById('voiceWave');
  wave.style.animationPlayState = 'running';
}

function closeVoiceModal() {
  document.getElementById('voiceModal').classList.remove('active');
}

function simulateVoiceResult() {
  const queries = [
    'Show me PM-KISAN status for Maharashtra',
    'How many Ayushman cards issued this month?',
    'UPI transaction volume for January',
    'School dropout rate in aspirational districts',
    'FASTag collection at Mumbai toll plaza',
  ];
  const query = queries[Math.floor(Math.random() * queries.length)];
  document.getElementById('voiceTranscript').textContent = '"' + query + '"';
  setTimeout(() => {
    document.getElementById('voiceTranscript').innerHTML = '"' + query + '"<br><span style="color: var(--green);">→ Opening relevant dashboard...</span>';
  }, 1000);
  setTimeout(closeVoiceModal, 2500);
}

// ============ RENDER FUNCTIONS ============
function renderSectorsGrid(containerId, sectorList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = sectorList.map(s => `
    <div class="sector-card" style="border-left: 4px solid ${s.color};" onclick="switchView('dashboard'); setTimeout(() => switchModule('${s.id}'), 100)">
      <div class="sector-header">
        <span class="sector-icon">${s.icon}</span>
        <h3>${s.name}</h3>
      </div>
      <p>${s.desc}</p>
      <button class="btn-outline">Explore →</button>
    </div>
  `).join('');
}

function renderAllSectorsGrid() {
  const container = document.getElementById('allSectorsGrid');
  if (!container) return;
  container.innerHTML = sectors.map(s => `
    <div class="sector-card" style="border-left: 4px solid ${s.color};" onclick="switchView('dashboard'); setTimeout(() => switchModule('${s.id}'), 100)">
      <div class="sector-header">
        <span class="sector-icon">${s.icon}</span>
        <h3>${s.name}</h3>
      </div>
      <p>${s.desc}</p>
      <button class="btn-outline">View Dashboard →</button>
    </div>
  `).join('');
}

function renderModulePills() {
  const container = document.getElementById('modulePills');
  if (!container) return;
  container.innerHTML = modules.map(m => `
    <button class="module-pill ${m.id === currentModule ? 'active' : ''}" role="tab" data-module="${m.id}" onclick="switchModule('${m.id}')">
      ${m.icon} ${m.name}
    </button>
  `).join('');
}

function switchModule(moduleId) {
  currentModule = moduleId;
  document.querySelectorAll('.module-pill').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.module-panel').forEach(p => p.classList.remove('active'));
  const pill = document.querySelector('.module-pill[data-module="' + moduleId + '"]');
  const panel = document.getElementById('panel-' + moduleId);
  if (pill) pill.classList.add('active');
  if (panel) panel.classList.add('active');
  renderDashboardPanel(moduleId);
}

function renderDashboardPanel(moduleId) {
  const metrics = metricsData[moduleId] || metricsData.overview;
  const container = document.getElementById(moduleId === 'overview' ? 'overviewMetrics' : moduleId + 'Metrics');
  if (!container) return;
  container.innerHTML = metrics.map(m => `
    <div class="metric-box">
      <div class="metric-label">${m.label}</div>
      <div class="metric-value">${m.value}</div>
      <div class="metric-note">${m.note}</div>
    </div>
  `).join('');

  if (moduleId === 'overview') {
    const insightEl = document.getElementById('aiInsight');
    if (insightEl) {
      const insight = aiInsights[Math.floor(Math.random() * aiInsights.length)];
      insightEl.innerHTML = insight;
    }
  }
}

function renderServicesTable() {
  const search = document.getElementById('serviceSearch')?.value.toLowerCase() || '';
  const category = document.getElementById('serviceCategory')?.value || '';
  const tbody = document.getElementById('servicesBody');
  if (!tbody) return;

  const filtered = allServices.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search) || s.dept.toLowerCase().includes(search);
    const matchesCat = !category || s.cat === category;
    return matchesSearch && matchesCat;
  });

  tbody.innerHTML = filtered.map(s => `
    <tr>
      <td><strong>${s.name}</strong></td>
      <td>${s.dept}</td>
      <td><span class="badge badge-info">${s.cat.replace('-', ' ')}</span></td>
      <td><span class="badge badge-success">${s.status}</span></td>
      <td><button class="btn-outline" style="padding: 5px 10px; font-size: 0.8rem;">Access</button></td>
    </tr>
  `).join('');
}

// ============ EVENT LISTENERS ============
document.getElementById('serviceSearch')?.addEventListener('input', renderServicesTable);
document.getElementById('serviceCategory')?.addEventListener('change', renderServicesTable);

// ============ AUTO REFRESH ============
function startAutoRefresh() {
  setInterval(() => {
    if (isOnline && currentView === 'dashboard') {
      metricsData = generateMetrics();
      renderDashboardPanel(currentModule);
      updateLastUpdated();
    }
  }, 30000);
}

function refreshDashboard() {
  metricsData = generateMetrics();
  renderDashboardPanel(currentModule);
  updateLastUpdated();
}

function updateLastUpdated() {
  const el = document.getElementById('lastUpdated');
  if (el) {
    const now = new Date();
    el.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
}

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', (e) => {
  if (e.altKey && e.key >= '1' && e.key <= '5') {
    e.preventDefault();
    const views = ['home', 'sectors', 'dashboard', 'services', 'about'];
    switchView(views[parseInt(e.key) - 1]);
  }
  if (e.key === 'Escape') {
    closeVoiceModal();
  }
  if (e.key === ' ' && e.target === document.body) {
    e.preventDefault();
    openVoiceModal();
  }
});

// ============ ACCESSIBILITY ============
document.getElementById('voiceModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeVoiceModal();
});

function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}

function getViewName(viewId) {
  const names = { home: 'Home', sectors: 'Sectors', dashboard: 'Dashboard', services: 'Services', about: 'About' };
  return names[viewId] || viewId;
}

// Make functions globally available for inline onclick handlers
window.switchView = switchView;
window.setLanguage = setLanguage;
window.toggleStatus = toggleStatus;
window.openVoiceModal = openVoiceModal;
window.closeVoiceModal = closeVoiceModal;
window.simulateVoiceResult = simulateVoiceResult;
window.switchModule = switchModule;
window.refreshDashboard = refreshDashboard;