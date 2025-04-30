// === LocalStorage: Check and Apply Theme ===
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme); // Apply saved theme
    }
  };
  
  // === Toggle Dark/Light Mode ===
  function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
  
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
  
    // Save the theme to localStorage
    localStorage.setItem("theme", newTheme);
  }
  
  // Add event listener to theme toggle button
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  
  // === Animation on Div Click ===
  function animateDiv() {
    const div = document.getElementById("animatedDiv");
    div.classList.toggle("grow");
  }
  
  // Add event listener to animate div button
  document.getElementById("animateButton").addEventListener("click", animateDiv);
  