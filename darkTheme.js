 // Function to toggle the dark theme
 function toggleDarkTheme() {
    const body = document.body;
    const darkTheme = document.getElementById('dark-theme');

    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      darkTheme.disabled = true; // Disable the dark theme CSS
    } 
    else {
      body.classList.add('dark-theme');
      darkTheme.disabled = false; // Enable the dark theme CSS
    }
  }

  // Add a click event listener to the theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', toggleDarkTheme);