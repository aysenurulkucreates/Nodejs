const { buildSchema } = require('graphql');

module.exports = buildSchema(`
   type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        createdAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        posts: [Post!]!
    }

    input UserInputData {
        email: String!
        name: Int!
        password: String!
    }

    type RootMutation {
        createUser(userInput: UserInputData!): User
    }

    schema {
        mutation: RootMutation
    }
    `);