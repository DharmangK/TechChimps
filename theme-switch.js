// Auto-detect system theme and allow switching if desired
(function() {
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
  // Detect system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
  // Optional: add a manual theme switcher, e.g. via a button
  // Example:
  // document.getElementById('theme-toggle').onclick = function() {
  //   const current = document.documentElement.getAttribute('data-theme');
  //   setTheme(current === 'light' ? 'dark' : 'light');
  // };
})();