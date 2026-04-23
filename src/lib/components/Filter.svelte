<script>
  let { year = "2026", selected = false, onSelect = () => {} } = $props();
</script>

<button type="button" class:selected={selected} class="filter-chip" onclick={() => onSelect(year)}>
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
    transition: background-color 0.2s ease;
  }

  .filter-chip:hover {
    background: #424242;
  }

  :global(html[data-theme='light']) .filter-chip:hover {
    color: #ffffff;
  }

  .filter-chip.selected {
    background: var(--color-filter-background-selected);
    color: var(--color-filter-content-selected);
  }

  .filter-chip.selected:hover {
    background: var(--color-filter-background-selected);
  }
</style>