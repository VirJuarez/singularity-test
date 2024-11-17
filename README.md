# Challenge Frontend - Singularity Health

## Demo en vivo
[Ver demo en Vercel](https://singularity-test.vercel.app/)

## Descripción
Aplicación web desarrollada como challenge técnico para Singularity Health. Consiste en un sistema de autenticación con protección de rutas y diseño de home y secciones.

## Tecnologías Utilizadas
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Fetch API
- LocalStorage para persistencia del token
- Herramientas de generación SVG para fondos:
  - [Haikei App](https://app.haikei.app/)
  - [SVG Wave](https://svgwave.in/)

## Diseño
El desarrollo frontend se basó en el diseño proporcionado en [Adobe XD](https://xd.adobe.com/view/9485d763-06d4-472b-a01c-e154229970a9-c1d6/). Los fondos con patrones ondulados y formas orgánicas fueron creados utilizando generadores de SVG online para intentarreplicar la estética del diseño original.

## Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm 

### Pasos para instalación
1. Clonar el repositorio

```bash
   git clone https://github.com/VirJuarez/singularity-test.git
   cd singularity-test
   ```

2. Instalar dependencias

```bash
   npm install
   ```
3.**Iniciar el Servidor de Desarrollo**

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`


## Características

### Sistema de Autenticación
- **Credenciales de prueba:**
  - Email: eve.holt@reqres.in
  - Contraseña: cualquier combinación de 6 o más caracteres
- La autenticación se realiza contra la API de ReqRes
- Validaciones implementadas:
  - Email válido
  - Contraseña con mínimo 6 caracteres
  - Mensajes de error personalizados

### Protección de Rutas
- Usuarios no autenticados son redirigidos a /login
- Usuarios autenticados son redirigidos a /home al intentar acceder a /login. Se valida la presencia del token en el localStorage
- Redirección a página 404 para rutas no existentes


### Home
**Nota:** El home completo fue desarrollado como extra, aunque no era un requerimiento de la prueba:
- Diseño completo implementado
- Links y botones son actualmente decorativos
- Pendiente: Optimización del responsive design

## Mejoras Futuras
- Implementar funcionalidad completa en botones y enlaces del dashboard
- Optimizar diseño responsive
- Implementar sistema de logout

## Contacto
[Email](virginia.juarez1996@gmail.com)
