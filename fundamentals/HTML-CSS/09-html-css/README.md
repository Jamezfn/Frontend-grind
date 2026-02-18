# Neumorphism Button

## Overview

This project creates a **soft 3D neumorphic button** using pure HTML and CSS.

It features:

* Centered layout
* Soft dual shadow effect
* Pressed (inset) active state
* Smooth transition animation
* Dark UI theme

No JavaScript used — interaction is handled with CSS pseudo-classes.

---

## What This Code Does

This project builds:

* A centered button
* Raised 3D soft shadow effect
* Realistic pressed state on click
* Smooth animation between states

When clicked:

* Shadows become inset
* Text color dims slightly
* Button appears physically pressed

---

## Technologies Used

* HTML5
* CSS3
* Flexbox
* Box-shadow layering
* `:active` pseudo-class
* Smooth transitions

---

# File Structure

```
index.html   → Button structure
index.css    → Styling and neumorphism effect
```

---

# HTML Structure

```html
<button>Click me</button>
```

That’s it.

No wrappers.
No extra divs.
All styling is in CSS.

---

# CSS Breakdown

---

## Page Centering

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

This centers the button vertically and horizontally.

Clean flexbox usage.

---

## Base Button Style (Raised Effect)

```css
button {
    background: #212121;
    box-shadow: 
        6px 6px 12px #000,
        -6px -6px 12px #1f1f1f;
}
```

### Why Two Shadows?

This is the key to neumorphism.

* Dark shadow bottom-right → creates depth
* Light shadow top-left → simulates light source

That combination creates a soft raised surface.

It’s not harsh like normal drop shadows — it blends into the background.

---

## Pressed State (Inset Effect)

```css
button:active {
    box-shadow:
        inset 4px 4px 12px #000,
        inset -4px -4px 12px #1f1f1f;
}
```

Important part:

`inset`

This reverses the shadow direction so it looks pushed inward.

That’s what creates the realistic “pressed” illusion.

---

## Smooth Animation

```css
transition: all .3s;
```

Makes the state change smooth instead of instant.

---

# How It Works (Visual Logic)

Light source assumed from top-left.

Normal state:

* Light top-left
* Shadow bottom-right
* Looks raised

Active state:

* Shadows inverted inward
* Looks pressed

All done with box-shadow math. No 3D transforms.

---

# Features

* Soft neumorphism style
* Raised 3D illusion
* Pressed animation
* Clean minimal HTML
* Pure CSS interaction

---

# Advanced Concepts Used

* Dual box-shadow layering
* Inset shadow technique
* Light-source simulation
* UI depth illusion
* Flexbox centering
* CSS transitions

