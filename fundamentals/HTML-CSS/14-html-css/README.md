# Card Flip Project

## Overview

This project is a **3D flipping profile card** built using only **HTML and CSS**.

The card shows a front side with an image and short info.
When you hover over it, the card flips to reveal more details on the back.

No JavaScript is needed.

---

## What This Code Does

This project implements:

* A **hover-triggered flip animation**
* A **front face** with image and title
* A **back face** with description and button
* Smooth 3D transition using CSS
* A clean centered layout

It is a simple but strong example of **CSS transforms and 3D effects**.

---

## Technologies Used

* HTML5
* CSS3
* CSS 3D Transforms
* CSS Transitions
* Flexbox
* Google Fonts

---

## File Structure

```bash
index.html   → Card structure
styles.css   → Styling and flip animation
image.jpg    → Front card background image
```

---

## HTML Breakdown

### Main Layout

```html
<div class="wrapper">
    <div class="card">
        <div class="front-page">
            <div class="card-info">
                <h2 class="card-title">Natasha Raminof</h2>
                <p class="card-subtitle">100M followers on Instagram</p>
            </div>
        </div>

        <div class="back-page">
            <div class="card-content">
                <h3>Natasha Raminof</h3>
                <p class="card-description">...</p>
                <button class="card-btn">Explore more</button>
            </div>
        </div>
    </div>
</div>
```

### Structure Meaning

* `.wrapper`
  Gives the card 3D perspective

* `.card`
  The main flipping element

* `.front-page`
  The visible front side of the card

* `.back-page`
  The hidden back side that appears after flip

* `.card-info`
  Text shown on the front image

* `.card-content`
  Content shown on the back side

---

## CSS Breakdown

## 1. Global Font Setup

```css
html {
    font-family: 'Poppins', sans-serif;
}

* {
    font-family: inherit;
    padding: 0;
    box-sizing: border-box;
}
```

This sets the whole page to use **Poppins** and removes default spacing.

---

## 2. Page Layout

```css
body {
    background: #a5b1c2;
    height: 100vh;
    margin: 30px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

This centers the card in the middle of the page with a soft background color.

---

## 3. 3D Perspective

```css
.wrapper {
    perspective: 3000px;
}
```

This is what makes the flip look 3D instead of flat.

---

## 4. Card Container

```css
.card {
    border: 1px solid #ccc;
    width: 360px;
    height: 530px;
    transform-style: preserve-3d;
    transition: transform .8s ease-in-out;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
}
```

This creates the card and prepares it for 3D rotation.

Important parts:

* `transform-style: preserve-3d` keeps child elements in 3D space
* `transition` makes the flip smooth
* `box-shadow` gives depth
* `border-radius` makes the corners soft

---

## 5. Flip on Hover

```css
.card:hover {
    transform: rotateY(180deg);
}
```

When the user hovers over the card, it rotates around the Y-axis by 180 degrees.

---

## 6. Front and Back Faces

```css
.front-page,
.back-page {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
}
```

This makes both sides overlap perfectly.

`backface-visibility: hidden` hides the side that should not be seen.

---

## 7. Front Side Styling

```css
.front-page {
    background: url(image.jpg);
    background-size: cover;
}
```

The front side uses an image as the background and fills the whole card.

---

## 8. Front Text Positioning

```css
.card-info {
    position: absolute;
    bottom: 50px;
    left: 45px;
    color: #fff;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    text-align: center;
}
```

This places the text over the image and makes it readable.

---

## 9. Title and Subtitle

```css
.card-title {
    font-style: 1rem;
    font-weight: bold;
}

.card-subtitle {
    font-size: 1.2rem;
    margin-top: 5px;
    color: #0fbcf9;
}
```

This styles the name and subtitle on the front.

Note: `font-style: 1rem;` looks like a mistake. It should likely be `font-size: 1rem;`.

---

## 10. Back Side Styling

```css
.back-page {
    background: #1e272e;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
    transform: rotateY(180deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

The back side is rotated initially so that it only appears after the flip.

---

## 11. Back Content

```css
.card-content {
    text-align: center;
    padding: 20px;
    max-width: 300px;
}
```

This keeps the back content neat and centered.

---

## 12. Description Text

```css
.card-description {
    font-size: 1rem;
    color: #ccc;
    margin-bottom: 20px;
    line-height: 1.6;
}
```

This gives the description a softer look and improves readability.

---

## 13. Button Styling

```css
.card-btn {
    background-color: #0fbcf9;
    color: #fff;
    padding: 12px 24px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}
```

This creates a clean rounded button on the back of the card.

---

## 14. Button Hover Effect

```css
.card-btn:hover {
    background-color: transparent;
    color: #0fbcf9;
    border: 1px solid #0fbcf9;
}
```

On hover, the button switches to an outline style.

---

## How It Works

1. The card shows the front side first
2. User hovers over it
3. Card rotates 180 degrees
4. The back side becomes visible
5. Button hover effect gives extra interaction