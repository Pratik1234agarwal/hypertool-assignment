const { ApolloServer, gql } = require("apollo-server");
const Log = require("./models/Log");
require("./db");

const dateScalar = require("./Scalars/DateScalar");

const typeDefs = gql`
  scalar Date

  type Log {
    id: String
    createdAt: Date!
    severity: String
    component: String
    context: String
    message: String
    tags: [String!]
  }

  type Query {
    getLogs: [Log]
  }

  type Mutation {
    createLogs(
      id: String!
      severity: String
      component: String
      context: String
      message: String!
      tags: [String!]
    ): Log
  }
`;

const resolvers = {
  Query: {
    getLogs: async (_parent, _args, _context, _info) => {
      const logs = await Log.find();
      return logs;
    },
  },
  Mutation: {
    createLogs: async (_, args) => {
      const log = await Log.create(args);
      return log;
    },
  },
  Date: dateScalar,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    return { Log };
  },
});

server.listen().then(({ url }) => {
  console.log(`Application running at ${url}`);
});
