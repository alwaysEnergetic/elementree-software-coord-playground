const { graphqlHTTP } = require('express-graphql');
import {coordinateSchema} from '../graphql/schema/coordinatesSchema';
import {coordinatesResolver} from '../graphql/resolvers/coordinatesResolver';
export const coordinateController = graphqlHTTP({
        schema: coordinateSchema,
        rootValue: coordinatesResolver,
        graphiql: true,
      });