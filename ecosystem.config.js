module.exports = {
  apps: [
    {
      name: "NuxtWeb",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      env: {
        PORT: 3002,
        NODE_ENV: "production",
      },
    },
  ],
};
