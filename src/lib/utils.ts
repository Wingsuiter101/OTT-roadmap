/**
 * Get the full path for an asset, including the base path when deployed to GitHub Pages
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Return the full path with base path
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}

