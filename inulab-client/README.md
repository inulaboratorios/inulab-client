# INULABORATORIOS — Portal Cliente (Frontend)

> Portal web para dueños de mascotas y médicos veterinarios de INULABORATORIOS S.A.C.

---

## Estructura del proyecto

```
inulab-client/
├── index.html              # Punto de entrada
├── css/
│   └── styles.css          # Estilos personalizados de la app
├── js/
│   ├── app.js              # Componente React principal (toda la lógica y UI)
│   └── keyboard-fix.js     # Estabilidad de teclado en iOS/Android
├── assets/
│   └── logo_inulaboratorios.jpg
└── README.md
```

---

## Dependencias externas (CDN)

Actualmente cargadas via CDN. En producción se recomienda instalar via npm y compilar con Vite o Webpack.

| Librería | Versión | Uso |
|---|---|---|
| React | 18 | UI |
| ReactDOM | 18 | Renderizado |
| Babel Standalone | latest | Transpilación JSX (solo para dev/prototipo) |
| Tailwind CSS | CDN | Estilos utilitarios |
| Font Awesome | 6.4.0 | Iconografía |
| Leaflet | 1.9.4 | Mapas (selección de dirección con GPS) |

> **Nota para producción:** Babel Standalone no debe usarse en producción. Migrar a un pipeline de build (Vite + React) para compilar JSX en build time.

---

## Tipos de usuario

| Tipo | Descripción |
|---|---|
| `dueño` | Dueño de mascota — puede pedir exámenes, ver resultados, descargar comprobantes |
| `medico` | Médico veterinario / clínica — vista de pacientes, pedidos, resultados y facturación |
| `admin` | Administrador del laboratorio |
| `motorizado` | Personal de recojo de muestras |

---

## Credenciales demo (solo para pruebas — eliminar en producción)

| Username | Password | Tipo |
|---|---|---|
| `carlos.rodriguez` | `cliente123` | dueño |
| `vetplanet` | `vp2025` | medico |
| `admin` | `admin123` | admin |
| `motorizado` | `moto123` | motorizado |

---

## Conexión al backend

### 1. Configurar la URL base

En `js/app.js`, línea ~3 (buscar `API_BASE`):

```js
const API_BASE = ''; // ← Cambiar a: 'https://api.inulaboratorios.com'
```

### 2. Autenticación JWT

La app ya implementa el flujo completo:

- Login → guarda `inulab_token` en `localStorage`
- Todas las requests incluyen `Authorization: Bearer <token>` automáticamente
- Logout → elimina el token

### 3. Endpoints requeridos por el frontend

```
POST   /api/auth/login              Body: { username, password } → { token, user }
GET    /api/auth/me                 → { user }
PUT    /api/users/profile           Body: { name, phone, email, address, district } → { user }
POST   /api/pets                    Body: { name, animalType, breed, ageValue, ageUnit, sex } → { pet }
GET    /api/pets                    → { pets }
POST   /api/addresses               Body: { name, address, district, reference } → { address }
GET    /api/addresses               → { addresses }
POST   /api/orders                  Body: { ... } → { order }  (ver estructura abajo)
GET    /api/orders                  → { orders }
PUT    /api/exams/:examId/seen      → { ok }
GET    /api/config                  → { nightMode }
```

#### Estructura de un Order (pedido)

```json
{
  "id": "ORD001",
  "userId": "USR001",
  "date": "2026-03-09T12:00:00Z",
  "createdAt": "2026-03-09T12:00:00Z",
  "status": "pending",
  "documentType": "boleta",
  "items": [
    {
      "exam": { "id": "EXAM01", "name": "Perfil Básico Renal" },
      "pet": { "id": "PET001", "name": "Max" }
    }
  ],
  "address": {
    "address": "Av. Javier Prado 1234",
    "district": "San Isidro",
    "reference": "Frente al parque"
  },
  "invoicePdf": "https://storage.../boleta.pdf",
  "tomaMustraDomicilio": true
}
```

#### Estados posibles de un pedido (`status`)

```
pending → confirmed → moto_en_camino → moto_arrived
→ sample_received → arrived_at_lab → processing
→ results_uploaded → completed
```

### 4. PDFs (resultados y comprobantes)

El frontend espera:

- `exam.pdfData` — URL o base64 del PDF del resultado
- `order.invoicePdf` — URL o base64 del comprobante (boleta/factura)

Si el backend usa URLs directas (recomendado), los iframes y botones de descarga funcionan sin cambios. Si se cambia el campo de `pdfData` a `pdfUrl`, hacer find & replace en `app.js`.

---

## Modo Demo (localStorage)

Mientras no hay backend conectado, la app usa un objeto `initialDatabase` en `app.js` como base de datos en memoria persistida en `localStorage` con la clave `inulab_db_v25`.

**Para activar el backend real:**

1. Cambiar `API_BASE` con la URL de la API
2. Reemplazar las funciones `fetchDatabase` / `setDatabase` que leen/escriben en `localStorage` por llamadas a los endpoints correspondientes (`GET /api/orders`, `GET /api/pets`, etc.)
3. Eliminar el bloque `initialDatabase` y la sección marcada como `// VERSIÓN DEMO`

El objeto `api` en `app.js` ya tiene todos los métodos listos para conectar — solo falta usarlos.

---

## Logo

El logo se referencia en el código como:

```html
<img src="logo_inulaboratorios.jpg" ... />
```

Está en `assets/logo_inulaboratorios.jpg`. Actualizar la ruta si se sirve desde un CDN o subcarpeta.

---

## Notas de despliegue

- La app es un **SPA (Single Page Application)** — configurar el servidor para que todas las rutas apunten a `index.html`
- Compatible con: Chrome, Safari (iOS), Android Chrome
- Responsive: diseño mobile-first con layout desktop a partir de `lg` (1024px)
- El sidebar de escritorio aparece en `lg:` en adelante

---

## Contacto de soporte del laboratorio

- Email: lab@inulaboratorios.com  
- WhatsApp: +51 954 904 248
