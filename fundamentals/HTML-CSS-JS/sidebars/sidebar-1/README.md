# Sidebar Toggle UI

## Overview

This project is a **collapsible sidebar navigation** built with **HTML, CSS, and JavaScript**.

It starts in a compact state and expands when the burger icon is clicked.
When open, the sidebar shows the logo and navigation labels.
When closed, only the icons remain visible, keeping the layout clean and minimal.

---

## What This Code Does

This sidebar implements:

* A **toggle button** for opening and closing the menu
* A **collapsed and expanded sidebar state**
* Smooth width animation
* Hidden text labels when closed
* A polished **glassmorphism-style** design using blur and transparency
* A background overlay for better contrast

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Flexbox
* CSS Transitions
* Backdrop Filter
* Google Fonts
* Material Symbols

---

## File Structure

```bash
index.html   → Sidebar structure
styles.css   → Sidebar styling and animation
main.js      → Toggle logic
bg.svg       → Background image
logo.svg     → Sidebar logo
```

---

## HTML Breakdown

### Main Layout

```html
<aside id="sidebar" class="sidebar">
    <div class="inner">
        <header>
            <button id="burger" class="sidebar-burger">
                <span id="burgerIcon" class="material-symbols-outlined">menu</span>
            </button>
            <img src="logo.svg" alt="logo">
        </header>

        <nav>
            <button>
                <span class="material-symbols-outlined">home</span>
                <p>Home</p>
            </button>
            ...
        </nav>
    </div>
</aside>
```

### Structure Meaning

* `.sidebar`
  The main sidebar container

* `.inner`
  Holds the full sidebar content

* `header`
  Contains the burger button and logo

* `nav`
  Contains the navigation buttons

* `<p>` inside each button
  The text label for each nav item

* `#burgerIcon`
  Changes between `menu` and `close`

---

## CSS Breakdown

### 1. Global Setup

```css
html {
    font-family: 'Poppins';
}

* {
    font-family: inherit;
}
```

This makes the whole UI use the **Poppins** font consistently.

---

### 2. Page Background

```css
body{
    background: #17132a url(bg.svg);
    background-size: cover;
    height: 100vh;
    overflow: hidden;
    background-repeat: no-repeat;
}
```

This gives the page:

* a dark background color
* a full-screen background image
* no scrolling
* a fixed full-height layout

---

### 3. Dark Overlay

```css
body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  background: linear-gradient(rgb(0 0 0 / 75%), rgb(0 0 0 / 0%));
}
```

This adds a transparent black overlay on top of the background.

It helps the sidebar stand out better and makes the text easier to see.

---

### 4. Sidebar Container

```css
.sidebar {
    position: absolute;
    background: rgb(0 0 0 / 12%);
    top: 20px;
    left: 16px;
    bottom: 38px;
    width: 56px;
    z-index: 2;
    border-radius: 14px;
    backdrop-filter: blur(14px);
    transition: width 0.45s;
}
```

This creates the collapsed sidebar:

* fixed near the left side
* semi-transparent background
* blurred glass effect
* rounded corners
* smooth width transition

---

### 5. Expanded Sidebar

```css
.sidebar.open {
    width: 190px;
}
```

When the `open` class is added, the sidebar expands from **56px** to **190px**.

---

### 6. Inner Content Wrapper

```css
.inner {
    position: absolute;
    inset: 0;
    width: 190px;
    display: flex;
    flex-direction: column;
}
```

This keeps all the content aligned vertically inside the sidebar.

---

### 7. Header Area

```css
.sidebar header {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 0 6px;
}
```

This section holds:

* the burger button
* the logo

---

### 8. Burger Button

```css
.sidebar-burger {
    color: #f9f9f9;
    display: grid;
    place-items: center;
    width: 44px;
    height: 64px;
}
```

This centers the burger icon inside its button nicely.

---

### 9. Hidden Logo and Labels

```css
.sidebar header img, 
.sidebar nav button p {
    opacity: 0;
    transition: 0.25s;
    pointer-events: none;
}
```

By default, the logo and text labels are hidden when the sidebar is collapsed.

---

### 10. Navigation Buttons

```css
.sidebar nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 6px;
    gap: 2px;
}
```

This stacks the navigation buttons vertically.

---

### 11. Button Style

```css
.sidebar nav button {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 44px;
    width: 44px;
    padding: 0 12px;
    color: #f9f9f9;
    opacity: 0.7;
    transition: 0.3s;
}
```

Each button starts compact and icon-only when closed.

---

### 12. Hover Effect

```css
.sidebar nav button:hover {
    background: rgb(255 255 255 / 6%);
    opacity: 1;
}
```

When hovered, the button becomes brighter and gets a subtle background.

---

### 13. Tooltip Effect When Collapsed

```css
.sidebar:not(.open) nav button:hover p {
    opacity: 1;
    background: rgb(0 0 0 / 32%);
    backdrop-filter: blur(10px);
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
    translate: 16px 0;
}
```

This is the nice part:

* when sidebar is closed
* hovering a button shows the label like a tooltip
* the label appears beside the icon

---

### 14. Open State Visibility

```css
.sidebar.open :is(header img, nav button p) {
    opacity: 1;
}
```

When the sidebar opens, the logo and text labels fade in.

---

### 15. Full-Width Nav Buttons

```css
.sidebar.open nav button {
    width: 100%;
}
```

This lets the buttons stretch properly when the sidebar is expanded.

---

## JavaScript Breakdown

```js
const sidebar = document.getElementById("sidebar");
const burger = document.getElementById("burger")
const icon = document.getElementById("burgerIcon");

let isOpen = false;

burger.addEventListener("click", () => {
    isOpen = !isOpen

    sidebar.classList.toggle("open");

    icon.textContent = isOpen ? "close" : "menu";
});
```

### What it does

* gets the sidebar element
* gets the burger button
* gets the icon text
* tracks whether the sidebar is open or closed
* toggles the `open` class on click
* switches the icon between:

  * `menu`
  * `close`

---

## How It Works

1. Page loads with the sidebar collapsed
2. Only icons are visible
3. User clicks the burger icon
4. Sidebar expands
5. Logo and labels appear
6. Clicking again collapses it back

---

## Features

* Clean collapsible sidebar
* Smooth animation
* Glassmorphism effect
* Responsive and minimal design
* Icon-only compact mode
* Hover tooltips when closed
* Simple JavaScript toggle logic

---