<script>
  import Filter from './Filter.svelte';

  let { selectedYear = '2026', onSelectYear = () => {} } = $props();
</script>

<div class="tabs-row">
  <Filter year="2026" selected={selectedYear === '2026'} onSelect={onSelectYear} />
  <Filter year="2025" selected={selectedYear === '2025'} onSelect={onSelectYear} />
  <Filter year="2024" selected={selectedYear === '2024'} onSelect={onSelectYear} />
</div>

<style>
  .tabs-row {
    display: flex;
    gap: var(--spacing-5);
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0;
  }

  @media (max-width: 1200px) {
    .tabs-row {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    .tabs-row {
      gap: var(--spacing-2);
    }
  }
</style>