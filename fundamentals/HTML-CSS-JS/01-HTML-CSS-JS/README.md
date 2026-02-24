# Sliding Authentication Card

## Overview

This project is a **modern animated authentication card** that switches between:

* Sign In view
* Sign Up view

It features:

* Animated sliding forms
* Moving active navigation bar
* Hero panel animation
* Smooth transitions
* Clean glass-style card design

Unlike your previous projects, this one uses **JavaScript for view switching**.

---

## What This Code Does

This project creates:

* A centered authentication card
* A left navigation panel
* A hero section with illustrations
* Two vertically stacked forms
* A sliding transition between forms
* An animated active indicator bar

When switching:

* The form slides vertically
* The hero content slides
* The active navigation bar moves
* The active button highlights

---

## Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS Grid
* CSS Variables
* Absolute Positioning
* JavaScript (DOM manipulation)
* Akar Icons

---

# File Structure

```
index.html   → Card structure
index.css    → Styling & animations
main.js      → View switching logic
```

---

# HTML Structure Breakdown

## Main Layout

```
.card
 ├── .card-nav
 ├── .card-hero
 └── .card-form
```

---

## Navigation Panel

```html
<ul class="card-nav">
    <li><img src="logo.svg"></li>
    <li><button class="signin active">Sign In</button></li>
    <li><button class="signup">Sign Up</button></li>
</ul>
```

* Contains logo
* Two buttons
* A moving `.active-bar`

---

## Hero Section

```html
<div class="card-hero">
    <div class="card-hero-inner">
        <div class="signin">...</div>
        <div class="signup">...</div>
    </div>
</div>
```

Important:
Both views are stacked vertically inside `.card-hero-inner`.

JS changes `top` to slide between them.

---

## Forms Section

```html
<div class="card-form">
    <div class="forms">
        <form id="signin"></form>
        <form id="signup"></form>
    </div>
</div>
```

Same concept:

* Forms container height = 200%
* One form on top
* One below it
* JS moves it up/down

---

# CSS Architecture

---

## Centering Layout

```css
body {
    display: grid;
    place-items: center;
}
```

This centers the `.card` perfectly.

---

## Glass Card Effect

```css
.card {
    background: rgb(0 0 0 / 32%);
    box-shadow: 0 12px 80px rgba(0,0,0,0.12);
}
```

Creates:

* Semi-transparent background
* Soft elevated look

---

## Active Navigation Bar

```css
.card-nav .active-bar {
    position: absolute;
    top: 33.33%;
    height: 33.33%;
}
```

Why 33.33%?

Because there are 3 list items:

1. Logo
2. Sign In
3. Sign Up

The bar moves between them using JS.

---

## Sliding Forms Trick

```css
.card-form .forms {
    position: absolute;
    height: 200%;
    transition: 0.5s ease-in-out;
}
```

Why 200% height?

Because:

* Two forms stacked vertically
* Each is 100% height
* So container must be 200%

JS changes:

```js
cardForms.style.top = "-100%";
```

That slides the second form into view.

---

## Hero Slide Animation

```css
.card-hero-inner {
    position: absolute;
    transition: 0.5s ease-in-out;
}
```

JS also moves this with:

```js
cardHeroInner.style.top = "-100%";
```

This synchronizes:

* Form slide
* Hero slide

Very clean UI animation technique.

---

# JavaScript Logic Explained

```js
const selectView = (view) => {
```

When button clicked:

### Step 1 — Remove active class from all buttons

```js
button.classList.remove("active");
```

### Step 2 — Add active class to selected button

```js
if (button.classList.contains(view)) {
    button.classList.add("active");
}
```

### Step 3 — Slide content

If "signin":

```js
cardForms.style.top = "0";
activeBar.style.top = "33.33%";
cardHeroInner.style.top = "0";
```

If "signup":

```js
cardForms.style.top = "-100%";
activeBar.style.top = "66.66%";
cardHeroInner.style.top = "-100%";
```

Everything updates smoothly because CSS has transitions.

---

# Features

* Sliding authentication views
* Animated active indicator
* Icon inputs
* Focus styling
* Clean UI hierarchy
* Smooth transitions
* Responsive layout structure

---

# Advanced Concepts Used

* Absolute + relative positioning coordination
* Vertical stacking animation
* Dynamic class switching
* CSS variable theming
* Transition timing
* UI state synchronization
* DOM manipulation
