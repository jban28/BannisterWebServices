import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  blogPost: a
    .model({
      title: a.string().required(),
      lastRevised: a.date().required(),
      category: a.string().default('Uncategorized'),
      tags: a.string().array(),
      summary: a.string(),
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