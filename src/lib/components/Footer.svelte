<script>
  let { logoSrc = "" } = $props();
</script>

<footer class="footer">
  <div class="footer-logo">
    <img alt="Politecnico logo" src={logoSrc} />
  </div>
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
    transition: filter 0.2s ease;
  }

  :global(html[data-theme='light']) .footer-logo img {
    filter: brightness(0) saturate(100%);
  }
</style>