module.exports = {
  apps: [
    {
      name: "strapi-app",
      script: "npm",
      args: "start",
      interpreter: "node",
      env_production: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        DATABASE_HOST: "127.0.0.1",
        DATABASE_PORT: 5432,
        DATABASE_NAME: "strapi_motin_prod",
        DATABASE_USERNAME: "julie",
        DATABASE_PASSWORD: "admin",
        DATABASE_SSL: false,
      },
    },
  ],
};
