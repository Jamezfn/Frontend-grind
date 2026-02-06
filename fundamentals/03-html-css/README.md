# Tooltip

## Overview

This project implements a **custom tooltip component** using only HTML and CSS.

It mimics the kind of tooltips you see on Wikipedia:

* Hover over a word
* A small info box pops up
* Extra explanation appears
* Smooth fade-in effect

All done without JavaScript.

---

## What This Code Does

This mini project creates:

* A paragraph with a highlighted link
* A hidden tooltip box inside the link
* When the user hovers the link → tooltip appears
* When the mouse leaves → tooltip disappears

It demonstrates how to build interactive UI purely with CSS.

---

## Technologies Used

* HTML5
* CSS3
* CSS pseudo-elements
* CSS transitions

---

# File Structure

```
index.html   → Page structure and tooltip markup
index.css    → Styling and tooltip behavior
```

---

# HTML Explanation

### Main Structure

```html
<p>
    HTML is a 
    <a href="#" class="wiki-tooltip">
        markup language 
        <span class="tooltip-box">
            A markup language is a system for
            annotating text so that it can be distinguished
            from normal text.
        </span>
    </a>
    used to create web pages.
</p>
```

### How It’s Organized

* The tooltip is inside an `<a>` tag
* The actual popup text is inside:

```html
<span class="tooltip-box">...</span>
```

* The span is hidden by default
* It only appears when the user hovers the parent link

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
* Keeps layout consistent

---

## 2. Page Styling

```css
body {
    font-family: 'Poppins', sans-serif;
    background: #111;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

* Dark themed page
* Centers the content
* Clean modern typography

---

# Core Tooltip Logic

## 3. Tooltip Trigger Link

```css
.wiki-tooltip {
    position: relative;
    cursor: help;
    border-bottom: 1px dotted #0645ad;
    color: #0645ad;
    text-decoration: none;
}
```

This does:

* Makes the link look like a Wikipedia-style reference
* `cursor: help` shows a help cursor
* `position: relative` becomes the reference point for the tooltip

---

## 4. Tooltip Box Styling

```css
.tooltip-box {
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    width: 260px;
    background: #ffffff;
    color: #202122;
    font-size: 14px;
    line-height: 1.5;
    border: 1px solid #a2a9b1;
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 2px 8px #00000026;
    transition: opacity 0.2s ease;
    z-index: 10;
    visibility: hidden;
    opacity: 0;
}
```

### What This Section Achieves

* Positions tooltip above the link
* Centers it horizontally
* Gives it a clean white card style
* Adds shadow and rounded corners
* Starts hidden using:

```css
visibility: hidden;
opacity: 0;
```

---

## 5. Tooltip Arrow

```css
.tooltip-box::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: #ffffff transparent transparent;
}
```

This creates:

The small arrow at the bottom of the tooltip

Using a CSS trick with borders.

---

## 6. Show Tooltip on Hover

```css
.wiki-tooltip:hover .tooltip-box {
    opacity: 1;
    visibility: visible;
}
```

This is the main behavior:

* When the user hovers the link
* The tooltip smoothly appears

---

# How It Works (User Flow)

1. Page loads → tooltip is hidden
2. User moves mouse over “markup language”
3. CSS `:hover` triggers
4. Tooltip fades in
5. Mouse leaves → tooltip fades out

All controlled by CSS.

---

# Features

* Pure CSS tooltip
* Smooth fade animation
* Custom arrow pointer
* Clean Wikipedia-style design
* Lightweight and reusable

---

# Conclusion

This project shows how to build:

* Interactive UI elements
* Using only CSS positioning and hover

Perfect example of small but powerful front-end techniques.

---