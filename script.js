// Check localStorage for theme preference on page load
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme); // Apply saved theme
    }
  };
  
  // Function to toggle theme and save to localStorage
  function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
  
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
  
    // Save the theme to localStorage
    localStorage.setItem("theme", newTheme);
  }
  
  // Example button to toggle theme
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  