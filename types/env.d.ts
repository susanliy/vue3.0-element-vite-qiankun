/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PORT: number;
  readonly VITE_USE_MOCK: boolean;
  readonly VITE_USE_PWA: boolean;
  readonly VITE_PUBLIC_PATH: string;
  readonly VITE_PROXY: [string, string][];
  readonly VITE_GLOB_APP_TITLE: string;
  readonly VITE_GLOB_APP_SHORT_NAME: string;
  readonly VITE_USE_CDN: boolean;
  readonly VITE_DROP_CONSOLE: boolean;
  readonly VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  readonly VITE_LEGACY: boolean;
  readonly VITE_USE_IMAGEMIN: boolean;
  readonly VITE_GENERATE_UI: string;
  readonly VITE_DOCKER_ORIGIN?: string;
  readonly VITE_OPEN_VCONSOLE?: boolean;
  readonly VITE_BASE_URL: string;
  readonly VITE_TOP_DOMAIN: string;
  readonly VITE_DEV_REDIRECT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
