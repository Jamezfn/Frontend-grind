# Animated Login Form

## Overview

This project is a **modern animated login form** built using pure HTML and CSS.

It combines:

* Floating input labels
* A glowing circular animated background
* Smooth UI transitions
* Clean modern styling

No JavaScript is used — everything is handled with CSS animations and positioning.

---

## What This Code Does

This project creates:

* A centered login form
* Email and password inputs with floating labels
* A glowing animated circular border effect
* A submit button
* Links for password reset and signup
* Smooth input interaction feedback

It demonstrates advanced CSS layout and animation techniques.

---

## Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS Animations
* CSS Transforms
* CSS Variables

---

# File Structure

```
index.html   → Login form structure
index.css    → Styling and animations
```

---

# HTML Structure Breakdown

## Main Layout

```html
<div class="container">
    <div class="login-box">
        <form>...</form>
    </div>

    <!-- 50 animated span elements -->
    <span style="--i:0;"></span>
    ...
    <span style="--i:49;"></span>
</div>
```

### What’s Happening Here?

* `.container` → Holds everything
* `.login-box` → The actual login form
* 50 `<span>` elements → Create the animated circular glow effect

Each span uses a CSS variable `--i` to calculate rotation and animation delay.

---

# CSS Breakdown

---

## Page Layout

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #1f293a;
}
```

* Centers the login form
* Dark background
* Clean modern feel

---

## Circular Animated Effect

### Container

```css
.container {
    position: relative;
    width: 256px;
    height: 256px;
}
```

This creates the circular boundary area.

---

### The Spans (Magic Part)

```css
.container span {
    position: absolute;
    left: 0;
    background: #2c4766;
    width: 32px;
    height: 6px;
    border-radius: 8px;
    transform-origin: 128px;
    transform: scale(2.2) rotate(calc(var(--i) * (360deg / 50)));
    animation: blink 3s linear infinite;
    animation-delay: calc(var(--i) * (3s / 50));
}
```

### What This Does

* 50 small bars are arranged in a circle
* Each bar rotates using:

```css
rotate(calc(var(--i) * (360deg / 50)))
```

* Each one has delayed animation
* Creates rotating glowing pulse effect

---

### Animation Keyframes

```css
@keyframes blink {
    0% { background: #0ef; }
    25% { background: #2c4766; }
}
```

This makes the bars glow one after another.

Result:

👉 A rotating neon circular animation behind the form.

---

# Login Form Design

---

## Floating Input Labels

```css
input:focus~label,
input:valid~label {
    top: 1px;
    font-size: .8em;
    background: #1f293a;
    padding: 0 6px;
    color: #0ef;
}
```

### Behavior:

* When input is focused
* OR contains valid text
* Label moves upward
* Becomes smaller
* Changes color

This creates a modern floating-label effect.

---

## Input Styling

```css
input {
    border: 2px solid #2c4766;
    border-radius: 40px;
    background: transparent;
    color: #fff;
}
```

* Transparent background
* Rounded pill-style input
* Neon theme

---

## Button Styling

```css
.btn {
    background: #0ef;
    border-radius: 40px;
}
```

* Full width
* Bright accent color
* Clean modern design

---

# How It Works (User Flow)

1. Page loads
2. Circular animated glow starts spinning
3. User clicks input → label floats up
4. User types → label stays up
5. User submits form

---

# Features

* Animated circular background
* CSS variable-driven animation
* Floating labels
* Clean neon design
* Smooth transitions
* Pure CSS (no JS)

---

# Advanced Concepts Used

* `transform-origin`
* `rotate(calc())`
* CSS variables (`--i`)
* `animation-delay`
* `preserve-3d`
* Floating labels using sibling selector (`~`)
* Flexbox centering

---

# Conclusion

This project showcases:

* Creative CSS animation
* Modern UI design
* Advanced transform logic
* Clean interactive form behavior

---
