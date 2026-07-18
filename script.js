/* Dashboard clínico: datos centralizados para evitar duplicación y facilitar futuras integraciones. */
const patients = [
  { name: 'Juan Pérez', age: 58, status: 'Crítico', pressure: '185/112', temperature: '39.2 °C', time: '07:42', priority: 1, reason: 'Dolor torácico agudo' },
  { name: 'María López', age: 42, status: 'Grave', pressure: '150/95', temperature: '38.4 °C', time: '08:05', priority: 2, reason: 'Dificultad respiratoria' },
  { name: 'Carlos Gómez', age: 67, status: 'Crítico', pressure: '90/58', temperature: '37.8 °C', time: '08:18', priority: 1, reason: 'Shock hipovolémico' },
  { name: 'Luis Andrade', age: 31, status: 'Moderado', pressure: '128/84', temperature: '37.1 °C', time: '08:27', priority: 3, reason: 'Fractura de antebrazo' },
  { name: 'Ana Castro', age: 29, status: 'Leve', pressure: '118/76', temperature: '36.8 °C', time: '08:40', priority: 4, reason: 'Herida superficial' },
  { name: 'Pedro Valencia', age: 73, status: 'Grave', pressure: '160/100', temperature: '38.9 °C', time: '08:52', priority: 2, reason: 'Crisis hipertensiva' },
  { name: 'Sofía Mejía', age: 19, status: 'Leve', pressure: '112/70', temperature: '36.7 °C', time: '09:04', priority: 4, reason: 'Reacción alérgica leve' },
  { name: 'Jorge Ruiz', age: 51, status: 'Moderado', pressure: '138/88', temperature: '37.6 °C', time: '09:11', priority: 3, reason: 'Dolor abdominal' },
  { name: 'Elena Ramírez', age: 46, status: 'Crítico', pressure: '82/50', temperature: '35.9 °C', time: '09:25', priority: 1, reason: 'Sepsis probable' },
  { name: 'Lucía Herrera', age: 36, status: 'Leve', pressure: '120/78', temperature: '36.9 °C', time: '09:38', priority: 4, reason: 'Migraña' },
  { name: 'Raúl Mendoza', age: 64, status: 'Grave', pressure: '145/92', temperature: '38.1 °C', time: '09:47', priority: 2, reason: 'Insuficiencia cardiaca' },
  { name: 'Diana Loor', age: 25, status: 'Moderado', pressure: '126/80', temperature: '37.4 °C', time: '10:02', priority: 3, reason: 'Cólico renal' }
];

const resources = [
  { label: 'Camas de observación', value: '6 / 10 ocupadas', percent: 60, color: '#1686c5' },
  { label: 'Camas críticos', value: '2 / 3 ocupadas', percent: 67, color: '#dc2626' },
  { label: 'Camas UCI', value: '6 / 8 ocupadas', percent: 75, color: '#7c3aed' },
  { label: 'Médicos disponibles', value: '6 / 8 en turno', percent: 75, color: '#059669' }
];

const priorityText = { 1: 'P1 · Inmediata', 2: 'P2 · Muy urgente', 3: 'P3 · Urgente', 4: 'P4 · Menor' };
const statusClass = status => `status-${status.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`;

/** Construye la tabla de pacientes según los filtros activos. */
function renderPatients() {
  const query = document.querySelector('#search-input').value.toLowerCase().trim();
  const filter = document.querySelector('#status-filter').value;
  const order = document.querySelector('#priority-sort').value;
  let visible = patients.filter(patient => patient.name.toLowerCase().includes(query) && (filter === 'all' || patient.status === filter));
  visible = [...visible].sort((a, b) => order === 'name' ? a.name.localeCompare(b.name) : a.priority - b.priority);
  document.querySelector('#patients-table').innerHTML = visible.map((p, index) => `
    <tr class="table-row">
      <td><span class="patient-name">${p.name}</span><span class="patient-id">EM-${String(index + 101).padStart(3, '0')}</span></td>
      <td>${p.age} años</td><td><span class="status-badge ${statusClass(p.status)}">${p.status}</span></td>
      <td class="font-semibold text-slate-600">${p.pressure}</td><td>${p.temperature}</td><td>${p.time}</td>
      <td><span class="priority-badge priority-${p.priority}">${priorityText[p.priority]}</span></td>
      <td class="text-right"><button class="detail-button" data-patient="${p.name}">Ver detalle</button></td>
    </tr>`).join('');
  document.querySelector('#table-description').textContent = `${visible.length} ${visible.length === 1 ? 'registro activo' : 'registros activos'}`;
}

/** Muestra solo eventos críticos en tarjetas de lectura rápida. */
function renderCriticalAlerts() {
  const critical = patients.filter(patient => patient.status === 'Crítico');
  document.querySelector('#critical-alerts').innerHTML = critical.map(p => `
    <article class="critical-card">
      <div class="flex items-start justify-between gap-2"><div><h3>${p.name}</h3><p class="critical-detail">${p.age} años · Prioridad 1</p></div><span class="status-badge status-critico">CRÍTICO</span></div>
      <div class="my-3 grid grid-cols-2 gap-2"><div class="vital"><span>Presión arterial</span><strong>${p.pressure} mmHg</strong></div><div class="vital"><span>Temperatura</span><strong>${p.temperature}</strong></div></div>
      <div class="flex items-end justify-between gap-2"><p class="critical-detail max-w-[65%]"><b class="text-slate-600">Motivo:</b> ${p.reason}</p><button class="detail-button" data-patient="${p.name}">Ver detalle</button></div>
    </article>`).join('');
}

function renderResources() {
  document.querySelector('#resources').innerHTML = resources.map(item => `<div class="resource-row"><div class="resource-label"><span>${item.label}</span><strong>${item.value}</strong></div><div class="progress-track"><div class="progress-bar" style="width:${item.percent}%; background:${item.color}"></div></div></div>`).join('');
  const severity = [{ name: 'Críticos', status: 'Crítico', color: '#dc2626' }, { name: 'Graves', status: 'Grave', color: '#ea580c' }, { name: 'Moderados', status: 'Moderado', color: '#ca8a04' }, { name: 'Leves', status: 'Leve', color: '#059669' }];
  document.querySelector('#severity-chart').innerHTML = severity.map(item => { const count = patients.filter(p => p.status === item.status).length; return `<div><div class="chart-label"><span>${item.name}</span><strong>${count} pacientes</strong></div><div class="chart-track"><div class="chart-bar" style="width:${(count / patients.length) * 100}%;background:${item.color}"></div></div></div>`; }).join('');
  const beds = [{ name: 'Observación', value: 60, color: '#1686c5' }, { name: 'Críticos', value: 67, color: '#dc2626' }, { name: 'UCI', value: 75, color: '#7c3aed' }];
  document.querySelector('#beds-chart').innerHTML = beds.map(item => `<div><div class="chart-label"><span>${item.name}</span><strong>${item.value}% ocupado</strong></div><div class="chart-track"><div class="chart-bar" style="width:${item.value}%;background:${item.color}"></div></div></div>`).join('');
}

function showDetail(name) {
  const p = patients.find(patient => patient.name === name); if (!p) return;
  document.querySelector('#modal-title').textContent = p.name;
  document.querySelector('#modal-content').innerHTML = [['Edad', `${p.age} años`], ['Estado', p.status], ['Prioridad', priorityText[p.priority]], ['Hora de ingreso', p.time], ['Presión arterial', `${p.pressure} mmHg`], ['Temperatura', p.temperature], ['Motivo de atención', p.reason]].map(([label, value]) => `<div class="modal-item"><span>${label}</span><strong>${value}</strong></div>`).join('');
  document.querySelector('#patient-modal').classList.remove('hidden'); document.querySelector('#close-modal').focus();
}
function updateClock() { const now = new Date(); document.querySelector('#current-time').textContent = now.toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit', second: '2-digit' }); document.querySelector('#current-date').textContent = now.toLocaleDateString('es-EC', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }); document.querySelector('#last-update').textContent = now.toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit' }); }
function updateSummary() { document.querySelector('#total-patients').textContent = patients.length; document.querySelector('#critical-count').textContent = patients.filter(p => p.status === 'Crítico').length; document.querySelector('#severe-count').textContent = patients.filter(p => p.status === 'Grave').length; document.querySelector('#mild-count').textContent = patients.filter(p => p.status === 'Leve').length; }

document.addEventListener('DOMContentLoaded', () => {
  updateClock(); updateSummary(); renderPatients(); renderCriticalAlerts(); renderResources(); setInterval(updateClock, 1000);
  ['#search-input', '#status-filter', '#priority-sort'].forEach(selector => document.querySelector(selector).addEventListener(selector === '#search-input' ? 'input' : 'change', renderPatients));
  document.addEventListener('click', event => { const button = event.target.closest('[data-patient]'); if (button) showDetail(button.dataset.patient); });
  document.querySelector('#close-modal').addEventListener('click', () => document.querySelector('#patient-modal').classList.add('hidden'));
  document.querySelector('#patient-modal').addEventListener('click', event => { if (event.target.id === 'patient-modal') event.currentTarget.classList.add('hidden'); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') document.querySelector('#patient-modal').classList.add('hidden'); });
  document.querySelector('#refresh-button').addEventListener('click', () => { updateClock(); const toast = document.querySelector('#toast'); toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2500); });
});
