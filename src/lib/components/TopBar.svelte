<script>
  import { onMount } from 'svelte';

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
</script>

<nav class="topbar">
  <div class="brand">
    <a class="brand-text" href="/">Frammemento</a>
  </div>
  <div class="menu">
    <a class="menu-link" href="/">About</a>
    <a class="menu-link" href="/">@frammemento</a>
    <button class="theme-toggle-button" onclick={toggleTheme} aria-label="Toggle theme">
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

  .brand-text,
  .menu-link {
    font-family: var(--font-font-1);
    font-size: var(--unit-24);
    color: var(--color-link-default);
    text-decoration: none;
    white-space: nowrap;
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
      flex-wrap: wrap;
      align-items: center;
      row-gap: var(--spacing-2);
      padding-top: var(--spacing-1);
      padding-bottom: var(--spacing-1);
    }

    .brand {
      width: 100%;
    }

    .menu {
      width: 100%;
      margin-left: 0;
      gap: var(--spacing-2);
      justify-content: space-between;
    }

    .brand-text,
    .menu-link {
      font-size: 0.95rem;
    }

    .menu-link {
      max-width: 42vw;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .theme-toggle-button {
      width: 2rem;
      height: 2rem;
    }

    .theme-toggle-icon {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
</style>