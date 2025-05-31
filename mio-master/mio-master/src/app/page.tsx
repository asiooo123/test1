// This file can be removed if you are using the (default) group for your homepage.
// Next.js will automatically route '/' to '/(default)/page.tsx'.
// However, to be explicit or if you have specific root configurations, you might keep it.

// For this setup, we assume the (default) group handles the root page.
// If you need this file, it should re-export or render the content from (default)/page.tsx.

// Option 1: Re-export (if Next.js version supports this well for pages)
// export { default } from './(default)/page';

// Option 2: Render the component directly (more robust)
import HomePage from './(default)/page';

export default function Home() {
  return <HomePage />;
}

// If (default)/layout.tsx is intended to be the primary layout for the home page,
// and src/app/layout.tsx is the very root layout (html, body tags),
// this setup is fine. The (default) group is a route group that doesn't affect the URL.
