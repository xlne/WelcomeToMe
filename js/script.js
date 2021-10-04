// function normalMode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }


// // Select the button
// const btn = document.querySelector(".navbar-button");

// // Select the stylesheet <link>
// const theme = document.querySelector("#theme-link");

// // Listen for a click on the button
// btn.addEventListener("click", function() {
  
//     // If the current URL contains "style.css"
//   if (theme.getAttribute("href") == "style.css") {
    
//     // ... then switch it to "dark-theme.css"
//     theme.href = "style-normal.css";
//   // Otherwise...
//   } else {
//     // ... switch it to "style.css"
//     theme.href = "style.css";
//   }
// });


// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
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