const ham = document.querySelector(".ham");
const x = document.querySelector(".x");
const sidebar = document.querySelector(".sidebar");

ham.addEventListener("click", () => {
  sidebar.style.display = "block";  // Show the sidebar
  ham.style.display = "none";       // Hide the hamburger icon
  x.style.display = "block";        // Show the close (x) icon
});

x.addEventListener("click", () => {
  sidebar.style.display = "none";   // Hide the sidebar
  ham.style.display = "block";      // Show the hamburger icon
  x.style.display = "none";         // Hide the close (x) icon
});
