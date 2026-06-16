import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard Vite + React SPA config. Build output goes to `dist/` (Vite default),
// which is what DeployHQ's framework detection reports as the "Subdirectory to
// deploy from" for spa_vite_react.
export default defineConfig({
  plugins: [react()],
})
