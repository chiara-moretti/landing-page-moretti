declare module '*.md' {
  import type { SvelteComponent } from 'svelte';
  const component: typeof SvelteComponent;
  export const metadata: Record<string, unknown>;
  export default component;
}
