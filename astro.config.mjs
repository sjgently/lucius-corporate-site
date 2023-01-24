import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    tailwind(),
    image(),
    mdx({
      drafts: true
    })
  ]
})
