// Auto-detect system theme and allow switching if desired
(function() {
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
  // Detect system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');

	document.addEventListener('DOMContentLoaded', function() {
    // Show/hide button on scroll
		window.onscroll = function() {
		  const btn = document.getElementById("scrollUpBtn");
		  if (!btn) return;
		  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			btn.style.display = "block";
		  } else {
			btn.style.display = "none";
		  }
    };

    // Scroll to top when clicked
    const btn = document.getElementById("scrollUpBtn");
    if (btn) {
      btn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  });

})();