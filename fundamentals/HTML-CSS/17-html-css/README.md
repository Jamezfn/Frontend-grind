# Shimmer Loader Project

## Overview

This project is a **skeleton shimmer loader** built using only **HTML and CSS**.

It mimics a loading UI (like cards or profiles) using placeholder shapes, with a moving light effect that creates a shimmer animation.

No JavaScript is used.

---

## What This Code Does

This project implements:

* A **skeleton loading layout**
* A **circular avatar placeholder**
* Multiple **text line placeholders**
* A **shimmer animation effect**
* Smooth **infinite loading animation**

It’s a clean example of **CSS animations and loading states**.

---

## Technologies Used

* HTML5
* CSS3
* CSS Animations
* CSS Gradients
* Flexbox
* Google Fonts

---

## File Structure

```bash id="n9r8y2"
index.html   → Loader structure
styles.css   → Styling and shimmer animation
```

---

## HTML Breakdown

### Main Layout

```html id="l8f2zq"
<div class="loader">
    <div class="wrapper">
        <div class="circle"></div>
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
        <div class="line line-4"></div>
    </div>
</div>
```

### Structure Meaning

* `.loader`
  The main container that holds the entire loading card.

* `.wrapper`
  Groups all placeholder elements together.

* `.circle`
  Represents an avatar or profile image.

* `.line`
  Represents text placeholders.

* `.line-1`, `.line-2`, etc.
  Different widths and positions to simulate real text layout.

---

## CSS Breakdown

## 1. Global Setup

```css id="m2g7xp"
html {
    font-family: 'Poppins', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

This removes default spacing and sets a consistent font.

---

## 2. Page Layout

```css id="6q2xpf"
body {
    background: #111;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
```

This centers the loader and gives a dark background for contrast.

---

## 3. Loader Container

```css id="k0f8mz"
.loader {
    position: relative;
    width: 240px;
    height: 130px;
    border: 1px solid #d3d3d3;
    background-color: #7e7e7e;
    padding: 15px;
    overflow: hidden;
}
```

This creates the card-like structure that holds the skeleton UI.

Important parts:

* `overflow: hidden` keeps the shimmer effect inside
* `position: relative` allows absolute positioning of children

---

## 4. Wrapper

```css id="8v9tq1"
.loader .wrapper {
    position: relative;
}
```

This ensures all child elements are positioned relative to this container.

---

## 5. Placeholder Elements

```css id="x5h3zn"
.loader .wrapper > div {
    position: absolute;
    background-color: #cacaca;
}
```

This gives all placeholders a light gray color.

---

## 6. Circle (Avatar)

```css id="o3f4yp"
.loader .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
```

This creates a circular placeholder for a profile image.

---

## 7. Lines (Text Placeholders)

```css id="0hzvta"
.loader .line {
    position: absolute;
    height: 10px;
    background-color: #cacaca;
}
```

These simulate text lines.

---

## 8. Individual Line Positions

```css id="9v1tqk"
.loader .line-1 {
    top: 11px;
    left: 58px;
    width: 100px;
}

.loader .line-2 {
    top: 34px;
    left: 58px;
    width: 150px;
}

.loader .line-3 {
    top: 57px;
    left: 0;
    width: 100%;
}

.loader .line-4 {
    top: 80px;
    left: 0;
    width: 90%;
}
```

Each line is positioned differently to look like realistic text content.

---

## 9. Shimmer Effect

```css id="n0t3yk"
.loader::after {
    position: absolute;
    content: "";
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        110deg,
        #e3e3e300 0%,
        #e3e3e300 40%,
        #e3e3e380 50%,
        #e3e3e300 60%,
        #e3e3e300 100%
    );
    animation: shimmer 1.2s linear infinite;
}
```

This creates the moving light effect across the loader.

---

## 10. Animation

```css id="4mn7zc"
@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}
```

This moves the gradient from left to right continuously, creating the shimmer effect.

---

## How It Works

1. Placeholder shapes simulate real content (image + text)
2. A gradient layer is placed on top using `::after`
3. The gradient moves across the container
4. This creates a **loading shimmer illusion**
5. The animation loops infinitely

---

## Why This Is Useful

* Improves **user experience** during loading
* Makes apps feel **faster and smoother**
* Commonly used in apps like:

  * Facebook
  * Instagram
  * YouTube

---

## Note

This loader is static and reusable. You can duplicate `.loader` to create multiple loading cards or scale it for bigger layouts.

---