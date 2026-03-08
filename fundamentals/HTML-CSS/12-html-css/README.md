# Glassmorphism Login Form

## Overview

This project builds a **modern login form with a glassmorphism UI effect** using pure HTML and CSS.

The design features:

* Frosted glass container
* Blurred background effect
* Input fields with icons
* Remember-me option
* Register link
* Centered layout

No JavaScript is used.

---

# What This Code Does

The page displays a login form centered on the screen with:

* Username and password fields
* Icons inside inputs
* Checkbox for remembering login
* Forgot password link
* Login button
* Register account link

The container uses **blur + transparency** to simulate glass.

---

# Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS backdrop-filter
* Icon fonts from Font Awesome
* Google Fonts

---

# File Structure

```
index.html
style.css
```

---

# HTML Structure

Main layout:

```html
<div class="container">
    <form>
        <h1>Login</h1>

        <div class="input-box">
            <input type="text">
            <i class="fa-solid fa-user"></i>
        </div>

        <div class="input-box">
            <input type="password">
            <i class="fa-solid fa-lock"></i>
        </div>

        <div class="remember-forgot"></div>

        <button class="btn">Login</button>

        <div class="register-link"></div>
    </form>
</div>
```

Structure meaning:

* `.container` → glass card
* `.input-box` → input wrapper with icon
* `.remember-forgot` → utility section
* `.btn` → login button
* `.register-link` → signup link

---

# CSS Breakdown

## Page Background

```css
body {
    background: url(...) no-repeat center/cover;
}
```

The background image fills the screen and creates contrast for the glass card.

---

## Centering the Form

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

Flexbox centers the login container.

---

# Glassmorphism Effect

This is the key part.

```css
.container {
    border: 2px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(18px);
}
```

Two things create the glass illusion:

### Transparent Border

```css
rgba(255,255,255,0.15)
```

Simulates light reflection on glass.

### Background Blur

```css
backdrop-filter: blur(18px)
```

Blurs everything **behind the container**.

Result → frosted glass look.

---

# Input Field Design

Each input is wrapped in `.input-box`.

```css
.input-box {
    position: relative;
}
```

This allows the icon to be positioned inside the field.

Input styling:

```css
.input-box input {
    padding: 10px 40px 10px 15px;
}
```

Extra right padding creates space for the icon.

Icon placement:

```css
.input-box i {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
}
```

That keeps icons vertically centered.

---

# Login Button

```css
.btn {
    background: #fff;
    color: #333;
}
```

Bright button contrasts with the dark background.

Hover effect:

```css
.btn:hover {
    background: #f2f2f2;
}
```

Subtle interaction feedback.

---

# Utility Section

The **Remember / Forgot** section uses flexbox:

```css
.remember-forgot {
    display: flex;
    justify-content: space-between;
}
```

This pushes:

* checkbox left
* forgot password link right

---

# Features

* Glassmorphism UI design
* Icon inputs
* Responsive centered layout
* Input placeholder styling
* Hover interactions
* Clean form hierarchy

---

# Advanced Concepts Used

* `backdrop-filter` blur
* Transparent border layering
* Absolute positioning inside inputs
* Flexbox spacing
* Background image scaling

---