# WebGL Animated Login Card

## Overview

This project is a **modern login interface with a real-time animated WebGL background** built using:

* HTML
* CSS
* Three.js
* Custom GLSL shaders

It combines:

* Responsive card layout
* Social login buttons
* Clean dark UI
* Animated shader tunnel effect

This is not just CSS animation — this is GPU-rendered graphics.

---

## What This Code Does

This project creates:

* A centered login card
* A hero section with animated shader background
* Google & Apple login buttons
* Email & password inputs
* Responsive layout (stacked on small screens, split on larger screens)

The background animation is rendered using a fragment shader running on WebGL.

---

## Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS Clamp
* Media Queries
* Three.js
* GLSL (Vertex + Fragment Shader)
* WebGL

---

# File Structure

```
index.html   → Layout
styles.css   → Styling
main.js      → Three.js + Shader animation
```

---

# HTML Structure Breakdown

## Main Layout

```html
<div class="card">
    <div class="hero">
        <div class="bg"></div>
    </div>
    <form>...</form>
</div>
```

### Structure Meaning

* `.card` → Main container
* `.hero` → Top/side visual section
* `.bg` → WebGL canvas mount point
* `form` → Login UI

---

# CSS Architecture

---

## Layout System

```css
.card {
    display: flex;
    flex-direction: column;
}
```

On small screens:

* Hero on top
* Form below

On larger screens:

```css
@media (width >= 640px) {
    .card {
        flex-direction: row;
    }
}
```

Now:

* Hero left
* Form right

Clean responsive split layout.

---

## Responsive Width

```css
width: clamp(300px, 85vw, 500px);
```

This ensures:

* Never too small
* Never too wide
* Smooth scaling

That’s professional responsive design.

---

## Social Buttons

```css
.social-btn {
    display: flex;
    justify-content: center;
    gap: 10px;
}
```

They are:

* Horizontally aligned on small screens
* Vertical on larger screens

```css
@media (width >= 485px) {
    .socials {
        flex-direction: column;
    }
}
```

Good UX decision.

---

## Divider Line Trick

```css
.or::before {
    height: 1px;
    width: 100%;
}
```

Then:

```css
.or::after {
    content: "Or";
    background: #0f0f0f;
}
```

That creates the classic:

────────── Or ──────────

Clean technique.

---

# The WebGL / Shader Part

This is the advanced part.

---

## Vertex Shader

```glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

Very basic.
Just passes geometry positions to the GPU.

No manipulation here.

---

## Fragment Shader (The Real Magic)

```glsl
uniform float time;
uniform vec2 resolution;
```

You pass:

* Current time
* Screen resolution

Then:

```glsl
vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y * 0.6;
```

This:

* Normalizes pixel coordinates
* Centers the effect

---

### Tunnel Effect Logic

```glsl
float r = length(uv);
float y = fract(r / 0.005 / (r - 0.01) + time);
```

This creates:

* Circular radial distortion
* Animated wave based on time

Then:

```glsl
gl_FragColor = mix(tunnelColor, abyssColor, x) * y;
```

This blends:

* White tunnel glow
* Black abyss center

Result:

A dynamic animated vortex / tunnel effect.

Rendered directly on GPU every frame.

---

# JavaScript Architecture (Simple Overview)

You:

1. Create scene
2. Create orthographic camera
3. Create full-screen plane
4. Attach shader material
5. Animate with requestAnimationFrame
6. Update uniform `time`

That’s it.

The animation runs entirely on GPU.

---

# Features

* Real-time GPU animation
* Fully responsive layout
* Clean modern UI
* Social login buttons
* Custom shader background
* Dynamic resizing support
* Smooth scaling

---

# Advanced Concepts Used

* WebGL rendering
* Orthographic camera
* ShaderMaterial
* Uniform variables
* Fragment shader math
* GPU time-based animation
* Resolution-aware rendering
* CSS clamp()
* Responsive flex layouts