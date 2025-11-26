// CodeThink Mermaid Initialization
(function() {
  // Check if page has mermaid diagrams
  function hasMermaidDiagrams() {
    return document.querySelectorAll('pre code.language-mermaid, .mermaid').length > 0;
  }
  
  // Get current theme for mermaid
  function getMermaidTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    return theme === 'dark' ? 'dark' : 'default';
  }
  
  // Initialize Mermaid
  function initMermaid() {
    if (!hasMermaidDiagrams()) return;
    
    // Load Mermaid from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    script.type = 'module';
    script.onload = function() {
      import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs')
        .then(module => {
          const mermaid = module.default;
          mermaid.initialize({
            startOnLoad: true,
            theme: getMermaidTheme(),
            securityLevel: 'loose',
          });
          
          // Convert code blocks to mermaid divs
          document.querySelectorAll('pre code.language-mermaid').forEach(block => {
            const pre = block.parentElement;
            const code = block.textContent;
            const div = document.createElement('div');
            div.className = 'mermaid';
            div.textContent = code;
            pre.replaceWith(div);
          });
          
          // Render mermaid diagrams
          mermaid.run();
        });
    };
    document.head.appendChild(script);
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }
})();
