const toggleSwitch = document.getElementById("switch");

const toggleColorTheme = (e) => {
  toggleSwitch.classList.toggle("switch-off");

  if (e.currentTarget.classList.contains("switch-off")) {
    document.documentElement.setAttribute("color-theme", "light");
    localStorage.setItem("color-theme", "light");
  } else {
    document.documentElement.setAttribute("color-theme", "dark");
    localStorage.setItem("color-theme", "dark");
  }
};

toggleSwitch.addEventListener("click", toggleColorTheme);
