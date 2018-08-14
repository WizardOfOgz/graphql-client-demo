import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://graphql-rails-demo.herokuapp.com/graphql",
});

export default client;
