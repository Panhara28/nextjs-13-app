import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://cms-development-graphql.uat.moc.gov.kh",
  cache: new InMemoryCache(),
});
