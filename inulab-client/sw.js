// ===== Inulaboratorios — Service Worker =====
// REGLA: cada vez que cambien archivos del shell (index.html, css, js),
// subir el número de versión de abajo. Ej: inulab-v1 → inulab-v2.
const CACHE = 'inulab-v1';

const CORE = [
  './',
  './index.html',
  './js/app.js',
  './js/keyboard-fix.js',
  './css/styles.css'
];

// Instalar: pre-cachear el shell
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
});

// Activar: borrar caches viejos y tomar control
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Mensaje desde la página → activar la versión nueva cuando el usuario lo decide
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// Fetch: network-first para mismo origen. Cross-origin (CDN, backend) pasa de largo.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
  );
});
