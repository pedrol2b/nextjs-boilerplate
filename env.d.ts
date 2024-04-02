declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      DEFAULT_HTTP_REQUEST_TIMEOUT: string
    }
  }
}

export {}
