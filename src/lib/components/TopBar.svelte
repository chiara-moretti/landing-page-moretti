<script>
  import { onMount } from 'svelte';
  let isMobileMenuOpen = $state(false);

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
  });

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') ?? 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
</script>

<nav class="topbar">
  <div class="brand">
    <a class="brand-text" href="./">Frammemento</a>
  </div>
  <div class="mobile-actions">
    <button
      class="mobile-menu-button"
      type="button"
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMobileMenuOpen}
      aria-controls="topbar-menu"
      onclick={toggleMobileMenu}
    >
      {#if isMobileMenuOpen}
        <span class="mobile-menu-close-icon" aria-hidden="true">✕</span>
      {:else}
        <span class="mobile-menu-open-icon" aria-hidden="true">☰</span>
      {/if}
    </button>
    <button class="theme-toggle-button mobile-theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
      <svg class="theme-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    </button>
  </div>

  <div id="topbar-menu" class="menu" class:menu-open={isMobileMenuOpen}>
    <a class="menu-link" href="./" onclick={closeMobileMenu}>About</a>
    <a class="menu-link" href="./" onclick={closeMobileMenu}>@frammemento</a>
    <button class="theme-toggle-button desktop-theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
      <svg class="theme-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    </button>
  </div>
</nav>

<style>
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: var(--spacing-5) var(--spacing-0);
  }

  .brand,
  .menu {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
  }

  .menu {
    gap: var(--spacing-6);
  }

  .mobile-menu-button {
    display: none;
  }

  .mobile-actions {
    display: none;
  }

  .desktop-theme-toggle {
    display: inline-flex;
  }

  .brand-text,
  .menu-link {
    font-family: var(--font-font-1);
    font-size: var(--unit-24);
    color: var(--color-link-default);
    text-decoration: none;
    white-space: nowrap;
    line-height: 1;
    transition: color 0.2s ease;
  }

  .brand-text:hover,
  .menu-link:hover {
    color: var(--color-filter-background-selected);
  }

  .theme-toggle-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border-radius: 50%;
    background: var(--color-content-primary);
    color: var(--color-background-primary);
    border: 1px solid var(--color-content-secondary);
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .theme-toggle-button:hover {
    opacity: 0.8;
  }

  .theme-toggle-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    .topbar {
      position: relative;
      align-items: center;
      row-gap: 0;
      padding-top: var(--spacing-1);
      padding-bottom: var(--spacing-1);
      min-height: 2rem;
    }

    .brand {
      width: auto;
    }

    .mobile-actions {
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2);
      height: 2rem;
    }

    .mobile-menu-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border: none;
      background: transparent;
      color: var(--color-link-default);
      font-size: 1.4rem;
      line-height: 1;
      cursor: pointer;
      padding: 0;
    }

    .mobile-menu-button span {
      display: block;
      line-height: 1;
      transform: none;
    }

    .mobile-menu-open-icon {
      font-size: 1.4rem;
    }

    .mobile-menu-close-icon {
      display: inline-block;
      position: relative;
      font-size: 1rem;
      top: 3px;
      transform: none;
    }

    .mobile-theme-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem !important;
      height: 2rem !important;
      min-width: 2rem !important;
      min-height: 2rem !important;
      padding: 0;
      border: none;
      border-radius: 0;
      background: transparent;
      color: var(--color-link-default);
      line-height: 1;
    }

    .desktop-theme-toggle {
      display: none;
    }

    .brand-text,
    .menu-link {
      font-size: 0.95rem;
    }

    .brand-text {
      display: inline-flex;
      align-items: center;
      min-height: 2rem;
      transform: translateY(3px);
    }

    .menu {
      position: absolute;
      top: calc(100% + var(--spacing-2));
      right: 0;
      display: none;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--spacing-2);
      min-width: 180px;
      padding: var(--spacing-2);
      border: 1px solid var(--color-content-secondary);
      background: var(--color-background-primary);
      z-index: 20;
    }

    .menu.menu-open {
      display: flex;
    }

    .menu-link {
      width: 100%;
    }

    .theme-toggle-button {
      width: 2rem;
      height: 2rem;
    }

    .theme-toggle-icon {
      width: 1.2rem;
      height: 1.2rem;
    }

    .mobile-theme-toggle .theme-toggle-icon {
      width: 1rem;
      height: 1rem;
      transform: translateY(3px);
    }
  }

  @media (min-width: 769px) {
    .mobile-theme-toggle {
      display: none;
    }
  }
</style>