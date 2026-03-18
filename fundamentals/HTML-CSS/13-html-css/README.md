# Floating Glass Navbar

## Overview

This project is a **modern floating navigation bar with a glassmorphism effect** built using HTML and CSS.

It features:

* Centered floating layout
* Frosted glass background
* Smooth hover underline animation
* Fixed positioning
* Clean horizontal navigation

---

## What This Code Does

This creates a navigation bar that:

* Floats at the top of the page
* Stays visible when scrolling
* Displays links in a horizontal row
* Animates an underline on hover
* Uses a blurred transparent background

---

## Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS transitions
* Google Fonts

---

# File Structure

```txt
index.html
styles.css
```

---

# HTML Structure

```html
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### Structure Meaning

* `nav` → navigation container
* `ul` → list of links
* `li` → individual item
* `a` → clickable link

---

# CSS Breakdown

---

## Global Reset

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Ensures consistent spacing and sizing across elements.

---

## Page Layout

```css
body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Centers content and ensures full viewport height.

---

## Navbar Positioning

```css
nav {
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
}
```

* `fixed` → stays visible on scroll
* `left: 50% + translateX(-50%)` → perfectly centered

---

## Glassmorphism Effect

```css
nav {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.5);
}
```

Creates a frosted glass appearance using:

* transparency
* blur
* light border

---

## Navigation Layout

```css
ul {
    display: flex;
    justify-content: center;
    gap: 3rem;
}
```

* Aligns items in a row
* Spaces them evenly

---

## Link Styling

```css
a {
    position: relative;
    text-decoration: none;
}
```

`position: relative` allows pseudo-elements to be positioned inside the link.

---

## Hover Underline Animation

### Default:

```css
a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50px;
    transition: all 0.3s ease;
}
```

* Line is hidden (`width: 0`)
* Positioned under the text

---

### On Hover:

```css
a:hover::after {
    width: 100%;
    left: 0;
}
```

* Line expands across the link
* Slides into place

---

## Hover Color Effect

```css
a:hover {
    color: #fff;
}
```

Changes link color on hover for better interaction feedback.

---

# Features

* Floating centered navbar
* Glassmorphism UI
* Smooth hover underline animation
* Responsive flex layout
* Fixed position on scroll

---

# Advanced Concepts Used

* Fixed positioning
* Transform-based centering
* Pseudo-elements (`::after`)
* CSS transitions
* Flexbox layout
* Backdrop blur

---