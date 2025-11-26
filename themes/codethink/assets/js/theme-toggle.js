// CodeThink Theme Toggle
(function() {
  const STORAGE_KEY = 'ct-theme';
  const THEME_AUTO = 'auto';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  
  // Get theme from localStorage or default to auto
  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY) || THEME_AUTO;
  }
  
  // Get effective theme based on stored preference and system preference
  function getEffectiveTheme() {
    const stored = getStoredTheme();
    if (stored === THEME_AUTO) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT;
    }
    return stored;
  }
  
  // Apply theme to document
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
  
  // Initialize theme on page load
  function initTheme() {
    applyTheme(getEffectiveTheme());
  }
  
  // Toggle between light, dark, and auto
  function toggleTheme() {
    const current = getStoredTheme();
    let next;
    
    if (current === THEME_AUTO) {
      next = THEME_LIGHT;
    } else if (current === THEME_LIGHT) {
      next = THEME_DARK;
    } else {
      next = THEME_AUTO;
    }
    
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next === THEME_AUTO ? getEffectiveTheme() : next);
    updateToggleButton();
  }
  
  // Update toggle button text
  function updateToggleButton() {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    
    const theme = getStoredTheme();
    const icons = {
      auto: '🌓',
      light: '☀️',
      dark: '🌙'
    };
    
    button.textContent = `${icons[theme]} ${theme}`;
  }
  
  // Listen for system theme changes when in auto mode
  function watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
      if (getStoredTheme() === THEME_AUTO) {
        applyTheme(getEffectiveTheme());
      }
    });
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      updateToggleButton();
      watchSystemTheme();
      
      const button = document.getElementById('theme-toggle');
      if (button) {
        button.addEventListener('click', toggleTheme);
      }
    });
  } else {
    initTheme();
    updateToggleButton();
    watchSystemTheme();
    
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
    }
  }
})();
