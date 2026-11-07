/**
 * Resolves any relative asset path to an absolute path that works seamlessly
 * on both GitHub Pages (/MLN122/) and Localhost (/).
 */
export function resolveAssetUrl(path) {
  if (!path) return '';
  if (/^(https?:|data:|\/\/)/i.test(path)) return path;

  // Clean path: strip leading ./ or /
  const cleanPath = path.replace(/^\.?\//, '');

  // Detect GitHub Pages deployment
  const isGitHubPages = typeof window !== 'undefined' && 
    (window.location.hostname.includes('github.io') || window.location.pathname.startsWith('/MLN122'));

  if (isGitHubPages) {
    return `/MLN122/${cleanPath}`;
  }

  // Local development / root domain
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${cleanPath}`;
}

