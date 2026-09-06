/* Builds the top bar, sidebar and prev/next pager from window.COURSES.
   A page only declares where it is:
     <body data-root="../" data-course="java" data-page="05-control-flow.html">
   Course index pages omit data-page. The site home omits both.
   Every course also has a notes page at <course>/notes.html — it is not a lesson,
   so it sits in its own block under the lesson list and closes the pager. */
(function () {
  var body = document.body;
  var root = body.dataset.root || "";
  var courseId = body.dataset.course;
  var pageFile = body.dataset.page;
  var course = (window.COURSES || []).filter(function (c) { return c.id === courseId; })[0];
  var NOTES = "notes.html";
  var onNotes = pageFile === NOTES;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }
  function href(file) { return root + course.path + "/" + file; }

  /* ---- top bar ---- */
  var bar = el("div", { class: "topbar" });
  bar.appendChild(el("a", { href: root + "index.html", text: "Learning" }));
  if (course) {
    bar.appendChild(el("span", { class: "sep", text: "/" }));
    bar.appendChild(el("a", { href: href("index.html"), text: course.title }));
    if (onNotes) {
      bar.appendChild(el("span", { class: "sep", text: "/" }));
      bar.appendChild(el("span", { class: "crumb", text: "Notes" }));
    } else if (pageFile) {
      var current = course.lessons.filter(function (l) { return l.file === pageFile; })[0];
      if (current) {
        bar.appendChild(el("span", { class: "sep", text: "/" }));
        bar.appendChild(el("span", { class: "crumb", text: current.title }));
      }
    }
  }
  var btn = el("button", { class: "menu-btn", type: "button", text: "Lessons" });
  btn.addEventListener("click", function () {
    var sb = document.querySelector(".sidebar");
    if (sb) { sb.classList.toggle("open"); }
  });
  bar.appendChild(btn);
  var mount = document.getElementById("topbar");
  if (mount) { mount.replaceWith(bar); } else { body.insertBefore(bar, body.firstChild); }

  /* ---- sidebar: lessons, then notes in its own block ---- */
  var sidebar = document.getElementById("sidebar");
  if (sidebar && course) {
    sidebar.appendChild(el("h2", { text: course.title }));
    var list = el("ol");
    course.lessons.forEach(function (lesson) {
      var link = el("a", { href: href(lesson.file), text: lesson.title });
      if (lesson.file === pageFile) { link.className = "active"; }
      list.appendChild(el("li", {}, [link]));
    });
    sidebar.appendChild(list);

    sidebar.appendChild(el("div", { class: "sidebar-extra" }, [
      el("h2", { text: "Yours" }),
      el("a", { class: "notes-link" + (onNotes ? " active" : ""), href: href(NOTES), text: "Notes" })
    ]));
  }

  /* ---- generated card grids ---- */
  var courseCards = document.getElementById("course-cards");
  if (courseCards) {
    (window.COURSES || []).forEach(function (c) {
      courseCards.appendChild(el("a", { class: "card", href: root + c.path + "/index.html" }, [
        el("h3", { text: c.title }),
        el("p", { text: c.blurb }),
        el("p", { text: c.lessons.length + " lessons" })
      ]));
    });
  }

  var lessonCards = document.getElementById("lesson-cards");
  if (lessonCards && course) {
    course.lessons.forEach(function (lesson, i) {
      lessonCards.appendChild(el("a", { class: "card", href: href(lesson.file) }, [
        el("h3", { text: (i + 1) + ". " + lesson.title }),
        el("p", { text: lesson.desc })
      ]));
    });
  }

  /* ---- prev / next pager ---- */
  var main = document.querySelector("main");
  if (main && course) {
    var idx = -1;
    course.lessons.forEach(function (l, i) { if (l.file === pageFile) { idx = i; } });
    var last = course.lessons[course.lessons.length - 1];
    var prev = null;
    var next = null;

    if (onNotes) {
      prev = last ? { file: last.file, title: last.title } : null;
    } else if (idx > 0) {
      prev = course.lessons[idx - 1];
      next = course.lessons[idx + 1] || { file: NOTES, title: "Notes" };
    } else if (idx === 0) {
      next = course.lessons[1] || { file: NOTES, title: "Notes" };
    } else {
      next = course.lessons[0];
    }

    var pager = el("nav", { class: "pager" });
    if (prev) {
      pager.appendChild(el("a", { href: href(prev.file) }, [
        el("span", { text: "Previous" }), el("strong", { text: prev.title })
      ]));
    } else if (idx > -1 || onNotes) {
      pager.appendChild(el("a", { href: href("index.html") }, [
        el("span", { text: "Back to" }), el("strong", { text: course.title + " overview" })
      ]));
    } else {
      pager.appendChild(el("span", {}));
    }
    if (next) {
      pager.appendChild(el("a", { href: href(next.file), style: "text-align:right" }, [
        el("span", { text: "Next" }), el("strong", { text: next.title })
      ]));
    }
    main.appendChild(pager);
  }
})();
