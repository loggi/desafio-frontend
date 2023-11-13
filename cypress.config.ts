import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    env: {
      baseUrl: 'http://localhost:3000'
    },
    setupNodeEvents() {}
  }
})
