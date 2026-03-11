/* app.js — awesome-agentic-hardening site */
(function () {
  "use strict";

  /* ===== THEME TOGGLE ===== */
  var currentTheme = (function () {
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch (_e) {
      return "light";
    }
  })();

  var root = document.documentElement;
  root.setAttribute("data-theme", currentTheme);

  var toggleBtn = document.querySelector("[data-theme-toggle]");
  if (toggleBtn) {
    updateToggleIcon(toggleBtn, currentTheme);
    toggleBtn.addEventListener("click", function () {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", currentTheme);
      updateToggleIcon(toggleBtn, currentTheme);
    });
  }

  function updateToggleIcon(btn, theme) {
    btn.setAttribute(
      "aria-label",
      "Switch to " + (theme === "dark" ? "light" : "dark") + " mode"
    );
    btn.innerHTML =
      theme === "dark"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  /* ===== MOBILE MENU ===== */
  var menuBtn = document.getElementById("mobile-menu-btn");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("header__nav--open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    /* Close mobile menu when clicking a nav link */
    nav.querySelectorAll("a[href^='#']").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("header__nav--open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ===== HEADER SCROLL BEHAVIOR ===== */
  var header = document.getElementById("header");
  var lastScrollY = 0;
  var ticking = false;

  function onScroll() {
    var scrollY = window.scrollY;
    if (scrollY > 100) {
      if (scrollY > lastScrollY && scrollY > 200) {
        header.classList.add("header--hidden");
      } else {
        header.classList.remove("header--hidden");
      }
    } else {
      header.classList.remove("header--hidden");
    }
    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  /* ===== SCROLL ANIMATION FALLBACK ===== */
  if (!CSS.supports("animation-timeline", "scroll()")) {
    var fadeEls = document.querySelectorAll(".fade-in");
    if (fadeEls.length > 0 && "IntersectionObserver" in window) {
      var obs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in--visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      fadeEls.forEach(function (el) {
        obs.observe(el);
      });
    } else {
      /* If no IntersectionObserver, just show everything */
      fadeEls.forEach(function (el) {
        el.classList.add("fade-in--visible");
      });
    }
  }

  /* ===== HERO CANVAS — HEXAGONAL GRID ===== */
  var canvas = document.getElementById("hero-canvas");
  if (canvas) {
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var hexSize = 30;
    var animFrame;
    var hexagons = [];
    var mouse = { x: -1000, y: -1000 };

    function resizeCanvas() {
      var rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generateHexagons(rect.width, rect.height);
    }

    function generateHexagons(w, h) {
      hexagons = [];
      var cols = Math.ceil(w / (hexSize * 1.75)) + 2;
      var rows = Math.ceil(h / (hexSize * 1.55)) + 2;
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var x = c * hexSize * 1.75;
          var y = r * hexSize * 1.55;
          if (c % 2 === 1) y += hexSize * 0.775;
          hexagons.push({
            x: x,
            y: y,
            baseOpacity: 0.04 + Math.random() * 0.06,
            phase: Math.random() * Math.PI * 2,
            opacity: 0,
          });
        }
      }
    }

    function drawHexagon(cx, cy, size) {
      ctx.beginPath();
      for (var i = 0; i < 6; i++) {
        var angle = (Math.PI / 3) * i - Math.PI / 6;
        var hx = cx + size * Math.cos(angle);
        var hy = cy + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
    }

    var time = 0;
    function animate() {
      time += 0.005;
      var w = canvas.width / dpr;
      var h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      var isDark = currentTheme === "dark";
      var strokeColor = isDark ? "255, 255, 255" : "91, 141, 239";

      for (var i = 0; i < hexagons.length; i++) {
        var hex = hexagons[i];
        var breathe = Math.sin(time + hex.phase) * 0.02;
        var targetOpacity = hex.baseOpacity + breathe;

        /* Mouse proximity glow */
        var dx = hex.x - mouse.x;
        var dy = hex.y - mouse.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          targetOpacity += (1 - dist / 200) * 0.15;
        }

        hex.opacity += (targetOpacity - hex.opacity) * 0.05;

        ctx.strokeStyle =
          "rgba(" + strokeColor + ", " + hex.opacity + ")";
        ctx.lineWidth = 1;
        drawHexagon(hex.x, hex.y, hexSize);
        ctx.stroke();
      }

      animFrame = requestAnimationFrame(animate);
    }

    canvas.addEventListener(
      "mousemove",
      function (e) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      },
      { passive: true }
    );

    canvas.addEventListener(
      "mouseleave",
      function () {
        mouse.x = -1000;
        mouse.y = -1000;
      },
      { passive: true }
    );

    resizeCanvas();
    animate();

    var resizeTimer;
    window.addEventListener(
      "resize",
      function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeCanvas, 200);
      },
      { passive: true }
    );

    /* Pause animation when hero is not visible */
    if ("IntersectionObserver" in window) {
      var heroObs = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting) {
            if (!animFrame) animate();
          } else {
            if (animFrame) {
              cancelAnimationFrame(animFrame);
              animFrame = null;
            }
          }
        },
        { threshold: 0 }
      );
      heroObs.observe(document.getElementById("hero"));
    }
  }

  /* ===== SMOOTH SCROLL for nav links ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
