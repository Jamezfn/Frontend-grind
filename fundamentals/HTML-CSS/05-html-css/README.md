# 3D Flip Card

## Overview

This project implements a **3D flipping card effect** using only HTML and CSS.

It creates an interactive card that:

* Shows a front side by default
* Rotates in 3D when hovered
* Reveals a back side
* Uses smooth animations

---

## What This Code Does

This mini project demonstrates:

* CSS 3D transformations
* Hover-based animations
* Card flipping effect
* Front and back faces of a card
* Perspective and depth illusion

It behaves like a real-world card turning over.

---

## Technologies Used

* HTML5
* CSS3
* CSS Transforms
* CSS Transitions
* Flexbox

---

# File Structure

```
index.html   → Structure of the flip card
index.css    → Styling and 3D animation
```

---

# HTML Explanation

### Core Structure

```html
<div class="card">
    <div class="card-inner">
        <div class="card-front">
            ...
        </div>
        <div class="card-back">
            ...
        </div>
    </div>
</div>
```

### Meaning of Each Part

* `.card`
  The outer container that gives perspective

* `.card-inner`
  The element that actually rotates

* `.card-front`
  Visible side by default

* `.card-back`
  Hidden side that appears after flip

This nested structure is necessary for proper 3D flipping.

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

* Standard reset
* Keeps layout consistent

---

## 2. Centering the Card

```css
body {
    font-family: 'Poppins', sans-serif;
    background-color: #111;
    color: #fff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

* Dark themed background
* Centers the flip card on screen

---

## 3. Card Container

```css
.card {
    width: 190px;
    height: 254px;
    perspective: 1000px;
}
```

### Important Part:

`perspective: 1000px;`

* Creates 3D depth effect
* Without this, flip would look flat

---

## 4. Inner Card (Rotating Element)

```css
.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.9s;
    transform-style: preserve-3d;
}
```

This element:

* Holds both sides of the card
* Is the one that rotates
* Uses `preserve-3d` to keep 3D context

---

# Core Flip Logic

```css
.card:hover .card-inner {
    transform: rotateY(180deg);
}
```

### What Happens Here:

* When user hovers `.card`
* `.card-inner` rotates 180 degrees on Y-axis
* This reveals the back side

This is the main animation.

---

## 5. Front and Back Styling

```css
.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
}
```

### Key Concept:

`backface-visibility: hidden;`

* Hides the reverse side when flipped
* Prevents mirrored text issues

---

## 6. Back Side Rotation

```css
.card-back {
    transform: rotateY(180deg);
}
```

* Pre-rotates the back side
* So it appears correctly after flip

---

# How It Works (User Experience)

1. Page loads → front of card visible
2. User hovers over card
3. Inner container rotates 180°
4. Back side appears
5. Mouse leaves → card flips back

Smooth and realistic.

---

# Features

* Pure CSS 3D animation
* Smooth transitions
* Realistic flip effect
* Clean modern UI
* Reusable component

---

# Conclusion

This project is a great demonstration of:

* CSS 3D transforms
* Hover animations
* Perspective usage
* Interactive UI components