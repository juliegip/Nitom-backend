module.exports = {
  apps: [
    {
      name: "strapi-app",
      script: "npm",
      args: "start",
      interpreter: "node",
      env: {
        APP_KEYS: "myKeyA,myKeyB",
        API_TOKEN_SALT: "tobemodified",
        ADMIN_JWT_SECRET: "tobemodified",
        TRANSFER_TOKEN_SALT: "tobemodified",
        JWT_SECRET: "Al8A3kQKS6h1Vp1+kd1lWQ==",
        HOST: "0.0.0.0",
        PORT: 1337,
        DATABASE_CLIENT: "postgres",
        DATABASE_HOST: "localhost",
        DATABASE_PORT: 5432,
        DATABASE_NAME: "strapi_motin_dev",
        DATABASE_USERNAME: "postgres",
        DATABASE_PASSWORD: "admin",
        DATABASE_SSL: false,
      },
      env_production: {
        NODE_ENV: "production",
        APP_KEYS: "myKeyA,myKeyB",
        API_TOKEN_SALT: "tobemodified",
        ADMIN_JWT_SECRET: "tobemodified",
        TRANSFER_TOKEN_SALT: "tobemodified",
        JWT_SECRET: "Al8A3kQKS6h1Vp1+kd1lWQ==",
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
