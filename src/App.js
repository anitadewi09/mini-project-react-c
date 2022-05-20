import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Detail from "./Pages/Detail";
import HomePage from "./Pages/HomePage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://hardy-manatee-76.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "Clny5tRI1270MNeeBefFxUgd2B68PGpYPTsHoBDu7jYmJ6FXa0g7uUUtGvBdYJrC",
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/detailproduk/:id" element={<Detail />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
