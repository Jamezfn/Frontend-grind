# Footer Landing Page Project

## Overview

This project is a **responsive footer section** built using **HTML and CSS**.

It has a strong call-to-action on top, social icons, and three neat link columns below.
The layout sits over a full-page background image and adjusts cleanly on larger screens.

---

## What This Code Does

This project implements:

* a **hero-style footer callout**
* a **download button**
* a **logo and social icons row**
* **three navigation link columns**
* a **responsive layout**
* a **dark gradient overlay** for readability

It is a clean example of **responsive footer design** and **layout control with Flexbox and CSS grid**.

---

## Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS Grid
* Media Queries
* Google Fonts
* Font Awesome

---

## File Structure

```bash
index.html   → Footer structure
styles.css   → Styling and responsive layout
bg.jpg       → Background image
logo.svg     → Brand logo
```

---

## HTML Breakdown

### Main Layout

```html
<footer>
    <div class="footer-inner">
        <div class="top">
            <div>
                <h2>Are you ready</h2>
                <h3>Lets make a difference!</h3>
            </div>
            <button>Download now</button>
        </div>

        <div class="bottom">
            <div class="logo-content">
                <img class="logo" src="./logo.svg" alt="">
                <div class="socials">
                    <a class="fa-brands fa-x-twitter"></a>
                    <a class="fa-brands fa-discord"></a>
                    <a class="fa-brands fa-facebook"></a>
                    <a class="fa-brands fa-tiktok"></a>
                    <a class="fa-brands fa-instagram"></a>
                </div>
            </div>

            <nav>
                <ul>
                    <li><h4>FOREST.AI</h4></li>
                    <li><a href="">Forest</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Manifesto</a></li>
                </ul>

                <ul>
                    <li><h4>PRODUCT</h4></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Questions</a></li>
                    <li><a href="">Blog</a></li>
                </ul>

                <ul>
                    <li><h4>CONTACT</h4></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Conditions</a></li>
                    <li><a href="">Privacy</a></li>
                </ul>
            </nav>
        </div>
    </div>
</footer>
```

### Structure Meaning

* `footer`
  The main footer wrapper pinned to the bottom of the page.

* `.footer-inner`
  Holds all footer content and adds the gradient background.

* `.top`
  Contains the call-to-action heading and button.

* `.bottom`
  Holds the logo, social icons, and the three link lists.

* `.logo-content`
  Groups the logo and social icons together.

* `nav ul`
  Each list represents one footer column.

---

## CSS Breakdown

## 1. Global Reset

```css
* {
  box-sizing: border-box;
}
```

This makes sizing easier by including padding and border inside the element width.

---

## 2. Page Background

```css
body {
    overflow: hidden;
    background: #19283e url(bg.jpg);
    background-repeat: no-repeat;
    background-size: 290%;
    background-position: 50% -100px;
    height: 100dvh;
    color: #f9f9f9;
    font-family: "Euclid Circular B", "Poppins";
}
```

This gives the whole page a dark background with an image behind it.

Important parts:

* `overflow: hidden` prevents scrolling
* `background-size: 290%` makes the image large and dramatic
* `height: 100dvh` fills the full viewport height
* `font-family` sets the main typeface

---

## 3. Footer Positioning

```css
footer {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
}
```

This keeps the footer fixed at the bottom of the screen.

---

## 4. Footer Inner Container

```css
.footer-inner {
    margin-top: auto;
    width: 100%;
    padding: clamp(60px, 10vh, 120px) 48px clamp(40px, 6vh, 84px);
    background: linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 100%));
}
```

This creates the dark fade effect from transparent to black.

The `clamp()` values make spacing responsive across screen sizes.

---

## 5. Center Logo

```css
.logo {
    position: absolute;
    top: clamp(120px, 25vh, 280px);
    left: 50%;
    translate: -50% 0;
    height: 20px;
}
```

This places the logo in the upper middle of the screen.

---

## 6. Top Section

```css
.top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: clamp(32px, 6vh, 68px);
    text-align: center;
}
```

This stacks the heading and button vertically on small screens.

---

## 7. Heading Styling

```css
.top h2 {
    font-size: 28px;
    margin-bottom: 6px;
}

.top h3 {
    font-size: 16px;
    opacity: 0.6;
}
```

This gives the heading and subtitle different visual weight.

---

## 8. Button Styling

```css
.top button {
    border: 0;
    font-family: inherit;
    backdrop-filter: blur(10px);
    background: rgb(255 255 255 / 6%);
    border: 1px solid rgb(255 255 255 / 6%);
    color: #f9f9f9;
    border-radius: 40px;
    overflow: hidden;
    padding: 16px 28px;
    font-size: 16px;
    cursor: pointer;
}
```

This creates a soft glass-style button that matches the design.

---

## 9. Bottom Section

```css
.bottom {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
}
```

This stacks the footer content vertically at first.

---

## 10. Social Icons Row

```css
.socials {
  display: flex;
  align-items: center;
  gap: 3.75vw;
}

.socials a {
  opacity: 0.5;
  font-size: 22px;
}
```

This makes the social icons line up cleanly with spacing between them.

---

## 11. Navigation Columns

```css
.bottom nav {
  min-width: 0;
  width: 100%;
  text-align: center;
  display: flex;
  gap: 3.5vw;
}

.bottom nav ul {
  width: 100%;
  display: grid;
  gap: 12px;
  text-align: center;
}
```

This creates the three-column footer menu layout.

Each `ul` behaves like a small info block.

---

## 12. Typography

```css
h2,
h3,
h4 {
    margin: 0;
    font-weight: 400;
}
```

This removes default heading spacing and keeps the text light.

---

## 13. Responsive Layout at 490px

```css
@media (width >= 490px) {
  .logo {
    position: static;
    translate: 0;
  }

  .top {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    text-align: left;
  }

  .bottom .logo-content {
    justify-content: space-between;
  }

  .bottom nav ul {
    text-align: left;
  }
}
```

At this size, the footer starts behaving more like a desktop layout.

The top row becomes horizontal, and the logo stops being absolutely positioned.

---

## 14. Larger Screens at 590px

```css
@media (width >= 590px) {
    body {
        background-size: cover;
    }

    .bottom {
        flex-direction: row;
    }

    .bottom .logo-content {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: auto;
    }

    .bottom nav {
        text-align: left;
    }
}
```

This is where the footer really opens up into a full desktop-style layout.

The bottom section becomes horizontal, and the logo/social block sits to the side.

---

## How It Works

1. The page loads with a full background image
2. The footer stays fixed at the bottom
3. A gradient overlay makes the text readable
4. The top section shows the call-to-action
5. The bottom section shows logo, socials, and link columns
6. The layout adapts as the screen gets wider