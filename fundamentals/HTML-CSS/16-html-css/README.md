# Popup Box

## Overview

This project is a **popup success box** built using only **HTML and CSS**.

It uses a hidden checkbox to control the popup state, so when the user clicks **Submit**, the popup appears.
Clicking the close button hides it again. No JavaScript is needed.

---

## What This Code Does

This project implements:

* A **submit button**
* A **popup overlay**
* A **success message card**
* A **CSS-only open/close toggle**
* Smooth **fade and slide transitions**

It is a clean example of using **checkbox hack**, **positioning**, and **CSS transitions**.

---

## Technologies Used

* HTML5
* CSS3
* CSS Transitions
* Flexbox
* Google Fonts
* CSS Checkbox Toggle

---

## File Structure

```bash
index.html   → Popup structure
styles.css   → Styling and popup animation
```

---

## HTML Breakdown

### Main Layout

```html
<input type="checkbox" id="popup-toggle" hidden>
<label for="popup-toggle" class="submit-btn">Submit</label>

<div class="submit-overlay">
    <div class="submit">
        <div class="submit-header">
            <h2><span>✓</span>Submitted!</h2>
        </div>
        <div class="submit-content">
            <p>Thank you. Your application has been successfully submitted.</p>
            <br>
            <p class="estimated-time">Estimated completion date: <span class="date">03-05-2026</span></p>
        </div>
        <label for="popup-toggle" class="close-submit-btn">&times;</label>
    </div>
</div>
```

### Structure Meaning

* `#popup-toggle`
  Hidden checkbox that stores the popup state.

* `.submit-btn`
  A label tied to the checkbox. Clicking it opens the popup.

* `.submit-overlay`
  Full-screen background layer behind the popup.

* `.submit`
  The popup box itself.

* `.submit-header`
  The title area with the success message.

* `.submit-content`
  The main message content.

* `.close-submit-btn`
  A label tied to the checkbox. Clicking it closes the popup.

---

## CSS Breakdown

## 1. Global Font Setup

```css
html {
    font-family: 'Poppins', sans-serif;
}

* {
    font-family: inherit;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
```

This sets the whole page to use **Poppins** and removes default spacing.

---

## 2. Page Layout

```css
body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background-color: #a5b1c2;
    position: relative;
}
```

This centers the content and gives the page a soft background.

---

## 3. Submit Button Styling

```css
.submit-btn {
    background-color: #1e272e;
    color: #4bcffa;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    transition: box-shadow 0.3s ease-in-out,
                transform 0.3s ease-in-out;
}
```

This creates a strong dark button with bright text and smooth animation.

---

## 4. Button Hover Effect

```css
.submit-btn:hover {
    box-shadow: 0 0 10px #485460, 0 0 30px #485460;
    transform: scale(1.05);
}
```

This gives the button a glow and slightly enlarges it on hover.

---

## 5. Popup Overlay

```css
.submit-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a5b1c2;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.9s ease, visibility 0.9s;
}
```

This creates a full-screen overlay that stays hidden until the checkbox is checked.

Important parts:

* `opacity: 0` hides it visually
* `visibility: hidden` removes it from view
* `pointer-events: none` blocks clicks when hidden

---

## 6. Popup Box Styling

```css
.submit {
    position: relative;
    background-color: #1e272e;
    padding: 20px;
    border-radius: 8px;
    max-width: 300px;
    transform: translateY(50px);
    box-shadow: 15px 30px 30px rgba(0, 0, 0, 0.5);
    transition: transform 0.5s ease;
}
```

This styles the popup card with a dark background, rounded corners, and a shadow for depth.

---

## 7. Header Styling

```css
.submit-header {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4bcffa;
    margin-bottom: 20px;
}
```

This centers the heading and gives it a bright accent color.

---

## 8. Check Icon Styling

```css
.submit-header span {
    padding: 0 8px;
    margin-right: 10px;
    background-color: #4bcffa;
    color: #fff;
    border-radius: 50%;
    border: 2px solid #fff;
}
```

This makes the check mark look like a badge.

---

## 9. Content Styling

```css
.submit-content {
    color: #fff;
}
```

This keeps the text readable on the dark popup background.

---

## 10. Estimated Time Styling

```css
.submit-content .estimated-time {
    font-size: 12px;
}

.submit-content .estimated-time .date {
    color: #4bcffa;
}
```

This makes the date section smaller and highlights the actual date.

---

## 11. Close Button Styling

```css
.close-submit-btn {
    position: absolute;
    background-color: transparent;
    border: none;
    color: #f00;
    top: 3px;
    right: 8px;
    cursor: pointer;
    font-size: 24px;
}
```

This places the close button in the top-right corner and makes it clickable.

---

## 12. Close Button Hover Effect

```css
.close-submit-btn:hover {
    color: #ddd;
}
```

This changes the close icon color slightly on hover.

---

## 13. Open Popup State

```css
#popup-toggle:checked ~ .submit-overlay {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

#popup-toggle:checked ~ .submit-overlay .submit {
    transform: translateY(0);
}
```

This is the main logic behind the popup.

When the checkbox is checked:

* the overlay becomes visible
* clicks are enabled
* the popup card slides into place

---

## How It Works

1. The page loads with the popup hidden
2. The user clicks **Submit**
3. The hidden checkbox gets checked
4. The popup overlay appears
5. The popup card slides up into place
6. The user clicks the close button
7. The checkbox gets unchecked and the popup disappears