# Hover Blur Gallery

## Overview

This project is a simple **image gallery with hover effects** built using only HTML and CSS.

It creates a grid of image cards where:

* Hovering on one image makes it enlarge
* All other images shrink and blur
* Smooth transitions give a modern UI feel

No JavaScript required.

---

## What This Code Does

The project implements:

* A responsive flexbox image gallery
* Smooth hover animations
* Scale-up effect on hovered card
* Blur + shrink effect on non-hovered cards
* Clean centered layout

It demonstrates advanced CSS selectors and transitions in a very simple way.

---

## Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS Transitions
* CSS Filters

---

# File Structure

```
index.html   → Gallery structure
index.css    → Styling and hover effects
img/         → Folder containing images
```

---

# HTML Explanation

### Main Layout

```html
<div class="container">
    <div class="card">
        <img src="img/image1.jpg" alt="">
    </div>
    ...
</div>
```

### Structure Meaning

* `.container`
  Holds all image cards together

* `.card`
  Each image wrapper

* `<img>`
  Actual image displayed inside the card

Multiple cards are placed inside the container to form the gallery.

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

* Removes browser default spacing
* Makes sizing predictable
* Standard setup for modern layouts

---

## 2. Centering the Gallery

```css
body {
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

* Centers the whole gallery on the screen
* Uses flexbox for perfect alignment

---

## 3. Gallery Container

```css
.container {
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}
```

What this does:

* Creates a flexbox grid
* Wraps images to next line when needed
* Adds spacing between cards
* Keeps everything centered

---

## 4. Card Styling

```css
.container .card {
    overflow: hidden;
    height: 300px;
    width: 250px;
    border-radius: 10px;
    cursor: pointer;
    transition: 400ms;
}
```

Features:

* Fixed card size
* Rounded corners
* Smooth transition for animations
* `overflow: hidden` prevents image overflow

---

## 5. Image Fit

```css
.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

* Makes images fill the card properly
* Keeps aspect ratio
* Prevents stretching

---

# Core Hover Effects

### a) Hover on a Single Card

```css
.container .card:hover {
    transform: scale(1.1, 1.1);
}
```

* When you hover one image
* That image becomes bigger (110%)

---

### b) Blur Other Cards

```css
.container:hover .card:not(:hover){
    transform: scale(0.9, 0.9);
    filter: blur(10px);
}
```

This is the main magic:

* When the container is hovered
* Any card NOT being hovered:

  * Shrinks slightly
  * Gets blurred

Result:

Focus effect on the active image

---

# How It Works (User Experience)

1. User moves mouse over gallery

2. Hovered image zooms in

3. All other images:

   * scale down
   * become blurry

4. Mouse leaves → everything returns to normal

---

# Features

* Pure CSS animation
* Smooth transitions
* Modern UI effect
* Responsive wrapping
* Clean and minimal code

---