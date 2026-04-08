# Grid Layout Project

## Overview

This project is a **responsive CSS Grid layout** built using **HTML, CSS, and JavaScript**.

It lays out a page with a header, sidebars, main content, banner, low content section, and footer.
It also shows the current browser width and height and updates those values when the window is resized.

---

## What This Code Does

This project implements:

* a **multi-area grid layout**
* a **responsive mobile version**
* a **live screen dimension display**
* centered content blocks with different background colors
* a layout that rearranges itself on smaller screens

It is a clean example of **CSS Grid, media queries, and basic DOM updates**.

---

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Media Queries
* JavaScript

---

## File Structure

```bash
index.html   → Page structure
styles.css   → Grid layout and responsive styling
main.js      → Screen size updater
```

---

## HTML Breakdown

### Main Layout

```html
<div class="container">
    <div class="header">Header</div>
    <aside class="left-Aside">Left side</aside>
    <main class="main">
        <h3>Main Content</h3>
        <div id="dimensions"> Width: <span id="width"></span>, Height: <span id="height"></span></div>
    </main>
    <section class="banner">Banner</section>
    <aside class="right-Aside">Right side</aside>
    <section class="low-content">Low Content</section>
    <footer class="footer">Footer</footer>
</div>
```

### Structure Meaning

* `.container`
  The grid wrapper that controls the whole layout.

* `.header`
  The top section of the page.

* `.left-Aside` and `.right-Aside`
  Side columns on the left and right.

* `.main`
  The main content area, including the live screen dimensions.

* `.banner`
  A horizontal section above the main content.

* `.low-content`
  A lower content section between the main area and footer.

* `.footer`
  The bottom section.

---

## CSS Breakdown

## 1. Global Reset

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

This removes default spacing and makes sizing more predictable.

---

## 2. Page Font

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```

This sets a simple readable font for the page.

---

## 3. Grid Container

```css
.container {
    display: grid;
    grid-template-rows: 80px auto 1fr auto 50px;
    grid-auto-columns: 1fr 4fr 1fr;
    height: 100vh;
    grid-template-areas: 
        "header       header        header"
        "left-Aside     banner        right-Aside"
        "left-Aside     main          right-Aside"
        "left-Aside    low-content   right-Aside"
        "footer        footer        footer";
    padding: 10px;
    font-weight: 600;  
    font-size: 20px;
}
```

This is the main grid setup.

Important parts:

* `display: grid` turns the container into a grid
* `grid-template-areas` names each layout region
* `height: 100vh` makes it fill the screen
* `padding` adds space around the grid

---

## 4. Grid Areas

Each section is assigned to a named grid area.

Example:

```css
.header {
    grid-area: header;
}
```

This tells the browser where each item belongs inside the grid.

---

## 5. Section Styling

Each block gets its own background color, padding, and centering.

Example:

```css
.header {
    background-color: #f4b400;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

This makes the content centered both vertically and horizontally.

The same pattern is used for the sidebar, banner, main, low-content, and footer sections.

---

## 6. Main Content Styling

```css
.main {
    grid-area: main;
    background-color: #4285f4;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
}
```

This keeps the main section centered and stacks its content vertically.

---

## 7. Responsive Layout

```css
@media (max-width: 678px) {
    .container {
        grid-template-rows: 50px 50px 50px 1fr 50px 50px 50px;
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "banner"
            "left-Aside"
            "main"
            "right-Aside"
            "low-content"
            "footer";
    }
}
```

This changes the layout for smaller screens.

Instead of a 3-column grid, the sections stack into one column.

---

## JavaScript Breakdown

### Live Dimension Display

```javascript
function updateDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}
```

This function gets the current browser width and height and puts them on the page.

---

### Update on Resize

```javascript
window.addEventListener('resize', updateDimensions);
document.addEventListener('DOMContentLoaded', updateDimensions);
```

This makes the values update automatically when:

* the page first loads
* the browser window is resized

---

## How It Works

1. The page loads with a grid layout.
2. Each section is placed in its named grid area.
3. The JavaScript fills in the current screen dimensions.
4. When the window size changes, the dimensions update.
5. On smaller screens, the grid switches to a single-column layout.