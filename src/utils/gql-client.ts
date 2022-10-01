import { GraphQLClient } from 'graphql-request'

export const gqlClient = new GraphQLClient(
  import.meta.env.CONTENT_API_URL as string,
  {
    headers: {}
  }
)
