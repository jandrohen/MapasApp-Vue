import { defineConfig } from '@vue/cli-service';

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
          "^/mapBox": {
            target: process.env.VUE_APP_API_MAPBOX_URL,
            changeOrigin: true,
            logLevel: "debug",
          }
        },
      },
    });
    