import { createApp, type Component } from "vue"
import "./assets/main.css"
import App from "./App.vue"

import router from "./router"
import * as LucideIcons from "lucide-vue-next"

const app = createApp(App)

// register Lucide icons globally
Object.entries(LucideIcons).forEach(([name, component]) => {
  if (typeof component === "object" || typeof component === "function") {
    app.component(name, component as Component)
  }
})

app.use(router)
app.mount("#app")
