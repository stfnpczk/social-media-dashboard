const toggleSwitch = document.getElementById("switch");
const colorTheme = document.querySelector(".dark-theme");

const toggleColorTheme = (e) => {
  toggleSwitch.classList.toggle("switch-off");

  if (e.currentTarget.classList.contains("switch-off")) {
    document.body.className = "light-theme";
  } else {
    document.body.className = "dark-theme";
  }
};

toggleSwitch.addEventListener("click", toggleColorTheme);
