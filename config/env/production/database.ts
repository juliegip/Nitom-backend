import path from "path";

export default ({ env }) => {
  const client = env("DATABASE_CLIENT");
  console.log("Database client:", env("DATABASE_CLIENT"));
  console.log("Database host:", env("PROD_DATABASE_HOST"));
  console.log("Database host:", env("PROD_DATABASE_PORT"));

  const connections = {
    postgres: {
      connection: {
        host: env("PROD_DATABASE_HOST"),
        port: env.int("PROD_DATABASE_PORT"),
        database: env("PROD_DATABASE_NAME"),
        user: env("PROD_DATABASE_USERNAME"),
        password: env("PROD_DATABASE_PASSWORD"),
        ssl: env.bool("PROD_DATABASE_SSL"),
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int(
        "DATABASE_CONNECTION_TIMEOUT",
        1000000000
      ),
    },
  };
};
