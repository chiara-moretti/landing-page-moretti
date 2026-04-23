<<<<<<< Updated upstream
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
=======
<script>
  import TopBar from '$lib/components/TopBar.svelte';
  import TabNavigation from '$lib/components/TabNavigation.svelte';
  import Card from '$lib/components/Card.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Landing from '../content/landing.md';

  /** @typedef {{ name: string; year: string; imageSrc: string }} ProjectMetadata */
  /** @type {Record<string, { metadata: ProjectMetadata }>} */
  const projectModules = import.meta.glob('../content/projects/*.md', { eager: true });
  /** @type {ProjectMetadata[]} */
  const projects = Object.values(projectModules)
    .map((module) => module.metadata)
    .sort((a, b) => a.name.localeCompare(b.name));
  let selectedYear = $state('2026');
  const filteredProjects = $derived(projects.filter((project) => project.year === selectedYear));
  /** @param {string} year */
  const handleSelectYear = (year) => {
    selectedYear = year;
  };

  const footerLogo = 'https://www.figma.com/api/mcp/asset/0782722e-c92e-4185-9c49-b617b7322c94';
</script>

<main class="page-shell">
  <div class="topbar-slot">
    <TopBar />
  </div>

  <section class="hero-section">
    <div class="hero-copy">
      <Landing />
    </div>
  </section>

  <section class="content-section">
    <TabNavigation selectedYear={selectedYear} onSelectYear={handleSelectYear} />

    <div class="card-grid">
      {#each filteredProjects as project}
        <Card imageSrc={project.imageSrc} projectName={project.name} year={project.year} />
      {/each}
    </div>

    <Footer logoSrc={footerLogo} />
  </section>
</main>

<style>
  .page-shell {
    position: relative;
    min-height: 100vh;
    width: 100%;
    background: var(--color-background-primary);
    color: var(--color-content-primary);
    overflow-x: hidden;
  }

  .topbar-slot {
    padding: var(--spacing-7) var(--spacing-12) 0;
  }

  .hero-section {
    padding: var(--spacing-6) var(--spacing-12) 0;
  }

  .hero-copy {
    max-width: 893px;
    font-family: var(--font-font-1);
    font-size: var(--unit-40);
    line-height: 1;
    white-space: normal;
    color: var(--color-content-primary);
  }

  .hero-copy :global(p) {
    margin: 0;
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-7);
    align-items: flex-start;
    padding: 0 var(--spacing-12) var(--spacing-4);
    margin-top: var(--spacing-7);
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 26px;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    .hero-section {
      padding-left: var(--spacing-5);
      padding-right: var(--spacing-5);
    }

    .topbar-slot,
    .content-section {
      padding-left: var(--spacing-5);
      padding-right: var(--spacing-5);
    }

    .card-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
>>>>>>> Stashed changes
