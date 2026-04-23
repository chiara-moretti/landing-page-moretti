<script>
  let { year = "2026", selected = false } = $props();
</script>

<button class:selected={selected} class="filter-chip">
  <span>{year}</span>
</button>

<style>
  .filter-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-2) var(--spacing-4);
    border-radius: var(--radius-full);
    background: transparent;
    border: none;
    font-family: var(--font-font-1);
    font-size: var(--unit-24);
    color: var(--color-content-primary);
    cursor: pointer;
    white-space: nowrap;
  }

  .filter-chip.selected {
    background: var(--color-filter-background-selected);
    color: var(--color-filter-content-selected);
  }
</style>