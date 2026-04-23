<script>
  let { logoSrc = "" } = $props();
</script>

<footer class="footer">
  <a class="footer-logo" href="https://www.polimi.it" target="_blank" rel="noopener noreferrer">
    <img alt="Politecnico logo" src={logoSrc} />
  </a>
</footer>

<style>
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: var(--spacing-4) 0;
  }

  .footer-logo {
    width: 201px;
    height: 78px;
    position: relative;
  }

  .footer-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  :global(html[data-theme='light']) .footer-logo img {
    filter: brightness(0) saturate(100%);
  }

  @media (max-width: 768px) {
    .footer {
      padding: var(--spacing-3) 0;
    }

    .footer-logo {
      width: 160px;
      height: 62px;
    }
  }
</style>