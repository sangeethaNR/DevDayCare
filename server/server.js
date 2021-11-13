const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
// const typeDefs = require('./schemas/resolvers')
// const resolvers = require('./schemas/typeDefs')
const { authMiddleware } = require('./utils/auth');
const {buildASTSchema} = require("graphql")

const schema = buildASTSchema(typeDefs)

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// app.use("/graphql", graphqlHTTP({
//   schema,
//   rootValue: resolvers,
//   graphiql: true
// }))

// const loggingMiddleware = (req, res, next) => {
//   authMiddleware(req)
//   next()
// }

// app.use(loggingMiddleware)

server.start().then(() => {
  server.applyMiddleware({ app });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});