# Clínica Salud+ — Landing Page Template

Template de sitio web completo tipo landing page para una clínica médica, construido con HTML semántico, Bootstrap 5 y JavaScript nativo. Listo para personalizar y desplegar.

## Stack tecnologico

- **HTML5** — Marcado semántico
- **Bootstrap 5.3** — Framework CSS (via CDN)
- **Bootstrap Icons 1.11** — Iconografia (via CDN)
- **CSS3** — Estilos personalizados en `assets/css/styles.css`
- **JavaScript nativo (vanilla)** — Logica e interactividad en `assets/js/main.js`
- **Google Fonts (Inter)** — Tipografia principal

No requiere build, ni npm, ni dependencias locales. Solo abrir `index.html` en un navegador.

## Estructura del proyecto

```
clinica-01/
├── index.html              Pagina de inicio (hero, servicios, stats, testimonios)
├── about.html              Sobre nosotros (equipo, mision, vision, valores)
├── services.html           Catalogo de servicios medicos
├── pricing.html            Planes, tabla comparativa, precios individuales, FAQ
├── contact.html            Formulario de contacto + mapa + horarios
├── privacy.html            Politica de privacidad
├── terms.html              Terminos y condiciones
├── README.md               Este archivo
└── assets/
    ├── css/
    │   └── styles.css      Estilos personalizados (paleta, navbar, animaciones)
    └── js/
        └── main.js         Navbar scroll, scroll reveal, contadores, validacion form
```

## Como usar

1. Clona o descarga los archivos en una carpeta local.
2. Abre `index.html` directamente en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).
3. Para un servidor local opcional (recomendado para evitar restricciones del navegador):
   ```bash
   # Con Python 3
   python -m http.server 8000

   # Con Node.js (http-server)
   npx http-server

   # Con PHP
   php -S localhost:8000
   ```
4. Visita `http://localhost:8000` en tu navegador.

## Paginas incluidas

| Pagina              | Ruta              | Descripcion                                                |
|---------------------|-------------------|------------------------------------------------------------|
| Inicio              | `index.html`      | Hero, servicios destacados, stats animados, testimonios    |
| Sobre nosotros      | `about.html`      | Historia, equipo medico, mision/vision/valores             |
| Servicios           | `services.html`   | 9 especialidades + proceso de atencion en 4 pasos          |
| Precios             | `pricing.html`    | 3 planes, tabla comparativa, consultas individuales, FAQ   |
| Contacto            | `contact.html`    | Formulario, mapa Google, horarios, datos de contacto       |
| Politica de privacidad | `privacy.html` | Marco legal de proteccion de datos                          |
| Terminos y condiciones | `terms.html`   | Marco legal del servicio                                   |

## Caracteristicas

### Diseno
- Paleta medica profesional: azul corporativo (#0d6efd) + verde salud (#20c997) + acentos
- Diseno 100% responsive (mobile, tablet, desktop)
- **Hero con imagen real de fondo** + gradiente overlay + elementos flotantes animados (cards "25,000+ pacientes" y "4.9/5 rating")
- **Imagenes reales de Unsplash** en todas las paginas (doctores, instalaciones, servicios)
- **Navbar transparente sobre hero** que cambia a solido con blur al hacer scroll
- **Brand strip** de aseguradoras partners
- Iconografia consistente (Bootstrap Icons) complementada con fotografia
- Tarjetas con efecto hover, zoom en imagenes y elevacion

### Navegacion
- Navbar sticky con efecto blur al hacer scroll
- Indicador de pagina activa automatico (via JS)
- Menu hamburguesa en mobile con icono adaptativo (blanco en hero, azul al scrollear)
- Cierre automatico del menu al hacer click en un link
- Breadcrumbs en paginas internas

### Animaciones (JS nativo)
- **Scroll reveal**: los elementos aparecen con fade-up al entrar en viewport (IntersectionObserver)
- **Contadores animados**: estadisticas del home cuentan desde 0 hasta el valor final
- **Navbar dinamico**: cambia de transparente a solido al hacer scroll
- **Cards flotantes en hero**: animacion floatY continua
- **Imagenes con zoom al hover**: efecto sutil en cards de servicios y galerias
- **Back to top**: boton flotante que aparece al hacer scroll
- **Hero animado**: circulos flotantes e iconos con pulse

### Paginas con contenido visual rico
- **Index**: Hero con foto de doctora + cards de servicios + grid de instalaciones + testimonios
- **Sobre nosotros**: Grid de instalaciones (5 fotos) + equipo medico (4 doctores con foto) + cita del director con foto
- **Servicios**: 9 cards con imagen real cada una + proceso en 4 pasos con linea conectora
- **Precios**: 3 planes con badges personalizados + tabla comparativa con iconos + lista de consultas individuales + FAQ
- **Contacto**: Formulario + info de contacto + horarios + redes + mapa Google Maps
- **Privacidad y Terminos**: Texto legal + imagen de fondo en hero

## Datos mock incluidos

Para que el template se vea "listo para produccion", incluye los siguientes datos ficticios faciles de personalizar:

- **Clinica:** Clinica Salud+
- **Direccion:** Av. Providencia 1234, Providencia, Santiago, Chile
- **Telefono:** +56 2 2345 6789
- **Email:** contacto@clinicasalud.example
- **Horarios:** Lun-Vie 8:00-20:00 | Sab 9:00-14:00 | Dom cerrado | Urgencias 24/7
- **4 doctores:** Dra. Ana Garcia (Cardiologia), Dr. Luis Perez (Pediatria), Dra. Maria Lopez (Dermatologia), Dr. Carlos Ruiz (Traumatologia)
- **9 servicios:** Cardiologia, Pediatria, Dermatologia, Ginecologia, Traumatologia, Psicologia, Nutricion, Laboratorio, Urgencias 24/7
- **3 planes:** Basico ($29.990 CLP/mes), Familiar ($59.990 CLP/mes, mas popular), Premium ($99.990 CLP/mes)
- **Estadisticas:** 15+ anos, 25,000+ pacientes, 40+ doctores, 20+ especialidades

Busca y reemplaza `Clinica Salud+`, `contacto@clinicasalud.example`, los telefonos y direcciones segun tu negocio.

## Personalizacion rapida

### Cambiar colores
Edita las variables CSS en `assets/css/styles.css` (linea 7):
```css
:root {
    --primary: #0d6efd;       /* Azul principal */
    --primary-dark: #0a58ca;  /* Azul oscuro (hover) */
    --secondary: #20c997;     /* Verde salud */
    --accent: #ffc107;        /* Amarillo CTA */
}
```

### Cambiar el mapa
En `contact.html`, reemplaza el `src` del iframe con tu ubicacion de Google Maps:
1. Ve a Google Maps -> tu ubicacion -> Compartir -> Incorporar un mapa
2. Copia el `src` del iframe y reemplaza el actual.

### Cambiar el ano del copyright
Se actualiza automaticamente con JavaScript leyendo `new Date().getFullYear()` en `main.js`. No requiere cambios manuales.

### Cambiar la fuente
Edita el `<link>` de Google Fonts en el `<head>` de cada pagina y la propiedad `font-family` en `body` dentro de `styles.css`.

## Imagenes

Todas las imagenes del template se cargan desde Unsplash (gratuito, sin atribucion requerida para uso comercial). Si quieres reemplazar las imagenes por unas propias:

1. Sube tus imagenes a una carpeta (ej. `assets/images/`)
2. Reemplaza los `src` de los `<img>` apuntando a las rutas locales
3. Para mejor rendimiento, optimiza las imagenes (formato WebP, tamaño max 200kb para fotos de cards)

URLs Unsplash utilizadas en el template (referencia para reemplazo):
- Hero principal: `1631815589968-fdb09a223b1e` (clinica moderna)
- Doctora atendiendo paciente: `1612349317150-e413f6a5b16d`
- Recepcion: `1538108149393-fbbd81895907`, `1519494026892-80bbd2d6fd0d`
- Equipo medico: `1582750433449-648ed127bb54`, `1551601651-2a8555f1a136`
- Doctores individuales: `1559839734-2b71ea197ec2`, `1612531386530-97286d97c2d2`, `1594824476967-48c8b964273f`, `1622253692010-333f2da6031d`
- Tecnologia: `1576091160550-2173dba999ef`, `1629909613654-28e377c37b09`
- Consultorio: `1559757175-7cb057fba93c`
- Servicios: `1631815588090-d4bfec5b1ccb`, `1559757148-5c350d0d3c56`, `1606811971618-4486d14f3f99`, `1490645935967-10de6ba17061`, `1530026405186-ed1f139313f8`

## Compatibilidad

- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+
- Navegadores moviles modernos (iOS Safari 14+, Chrome Android)

Incluye fallbacks para navegadores sin `IntersectionObserver`.

## Notas legales

Los textos de `privacy.html` y `terms.html` son plantillas genericas de ejemplo. Antes de usar en produccion:

1. Revisa y adapta el contenido con asesoria legal especializada.
2. Actualiza las fechas de "ultima actualizacion".
3. Verifica el cumplimiento con la legislacion local aplicable (LFPDPPP en Mexico, GDPR en Europa, etc.).
4. Asegurate de registrar tu Aviso de Privacidad ante las autoridades correspondientes.

## Licencia

Template de uso libre para proyectos comerciales y personales. Personalizable al 100%.

## Localización para Chile

Los precios en CLP, la dirección en Providencia, los teléfonos +56 y el WhatsApp son ilustrativos. Los correos usan el dominio reservado `.example`. Reemplaza estos datos y la ubicación del mapa por los de la clínica antes de publicar. Los convenios, aranceles y textos legales también deben adecuarse a la clínica. El formulario continúa siendo una demostración sin envío real.
