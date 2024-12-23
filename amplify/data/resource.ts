import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  blogPost: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [
        allow.publicApiKey().to(['read'])
    ]),
});

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});