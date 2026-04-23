<nav class="topbar">
  <div class="brand">
    <p class="brand-text">Frammemento</p>
  </div>
  <div class="menu">
    <a class="menu-link" href="/">About</a>
    <a class="menu-link" href="/">@frammemento</a>
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
  }
</style>