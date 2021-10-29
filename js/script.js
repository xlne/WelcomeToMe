// Function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// Function to toggle between normal mode and orange mode
function toggleTheme() {
   if (localStorage.getItem('theme') === ':root'){
       setTheme('theme-normal');
   } else {
       setTheme(':root');
   }
}

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-normal') {
       setTheme('theme-normal');
   } else {
       setTheme(':root');
   }
})();