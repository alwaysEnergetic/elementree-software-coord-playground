 
var { buildSchema } = require('graphql');
export const coordinateSchema = buildSchema(`
  type Query {
    getCoords(bbox: String): String
  }
`);