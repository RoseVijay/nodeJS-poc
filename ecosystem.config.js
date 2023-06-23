module.exports = {
  apps: [
    {
      name: "Transcriber",
      script: "server.js",
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: "one two",
      instances: 2,
      autorestart: true,
      watch: false,
      //    max_memory_restart: '1G',
      //    wait_ready: true,
      //    listen_timeout: 50000,
      //    kill_timeout: 15000,
      ignore_watch: ["media/"],
      env: {
        NODE_ENV: "production",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
