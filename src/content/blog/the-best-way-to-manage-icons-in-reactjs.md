---
title: The Best Way to Manage Icons in React.js
description: Unleash SVG sprite potential in React.js for efficient icon management. Enhance performance, styling, and UI optimization.
pubDate: 2023-08-22T00:00:00Z
imgSrc: 'https://res.cloudinary.com/dx1jngfdn/image/upload/v1692673561/son-tran/il_fullxfull.4458436970_65tl_ytyuy4.avif'
imgAlt: 'The Best Way to Manage Icons in React.js'
---

## What You'll Learn

On this blog, you'll learn about efficient icon management in React.js using SVG sprites. Explore the benefits of using <symbol> and <use> elements to enhance performance, styling, and scalability. Avoid common pitfalls and optimize your UI with beautifully rendered icons.

## How to rendering icon
### Image + SVG

```jsx
<img src="icon.svg">
```

- Initial Loading Experience: Flicker during first page load due to request waterfall.
- Pros: Subsequent requests benefit from caching; suitable for simpler use cases.
- Cons: Initial flickering; limited CSS styling in \<img> tags.

### Inline SVG

```jsx
const icon = (
  <svg viewBox="0 0 24 24" width={16} height={16}>
    <!-- SVG path data -->
  </svg>
);
```
- Initial Loading Experience: Immediate rendering without flicker.
- Pros: Instant rendering; amenable to CSS styling; obviates secondary requests.
- Cons: Document size inflation; potential memory and JavaScript bundle performance degradation.

### Using SVGR for Icon Conversion

Install SVGR as a development dependency in your project

```bash
  pnpm add vite-plugin-svgr
```

Add this plugin to `vite.config.js`

```js
// vite.config.js
import svgr from "vite-plugin-svgr";

export default {
  // ...
  plugins: [svgr()],
};
```

Then SVG files can be imported as React components, just like create-react-app does:

```jsx
import { ReactComponent as Logo } from "./logo.svg";
```

- Pros:  The converted React components use JSX syntax, which makes them consistent with the rest of your React application's codebase.
- Cons: SVGs in JS have a cost and SVGs do not belong into your JS bundle. Please read this [blog](https://kurtextrem.de/posts/svg-in-js)

### Inline SVG Using SVG Sprites

```jsx
const icon = (
  <svg viewBox="0 0 24 24" width={16} height={16}>
    <use href="sprite.svg#icon" />
  </svg>
);
```

- TLDR: Inline SVGs with sprites strike an optimal performance-experience balance.

## Tradeoffs

The evaluation of different techniques revolves around the trade-off between performance and user experience.

### Image + SVG

- Initial flicker due to request waterfall during first page load.
- Subsequent requests benefit from caching.
- Limited CSS styling in \<img> tags.

### Inline SVG

- No initial flicker; immediate rendering.
- CSS styling possible.
- Increases document size; affects memory and JavaScript bundle performance.

### SVGR with SVG in JS 
- It will include SVG on JS bundle

### Inline SVG Using SVG Sprites

- Offers the best performance-to-experience trade-off.

## The Symbol Element

One remarkable feature that facilitates SVG sprite usage is the `<symbol>` element. This element serves as a template for graphical objects and can be instantiated by employing the `<use>` element. When combined with the `<defs>` element, a powerful SVG sprite can be constructed to accommodate multiple icons.

### Creating the SVG Sprite

Begin by crafting a file named `sprite.svg`, containing an `<svg>` element that encapsulates `<defs>` and `<symbol>` elements. Each `<symbol>` corresponds to an icon and is assigned a unique ID. Below is a simplified example:

```xml
<!-- sprite.svg -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <symbol viewBox="0 0 24 24" id="icon-1">
      <!-- Icon 1 path data -->
    </symbol>
    <symbol viewBox="0 0 24 24" id="icon-2">
      <!-- Icon 2 path data -->
    </symbol>
    <!-- Add more symbols as needed -->
  </defs>
</svg>
```

### Incorporating the Symbol in Components

To utilize the icons in your React components, create an Icon component that references the SVG sprite via the <use> element. You can then use this component to render icons throughout your app:

```jsx
import React from "react";

function Icon({ id, ...props }) {
  return (
    <svg {...props}>
      <use xlinkHref={`/sprite.svg#${id}`} />
    </svg>
  );
}

// Example usage
function App() {
  return (
    <div className="App">
      <Icon id="icon-1" width={16} height={16} />
      <Icon id="icon-2" width={16} height={16} />
      {/* Add more icons as needed */}
    </div>
  );
}
```

### Preloading the Sprite

To optimize performance, preload the sprite.svg file and cache it for subsequent use. Place a `<link>` tag in the document's `<head>`:

```html
<head>
  <link rel="preload" as="image/svg+xml" href="sprite.svg">
</head>
```

Ensure that appropriate cache headers are configured on the server to facilitate efficient caching.

## Conclusion

SVG sprites, leveraged through the `<symbol>` and `<use>` elements, introduce a potent method for managing icons within React applications. This technique circumvents the downsides of previous approaches, enhancing both performance and maintainability. By embracing SVG sprites and understanding their potential, you empower your applications with efficient, scalable, and beautifully styled icons.
