<script>
  let { imageSrc = "", projectName = "Project name", year = "Year" } = $props();
</script>

<article class="project-card">
  <div class="project-image">
    <img alt={projectName} src={imageSrc} />
  </div>
  <div class="project-meta">
    <p class="project-name">{projectName}</p>
    <span class="project-separator">/</span>
    <p class="project-year">{year}</p>
  </div>
</article>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
    max-width: 665px;
  }

  .project-image {
    width: 100%;
    height: 403px;
    border-radius: var(--radius-m);
    overflow: hidden;
    position: relative;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .project-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    min-height: 28px;
    justify-content: flex-start;
  }

  .project-name,
  .project-year,
  .project-separator {
    margin: 0;
    font-family: var(--font-font-1);
    font-size: var(--unit-24);
    color: var(--color-content-primary);
  }

  .project-name {
    width: 142px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .project-year,
  .project-separator {
    color: var(--color-content-secondary);
  }
</style>