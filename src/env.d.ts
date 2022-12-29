/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly ENV_VAR_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
