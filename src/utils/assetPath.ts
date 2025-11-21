/**
 * Helper function to get asset paths that work with Astro's base path configuration
 * In development, you can set base to '/' in astro.config.mjs for easier testing
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with slash, or use root if base is '/'
  const baseWithSlash = base === '/' ? '' : base.endsWith('/') ? base : `${base}/`;
  return `${baseWithSlash}${cleanPath}`;
}

