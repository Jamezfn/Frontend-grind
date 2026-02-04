# Floating Label Input

##  Overview

This project implements a simple **floating label input field** using pure HTML and CSS.

It creates an input box where:

* The label starts inside the input field
* When the user focuses on the input or types something
* The label smoothly moves above the input
* Acting like a modern UI/UX form element

No JavaScript is used – everything is handled with CSS.

---

##  What This Code Does

This mini project provides:

* A centered input field on the page
* A label that behaves like a placeholder
* Smooth animation when interacting with the input
* Basic form validation using HTML `required` attribute
* Responsive and clean layout

---

##  Technologies Used

* **HTML5**
* **CSS3**

---

#  File Structure

```
index.html   → Contains the form input structure
index.css    → Contains all styling and animations
```

---

#  HTML Explanation

### Main Structure

```html
<div class="input-group">
    <input type="text" id="name" required>
    <label for="name">Enter Name</label>
</div>
```

### What Each Part Does

* `<div class="input-group">`
  Wraps the input and label together so they can be styled as one unit.

* `<input type="text" id="name" required>`
  Creates a text input field.

  * `required` ensures the field must be filled before form submission.

* `<label for="name">`
  The label connected to the input using the same `id`.

---

# CSS Breakdown

### 1. Global Reset

```css
* {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
}
```

* Removes default margins and padding
* Ensures consistent layout across browsers
* `box-sizing: border-box` makes element sizing predictable

---

### 2. Centering the Page

```css
body {
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

* Makes the input appear at the center of the screen
* Uses flexbox for perfect vertical and horizontal alignment

---

### 3. Input Group Positioning

```css
.input-group {
    position: relative;
}
```

* Makes this container the reference point for the label
* Needed for absolute positioning of the label

---

### 4. Input Styling

```css
.input-group input {
    width: 300px;
}
```

* Sets a fixed width for the input field

---

### 5. Label Styling

```css
.input-group label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #777;
    font-size: 16px;
    pointer-events: none;
    transition: 0.3s;
    background-color: white;
    padding: 0 5px;
}
```

This part does the magic:

* Places label inside the input
* Centers it vertically
* Makes it unclickable (`pointer-events: none`)
* Adds smooth transition
* Background color prevents overlap with border

---

### 6. Floating Effect Logic

```css
.input-group input:focus + label,
.input-group input:valid + label {
    top: -1px;
    font-size: 14px;
}
```

This is the core behavior:

* When the input is focused
* OR when it has valid text

 The label moves up and becomes smaller

Creating the “floating label” effect.

---

#  How It Works (User Flow)

1. Page loads → label sits inside the input
2. User clicks input → label animates up
3. User types → label stays up
4. Input empty again → label returns to center

All without JavaScript.

---

#  Features

* Modern floating label UI
* Clean and minimal design
* CSS-only animation
* Built-in form validation
* Cross-browser compatible

---

##  Conclusion

This project demonstrates how to build a modern interactive form input using only HTML and CSS.

It’s lightweight, simple, and perfect for learning UI fundamentals.

---
