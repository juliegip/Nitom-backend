export default ({ env }) => ({
  host: env("PROD_HOST"),
  port: env.int("PROD_PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
