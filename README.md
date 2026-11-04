# Houfetts Grill — La 21

Sitio estático responsive para GitHub Pages.

## Estructura del proyecto

- `index.html`: secciones, navegación, visor de la carta original, pedido y redes sociales.
- `style.css`: colores, tipografías, animaciones, bordes y diseño adaptable.
- `menu.js`: catálogo editable. Aquí se cambian nombres, categorías, precios, descripciones e imágenes de los productos.
- `script.js`: funcionamiento del buscador, filtros, carrito, delivery, WhatsApp, sonidos y ventanas legales.
- `houfetts-logo.svg`: recurso de logotipo usado en el encabezado y pie de página.

## Cómo cambiar productos

Abre `menu.js`. Cada producto tiene estos campos:

```js
{
  id: 1,
  name: "Nombre del producto",
  category: "Smash",
  price: 3.50,
  image: IMG.smash,
  description: "Descripción del producto"
}
```

- `name`: nombre que aparece en la tarjeta.
- `category`: categoría usada por los filtros.
- `price`: precio numérico en dólares. Usa `null` si el precio debe consultarse.
- `image`: imagen asignada al producto.
- `description`: ingredientes o descripción.

## Cómo cambiar fotografías

En la parte superior de `menu.js` está el objeto `IMG`. Cambia la URL de `smash`, `wings`, `pizza`, `fries`, `grilled`, `chicken`, `sides` o `combo` por la ruta de la nueva imagen, por ejemplo:

```js
smash: "assets/mi-hamburguesa.webp"
```

Crea la carpeta `assets` en la raíz del repositorio y sube ahí las fotografías optimizadas en JPG o WebP. Para asignar una imagen distinta a un solo producto, cambia su campo `image` a la ruta específica.

## Cómo cambiar el texto, los colores o los datos

- Textos y secciones: `index.html`.
- Colores y estilos: variables al inicio de `style.css` (`--bg`, `--orange`, `--gold`, etc.).
- Número/enlace de WhatsApp: constante `WHATSAPP` en `script.js`.
- Redes y ubicación: enlaces en `index.html`.
- Tarifas de delivery: función `delivery()` en `script.js` y el selector `deliveryZone` en `index.html`.

## Carta PDF

La página incluye un visor que abre el PDF original facilitado. La transcripción del catálogo es una versión web editable; revisa nombres, descripciones y valores con la carta original antes de publicar. No se deben inventar precios cuando no se distinguen.

## Publicar con GitHub Pages

En GitHub: **Settings → Pages → Deploy from a branch → main → /(root)**.

El formulario no guarda pedidos en un servidor ni procesa pagos: prepara un resumen para que el cliente lo revise y lo envíe por WhatsApp. Los pagos se coordinan directamente con el negocio.
