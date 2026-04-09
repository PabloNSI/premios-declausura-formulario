# Premios DeClausura 2026 - Formulario de Registro

Formulario interactivo para la confirmación de asistencia a la Gala de Premios DeClausura 2026.

## 🚀 Características

- ✅ Formulario responsivo con validaciones en tiempo real
- ✅ Integración automática con Google Sheets
- ✅ Tema claro/oscuro
- ✅ Animaciones suaves
- ✅ Función serverless con Netlify
- ✅ Variables de entorno seguras

## 📦 Stack Tecnológico

- **Frontend:** HTML5, CSS3, JavaScript vanilla
- **Backend:** Netlify Functions (Node.js)
- **Base de datos:** Google Sheets API
- **Hosting:** Netlify

## 🔗 URLs

- **Formulario en vivo:** https://formulario-premios-declausura-2026.netlify.app
- **Google Sheet:** https://docs.google.com/spreadsheets/d/1mzSXgFQC1dpZEIVFUPVsmN9vaPzP6z9-h5wK2K1X58s/
- **Repositorio:** https://github.com/PabloNSI/premios-declausura-formulario

## 📋 Estructura del Proyecto

```
.
├── public/
│   ├── index.html              # Formulario principal
│   └── assets/
│       └── event-image.jpeg    # Imagen del evento
├── netlify/
│   └── functions/
│       └── subscribe.js        # Función serverless
├── netlify.toml                # Configuración Netlify
├── package.json                # Dependencias
├── .gitignore                  # Archivos ignorados
└── README.md                   # Este archivo
```

## 🛠 Desarrollo Local

### Prerrequisitos

- Node.js 18+
- Netlify CLI (`npm install -g netlify-cli`)
- Git

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/PabloNSI/premios-declausura-formulario.git
cd premios-declausura-formulario

# Instalar dependencias
npm install

# Crear archivo .env.local con variables de entorno:
# GOOGLE_SHEET_ID=tu_sheet_id
# GOOGLE_PRIVATE_KEY_ID=tu_key_id
# GOOGLE_CLIENT_EMAIL=tu_email
# GOOGLE_CLIENT_ID=tu_client_id
# GOOGLE_PRIVATE_KEY=tu_private_key (en base64)
```

### Ejecutar localmente

```bash
netlify dev
```

Abre http://localhost:8888 en tu navegador.

## 🔐 Seguridad

- Las credenciales **nunca** se commitean al repositorio
- Las variables de entorno se almacenan de forma segura en Netlify UI
- El `.env.local` está en `.gitignore` para desarrollo local
- La private key se codifica en Base64 para mayor seguridad

## 📊 Cómo funciona

1. El usuario rellena el formulario
2. Hace click en "Confirmar inscripción"
3. Los datos se envían a `/.netlify/functions/subscribe`
4. La función escribe automáticamente en Google Sheets
5. El usuario ve la pantalla de éxito

## 📝 Campos del Formulario

- **Nombre:** Texto obligatorio
- **Apellidos:** Texto obligatorio
- **Teléfono:** 9 dígitos (6-9 al inicio)
- **Email:** Formato válido de email
- **Empresa:** Texto obligatorio
- **Privacidad:** Checkbox obligatorio

## 🚀 Deploy

El proyecto está configurado para CI/CD automático:

1. Haz push a `main`
2. Netlify detecta cambios automáticamente
3. Ejecuta el build
4. Publica los cambios

No necesitas hacer nada más.

## 📧 Contacto

Para reportar bugs o sugerencias, abre un issue en GitHub.

---

**Versión:** 1.0.0  
**Última actualización:** Abril 2026
