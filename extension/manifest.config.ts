import { ManifestV3Export } from "@crxjs/vite-plugin"
import { loadEnv } from "vite"

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "")

const BASE_URL = env.VITE_API_URL

if (!BASE_URL) {
  throw new Error("VITE_API_URL is not defined")
}

const API_ORIGIN = new URL(BASE_URL).origin

const manifest: ManifestV3Export = {
  manifest_version: 3,

  name: "ClipMind",

  description: "AI-powered clipboard manager and personal knowledge assistant.",

  version: "1.0.0",

  action: {
    default_popup: "index.html",
  },

  permissions: ["storage", "activeTab"],

  host_permissions: [`${API_ORIGIN}/*`],
}

export default manifest
