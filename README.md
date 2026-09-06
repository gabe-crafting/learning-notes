# Learning

A static site of study notes. One folder per subject, one HTML page per lesson, no build step.

**Live: https://gabe-crafting.github.io/learning-notes/**

Published with GitHub Pages from `master` at the repository root — pushing to `master` redeploys it,
usually within a minute. `.nojekyll` keeps Pages from running the files through Jekyll.

Locally, open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 4173
```

## Layout

```
index.html            site home, lists every course
assets/
  style.css           shared styling (light + dark)
  courses.js          the manifest: courses and their lessons
  nav.js              builds breadcrumb, sidebar, card grids and prev/next from the manifest
java/                 Java course — 22 lessons + index.html
java-spring/          Spring Boot course — 16 lessons + index.html
ai-engineering/       AI engineering course — 21 lessons + index.html
```

Navigation is generated, so no page hard-codes links to other pages. Each page only says where it is:

```html
<body data-root="../" data-course="java" data-page="05-control-flow.html">
```

## Adding a lesson

1. Copy an existing lesson page into the course folder and rename it.
2. Update `<title>` and the `data-page` attribute on `<body>`.
3. Add an entry to that course's `lessons` array in `assets/courses.js` — position in the array sets the order.

## Adding a subject

1. `mkdir python`
2. Copy a course `index.html` into it, change `data-course` and the text.
3. Append a course object to `window.COURSES` in `assets/courses.js`:

```js
{
  id: "python",
  path: "python",
  title: "Python",
  blurb: "One sentence shown on the home page card.",
  lessons: [
    { file: "01-intro.html", title: "Getting started", desc: "Shown on the course page card." }
  ]
}
```

Nested folders work too — set `path: "java-spring/react"` for a sub-topic course and `data-root="../../"` on its pages.

## Conventions in the lesson pages

- `<div class="note">` — an aside worth knowing
- `<div class="warn">` — a trap that bites people
- `<div class="task">` — the practice exercises that close each lesson
- Escape `<` as `&lt;` inside code samples (generics, HTML, XML)
