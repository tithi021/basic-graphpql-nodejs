// This represents a root file.
// Import Packges
import express from 'express';
import { buildSchema } from 'graphql';
import graphqlHttp from 'express-graphql';

/* Here a simple schema is constructed using the GraphQL schema language (buildSchema). 
   More information can be found in the GraphQL spec release */
let schema = buildSchema(`
  type Query {
    postTitle: String,
    blogTitle: String
  }
`);

// Root provides a resolver function for each API endpoint
let root = {
  postTitle: () => {
    return 'Build a Simple GraphQL Server With Express and NodeJS';
  },
  blogTitle: () => {
    return 'Hello Afroza';
  }
};

const app = express();

app.use('/', graphqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true //Set to false if you don't want graphiql enabled
}));


// Up and Running at Port 3000
app.listen(3000, () => {
  console.log('A GraphQL API running at port 3000');
});
