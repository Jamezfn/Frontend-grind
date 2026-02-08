# Image Slider Gallery

## Overview

This project is a **CSS-based image slider gallery** that expands images on hover.

It creates a horizontal row of images where:

* All images sit side by side
* Hovering over one image makes it expand
* Other images shrink automatically
* Smooth transition gives a slider-like effect

No JavaScript. Pure HTML + CSS.

---

## What This Code Does

This mini project implements:

* A responsive horizontal image gallery
* Hover-to-expand card effect
* Smooth width transition
* Flexbox layout
* Movie poster style image showcase

It behaves like a simple interactive slider without any scripts.

---

## Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS transitions

---

# File Structure

```
index.html   → Gallery structure
index.css    → Styling and hover effects
img/         → Folder containing poster images
```

---

# 📄 HTML Explanation

### Main Structure

```html
<div class="container">
    <div class="card">
        <img src="./img/avengers_endgame_ver2.jpg" alt="Avengers Endgame">
    </div>
    ...
</div>
```

### How It Works

* `.container`
  Holds all image cards in one horizontal row

* `.card`
  Wrapper for each image

* `<img>`
  Actual poster or image displayed

Multiple cards create a slider-style gallery.

---

# CSS Breakdown

## 1. Global Reset

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

* Removes default browser spacing
* Keeps sizing consistent

---

## 2. Body Styling

```css
body {
    background-color: #000a1f;
}
```

* Dark background for cinematic feel

---

## 3. Container Layout

```css
.container {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    min-height: 445px;
    display: flex;
    align-items: center;
    gap: 10px;
}
```

This section:

* Centers the gallery on the page
* Uses flexbox to arrange cards in a row
* Adds spacing between images
* Keeps a fixed height

---

## 4. Card Styling

```css
.card {
    height: 100%;
    width: 20%;
    overflow: hidden;
    transition: flex 0.5s ease-in-out;
}
```

What this does:

* Each card starts at 20% width
* Images stay inside boundaries
* Transition allows smooth resizing

---

## 5. Image Styling

```css
.card img {
    border-radius: 10px;
    border: 2px solid grey;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
```

* Makes images fully fill the card
* Keeps aspect ratio
* Adds rounded corners and border

---

# ✨ Core Hover Effect

```css
.container .card:hover {
    width: 25%;
}
```

### This is the main feature:

* When you hover over a card
* Its width increases from 20% → 25%
* Transition makes it smooth
* Creates a slider/expansion effect

All other cards automatically shrink because flexbox redistributes space.

---

# How It Works (User Experience)

1. Page loads → all images equal size
2. User hovers one image
3. That image grows wider
4. Others adjust smoothly
5. Mouse leaves → layout returns to normal

Simple, clean, interactive.

---

# Features

* Pure CSS image slider effect
* No JavaScript required
* Smooth animations
* Clean modern UI
* Flexbox-powered layout
* Easy to customize

---

# Conclusion

This project demonstrates:

* Power of CSS transitions
* Flexbox dynamic layouts
* Simple hover-based interactivity
