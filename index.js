const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");

const typeDefs = readFileSync(
  "./typeDefs.graphql",
  "UTF-8"
);

const mocks = {
  Int: () => 40
}

const server = new ApolloServer({ typeDefs, mocks, mockEntireSchema: false });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
