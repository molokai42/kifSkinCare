import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:8081/graphql" }),
  cache: new InMemoryCache()
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById("root"));
registerServiceWorker();
