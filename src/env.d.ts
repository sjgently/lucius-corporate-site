/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly CONTENT_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
