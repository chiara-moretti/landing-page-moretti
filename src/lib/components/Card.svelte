<script>
  let { imageSrc = "", projectName = "Project name", year = "Year" } = $props();
</script>

<article class="project-card">
  <div class="project-image">
    <img alt={projectName} src={imageSrc} />
  </div>
  <div class="project-meta">
    <p class="project-name">{projectName}</p>
    <div class="project-year-group">
      <span class="project-separator">/</span>
      <p class="project-year">{year}</p>
    </div>
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
    margin: 0 auto;
  }

  .project-image {
    width: 100%;
    aspect-ratio: 665 / 403;
    border-radius: 0 !important;
    overflow: hidden;
    position: relative;
    transition: border-radius 0.2s ease;
  }

  .project-image::after {
    content: '';
    position: absolute;
    inset: 0;
    background: #ffffff;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    border-radius: 0 !important;
  }

  .hover-arrow {
    margin-left: 0;
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
    border-radius: 0 !important;
    transition: border-radius 0.2s ease;
  }

  .project-card:hover .project-image::after {
    opacity: 0.25;
  }

  @media (hover: hover) and (pointer: fine) {
    .project-card:hover .project-image,
    .project-card:hover .project-image::after,
    .project-card:hover .project-image img {
      border-radius: var(--radius-m) !important;
    }
  }

  .project-card:hover .hover-arrow {
    transform: translateY(0);
    opacity: 1;
  }

  .project-meta {
    display: flex;
    align-items: center;
    gap: 0;
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
    flex: 0 1 auto; /* keep "/ year" attached right after the title */
    min-width: 0;
    white-space: normal;
    overflow: visible;
  }

  .project-year-group {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: var(--spacing-2); /* two visual spaces between title and "/ year" */
  }

  .hover-arrow {
    margin-left: auto; /* keep arrow at the far right */
  }

  .project-year,
  .project-separator {
    color: var(--color-content-secondary);
  }

  @media (max-width: 768px) {
    .project-card {
      gap: var(--spacing-2);
    }

    .project-meta {
      min-height: 24px;
      gap: 6px;
    }

    .project-name,
    .project-year,
    .project-separator {
      font-size: 1rem;
    }

    .project-name {
      max-width: none;
    }

    .hover-arrow,
    .hover-arrow svg {
      width: 20px;
      height: 20px;
    }
  }
</style>