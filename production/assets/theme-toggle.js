(function () {
  var key = "theme";
  var root = document.documentElement;
  var saved = localStorage.getItem(key) || "dark";
  root.setAttribute("data-theme", saved);

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(key, theme);
    var btn = document.getElementById("global-theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }

  function createToggle() {
    if (document.getElementById("global-theme-toggle")) return;
    var btn = document.createElement("button");
    btn.id = "global-theme-toggle";
    btn.className = "theme-toggle-btn";
    btn.type = "button";
    btn.textContent = saved === "dark" ? "Light mode" : "Dark mode";
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
    document.body.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createToggle);
  } else {
    createToggle();
  }
})();
