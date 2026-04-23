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
    <div class="hover-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
  </div>
</article>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    width: 100%;
    max-width: 665px;
    position: relative;
  }

  .project-image {
    width: 100%;
    height: 403px;
    border-radius: var(--radius-m);
    overflow: hidden;
    position: relative;
  }

  .project-image::after {
    content: '';
    position: absolute;
    inset: 0;
    background: #ffffff;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  .hover-arrow {
    margin-left: auto;
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #000000;
    transform: translateY(14px);
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;
    pointer-events: none;
  }

  .hover-arrow svg {
    width: 24px;
    height: 24px;
  }

  :global(html[data-theme='dark']) .hover-arrow {
    color: #ffffff;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .project-card:hover .project-image::after {
    opacity: 0.25;
  }

  .project-card:hover .hover-arrow {
    transform: translateY(0);
    opacity: 1;
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