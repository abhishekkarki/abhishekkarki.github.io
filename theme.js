(function () {
  const root = document.documentElement;
  const STORAGE_KEY = 'theme';

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || getSystemTheme();
  }

  // Apply data-theme before paint — CSS ::after handles the button label
  root.setAttribute('data-theme', getTheme());

  window.__toggleTheme = function () {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    root.setAttribute('data-theme', next);
  };

  // Reading time — only runs on pages with article content
  document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content');
    const timeEl = document.querySelector('.reading-time');
    if (content && timeEl) {
      const words = content.innerText.trim().split(/\s+/).length;
      const minutes = Math.ceil(words / 220);
      timeEl.textContent = minutes + ' min read';
    }
  });
})();
