module.exports = {
  apps: [
    {
      name: "strapi-app",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
        PROD_HOST: "0.0.0.0",
        PROD_DATABASE_HOST: "127.0.0.1",
        PROD_DATABASE_PORT: 5432,
        PROD_DATABASE_NAME: "strapi_motin_prod",
        PROD_DATABASE_USERNAME: "julie",
        PROD_DATABASE_PASSWORD: "admin",
        PROD_DATABASE_SSL: false,
      },
    },
  ],
};
