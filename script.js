// Get references to the theme toggle and related elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const modeLabel = document.getElementById('mode-label');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

// Check if there's a saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

// Check the system's default theme using matchMedia
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

// If a theme is saved in localStorage, use it
if (savedTheme) {
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
    modeLabel.textContent = 'Dark Mode';
    lightIcon.style.opacity = '0';
    darkIcon.style.opacity = '1';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.checked = false;
    modeLabel.textContent = 'Light Mode';
    lightIcon.style.opacity = '1';
    darkIcon.style.opacity = '0';
  }
} else {
  // If no theme is saved, check the system's preference
  if (prefersDarkScheme) {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
    modeLabel.textContent = 'Dark Mode';
    lightIcon.style.opacity = '0';
    darkIcon.style.opacity = '1';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.checked = false;
    modeLabel.textContent = 'Light Mode';
    lightIcon.style.opacity = '1';
    darkIcon.style.opacity = '0';
  }
}

// Add event listener for theme toggle
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark-mode');
    modeLabel.textContent = 'Dark Mode';
    lightIcon.style.opacity = '0';
    darkIcon.style.opacity = '1';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    modeLabel.textContent = 'Light Mode';
    lightIcon.style.opacity = '1';
    darkIcon.style.opacity = '0';
    localStorage.setItem('theme', 'light');
  }
});

// Listen for system theme changes and update accordingly
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    // System switched to dark mode
    body.classList.add('dark-mode');
    themeToggle.checked = true;
    modeLabel.textContent = 'Dark Mode';
    lightIcon.style.opacity = '0';
    darkIcon.style.opacity = '1';
    localStorage.setItem('theme', 'dark');
  } else {
    // System switched to light mode
    body.classList.remove('dark-mode');
    themeToggle.checked = false;
    modeLabel.textContent = 'Light Mode';
    lightIcon.style.opacity = '1';
    darkIcon.style.opacity = '0';
    localStorage.setItem('theme', 'light');
  }
});

