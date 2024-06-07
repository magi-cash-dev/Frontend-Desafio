/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_JOKE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
