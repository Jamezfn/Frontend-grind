# Hologram Modal Project

## Overview

This project is a **modal sign-up popup with a styled footer** built using **HTML, CSS, and JavaScript**.

The page shows a footer-style landing section, and when the user clicks **Sign up free**, a centered modal appears with a dark overlay.
The modal can be closed by clicking outside it or pressing the sign-up button inside the modal.

---

## What This Code Does

This project implements:

* a **fixed footer landing section**
* a **call-to-action card**
* a **centered sign-up modal**
* a **dark overlay backdrop**
* smooth **open and close animations**
* click handling with **JavaScript**

It is a solid example of **modal UI design, animation, and event handling**.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Flexbox
* CSS Animations
* Google Fonts
* Material Symbols

---

## File Structure

```bash id="h1l8kq"
index.html   → Page structure
styles.css   → Footer, modal, and animation styling
script.js    → Modal open/close logic
logo.svg     → Brand logo
```

---

## HTML Breakdown

### Main Modal Elements

```html id="q8z2k1"
<div id="modalOverlay" class="overlay default"></div>
<div id="modalDialog" class="modal default">
    <header>
        <h2>Sign Up</h2>
        <h3>Try Hologram today.</h3>
    </header>
    <form>
        <input type="email" placeholder="Email" autocomplete="off">
        <input type="password" placeholder="password">
        <button class="signup-button" id="signupBtn" type="button">
            <p>Sign up free</p>
            <span class="material-symbols-outlined">trending_flat</span>
        </button>
    </form>
    <p>No credit card information required</p>
</div>
```

### Structure Meaning

* `#modalOverlay`
  Dark backdrop behind the modal.

* `#modalDialog`
  The popup card itself.

* `header`
  Modal heading area with title and subtitle.

* `form`
  Contains the email and password fields.

* `#signupBtn`
  The button inside the modal that also closes it.

---

### Footer Section

```html id="0m4gzs"
<footer class="modal-footer">
    <div class="container">
        <article>
            <h2>Try Hologram today.</h2>
            <button class="signup-button" id="openModalBtn" type="button">
                <p>Sign up free</p>
                <span class="material-symbols-outlined">trending_flat</span>
            </button>
        </article>
        <section class="top">
            <img src="logo.svg" alt="logo" />
            <ul>
                <li>
                    <h3>Resources</h3>
                    <a>Usage</a>
                    <a>Docs</a>
                    <a>Support</a>
                    <a>Hardware</a>
                </li>
                <li>
                    <h3>Pricing</h3>
                    <a>Overview</a>
                    <a>Flexible Data</a>
                    <a>High Volume</a>
                    <a>Enterprise</a>
                </li>
                <li>
                    <h3>Developers</h3>
                    <a>Forum</a>
                    <a>Projects</a>
                    <a>Open Source</a>
                    <a>GitHub</a>
                </li>
                <li>
                    <h3>Company</h3>
                    <a>About Us</a>
                    <a>Blog</a>
                    <a>Partnerships</a>
                    <a>Careers</a>
                </li>
            </ul>
        </section>
    </div>
</footer>
```

This is the landing footer that sits behind the modal.

---

## CSS Breakdown

## 1. Page Styling

```css id="t9m2vh"
body {
    background: #27252a;
    color: #f9f9f9;
    font-family: "Poppins", "Euclid Circular B";
}
```

This gives the page a dark premium look and sets the font.

---

## 2. Footer Layout

```css id="b7xv4p"
.modal-footer {
    background: #1b1a1d;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: calc(50vh + 1px);
    color: #e5e2e9;
}
```

This pins the footer to the bottom half of the screen.

---

## 3. CTA Card

```css id="v2qk9n"
.modal-footer article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    background: linear-gradient(90deg, #5a2e6c, #6e48aa);
    border-radius: 10px;
    padding: 20px 30px;
    margin: -100px 20px 20px;
}
```

This creates the colorful top call-to-action card that stands out above the footer.

---

## 4. Sign Up Button

```css id="u6y1rx"
.signup-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 0 20px 0 20px;
    width: 100%;
    height: 56px;
    background: #7c58ad;
    border: none;
    border-radius: 6px;
    color: #e5e2e9;
    font-family: inherit;
    font-size: 15px;
    cursor: pointer;
}
```

This styles both sign-up buttons with the same look.

---

## 5. Footer Links

```css id="m1c8pd"
.modal-footer section.top ul {
    list-style: none;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
}
```

This arranges the footer links in a clean grid.

---

## 6. Responsive Footer Layout

```css id="r4f0nw"
@media (width > 600px) {
    .modal-footer article {
        flex-direction: row;
        margin: -70px 20px 20px;
        padding: 30px 50px 30px;
    }

    .modal-footer section.top ul {
        grid-template-columns: repeat(4, 1fr);
        padding-right: 0;
    }
}
```

On larger screens, the CTA row becomes horizontal and the footer links expand into four columns.

---

## 7. Overlay Styling

```css id="x3j9ls"
.overlay {
    background: rgb(0 0 0 / 45%);
    z-index: 1;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    display: grid;
    place-items: center;
}
```

This creates the dark backdrop behind the modal.

---

## 8. Overlay Animation

```css id="w8b2pf"
@keyframes overlay-in {
    0% {
        scale: 0 0.003;
    }
    33%,
    36% {
        scale: 1 0.003;
    }
    66%,
    100% {
        scale: 1 1;
    }
}
```

This animation makes the overlay expand into view smoothly.

---

## 9. Modal Styling

```css id="n7c5zh"
.modal {
    z-index: 2;
    width: 380px;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background: #ffffff;
    padding: 0 40px 20px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgb(0 0 0 / 24%);
}
```

This creates the centered popup card with rounded corners and shadow.

---

## 10. Modal Header

```css id="c4m9pd"
.modal header {
    background: linear-gradient(90deg, #9d50bb, #6e48aa);
    margin: -85px -20px 30px;
    border-radius: 12px;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    box-shadow: 0 16px 30px rgb(0 0 0 / 12%);
}
```

This gives the modal a bright header block that feels separate from the body.

---

## 11. Form Fields

```css id="l5q8zt"
.modal input {
    border: 0;
    background: #ececec;
    height: 56px;
    border-radius: 6px;
    font-family: inherit;
    padding: 0 20px;
    font-size: 16px;
}
```

This makes the inputs clean, soft, and easy to read.

---

## JavaScript Breakdown

## 1. State Tracking

```javascript id="p2f8vm"
let isOpen = null;
```

This keeps track of whether the modal is open or closed.

---

## 2. Element Selection

```javascript id="d3k9wr"
const overlay = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openModalBtn");
const modal = document.querySelector(".modal");
const signupBtn = document.getElementById("signupBtn");
const dialog = document.getElementById("modalDialog");
```

These lines grab the overlay, the modal, and both buttons.

---

## 3. Toggle Function

```javascript id="b8n4tz"
function toggleModal() {
    overlay.classList.remove("open", "closed");
    modal.classList.remove("open", "closed");

    void overlay.offsetWidth;

    if (!isOpen) {
        overlay.classList.add("open");
        modal.classList.add("open");
    } else {
        overlay.classList.add("closed");
        modal.classList.add("closed");
    }

    isOpen = !isOpen;
}
```

This is the main logic for opening and closing the modal.

It removes old animation classes first, forces a reflow with `offsetWidth`, then adds the correct animation class depending on the current state.

---

## 4. Event Listeners

```javascript id="k1z7xc"
openBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
signupBtn.addEventListener("click", toggleModal);
```

These make the modal open from the footer button and close when clicking the overlay or the sign-up button in the modal.

---

## 5. Stop Propagation

```javascript id="z9m2ql"
dialog.addEventListener("click", (e) => {
    e.stopPropagation();
});
```

This stops clicks inside the modal from bubbling to the overlay.

---

## How It Works

1. The page loads with the modal hidden
2. The footer section is visible at the bottom
3. The user clicks **Sign up free**
4. The overlay and modal animate into view
5. The user can close it by clicking the overlay or the modal button
6. The closing animation plays before it disappears
