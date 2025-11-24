(function () {
  const html = document.documentElement;

  // Update theme toggle icons
  function updateIcons() {
    const isDark = html.classList.contains("dark");
    document.querySelectorAll(".theme-toggle").forEach(btn => {
      btn.textContent = isDark ? "☀️" : "🌙";
    });
  }

  // Load theme preference
  const stored = localStorage.getItem("theme");
  if (stored === "dark") html.classList.add("dark");
  else if (stored === "light") html.classList.remove("dark");
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    html.classList.add("dark");

  document.addEventListener("DOMContentLoaded", () => {
    updateIcons();

    // Highlight current page (desktop + mobile)
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a.nav-link").forEach(link => {
      const hrefPage = link.getAttribute("href").split("/").pop();
      if (hrefPage === currentPage) {
        link.classList.add("current");
      }
    });
  });

  // Global click listener
  document.addEventListener("click", (e) => {
    // Toggle theme
    if (e.target.closest(".theme-toggle")) {
      html.classList.toggle("dark");
      localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
      updateIcons();
    }

    // Toggle mobile menu
    if (e.target.closest("#menuToggle")) {
      const menu = document.getElementById("mobileMenu");
      const btn = document.getElementById("menuToggle");
      menu.classList.toggle("hidden");
      btn.classList.toggle("hamburger-open");
    }
  });

  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".theme-toggle")) {
      e.preventDefault();
      e.target.click();
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.closest("#menuToggle")) {
      e.preventDefault();
      e.target.click();
    }
  });
})();
