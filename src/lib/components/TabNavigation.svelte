<script>
  import Filter from './Filter.svelte';
</script>

<div class="tabs-row">
  <Filter year="2026" selected={true} />
  <Filter year="2025" />
  <Filter year="2024" />
</div>

<style>
  .tabs-row {
    display: flex;
    gap: var(--spacing-5);
    width: 100%;
    flex-wrap: wrap;
    padding: 0 var(--spacing-12);
  }

  @media (max-width: 1200px) {
    .tabs-row {
      padding: 0 var(--spacing-5);
    }
  }
</style>