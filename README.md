# Retail Analytics Dashboard — Notas rápidas

Proyecto: prototipo en un único archivo HTML
- Archivo principal: `retail-analytics-dashboard_5.html` (React 18 UMD + ReactDOM + @babel/standalone + Chart.js desde CDN).
- Es un prototipo para desarrollo local: el JSX se transforma en el navegador usando `@babel/standalone`. No está pensado para producción.

Qué contiene el fichero
- React 18 (UMD) y ReactDOM cargados desde CDN.
- In-browser Babel (`@babel/standalone`) para compilar JSX en el cliente.
- Chart.js para gráficos (CDN).
- Punto de montaje React: elemento con id `root` (verifica que exista y sea visible si no se renderiza).

Por qué servirlo con HTTP (no abrir con file://)
- Algunas APIs y extensiones (React DevTools, CORS y ciertas funcionalidades) requieren origen http(s).
- Servir por HTTP evita problemas de rutas relativas y recursos bloqueados por el navegador.

Levantar localmente (PowerShell)
- Desde la carpeta que contiene `retail-analytics-dashboard_5.html` (por ejemplo `Downloads`):

  Opción A — Servir con Vite (estás usando esto ahora: http://localhost:5173)
  - Si estás ejecutando el dev server de tu proyecto retail-dashboard (Vite), coloca el HTML como archivo estático en la carpeta public para que Vite lo sirva tal cual:
    1) Desde PowerShell (ejemplo):
       cd "C:\Users\alvar\Downloads\retail-dashboard"
       # crea public si no existe y copia el HTML
       New-Item -ItemType Directory -Force -Path .\public
       Copy-Item "..\retail-analytics-dashboard_5.html" -Destination .\public\ -Force
    2) Arranca el dev server de Vite:
       npm install        # si no has instalado dependencias
       etail-dashboard'; npm install
    3) Abre en el navegador:
       http://localhost:5173/retail-analytics-dashboard_5.html
    Nota: Vite usa por defecto el puerto 5173; el terminal mostrará el puerto si es distinto.

