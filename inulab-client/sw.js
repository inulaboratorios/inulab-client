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

// ===== Web Push =====
// Se dispara cuando el backend manda una notificación (moto llegó / resultados
// listos), aunque la app esté cerrada o el celular con la pantalla apagada.
self.addEventListener('push', e => {
    let data = {};
    try { data = e.data.json(); } catch (err) { data = { title: 'INULABORATORIOS', body: e.data ? e.data.text() : '' }; }

    const title = data.title || 'INULABORATORIOS';
    const options = {
        body: data.body || '',
        icon: './icons/icon-192.png',   // ajusta la ruta si tus iconos están en otra carpeta
        badge: './icons/icon-192.png',
        data: { url: data.url || './' }
    };

    e.waitUntil(self.registration.showNotification(title, options));
});

// Al tocar la notificación: si ya hay una pestaña abierta, la enfoca;
// si no, abre una nueva en la URL indicada (o en la raíz por defecto).
self.addEventListener('notificationclick', e => {
    e.notification.close();
    const targetUrl = (e.notification.data && e.notification.data.url) || './';

    e.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientsArr => {
            const existing = clientsArr.find(c => c.url.includes(self.location.origin));
            if (existing) return existing.focus();
            return self.clients.openWindow(targetUrl);
        })
    );
});