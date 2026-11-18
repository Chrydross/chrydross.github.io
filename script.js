// Wait until the HTML is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. DARK MODE TOGGLE (with saved preference)
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  // Apply saved theme on page load
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = " Light Mode";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Save choice to browser storage
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? " Light Mode" : " Dark Mode";
  });

  // 2. SMOOTH SCROLLING FOR NAVIGATION LINKS
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. PORTFOLIO CATEGORY FILTER
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Update active button styling
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      // Show or hide items based on category
      portfolioItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filterValue === "all" || filterValue === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

});
