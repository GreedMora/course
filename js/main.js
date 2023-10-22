const themeSwitch = document.getElementById("themeSwitch");
const root = document.querySelector(":root");

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    root.style.setProperty("--text-color: #fff;");
    root.style.setProperty("--background-color: #090d1f;");
    root.style.setProperty("--switcher-background: #fff;");
    root.style.setProperty("--switcher-indicator: #090d1f;");
  } else {
    root.style.setProperty("--text-color: #1a1a1a;");
    root.style.setProperty("--background-color: #fff;");
    root.style.setProperty("--switcher-background: #090d1f;");
    root.style.setProperty("--switcher-indicator: #fff;");
  }
});
