import {gql } from "@apollo/client";
export const COORD_QUERY = gql`
  query ($bbox: String) {
  getCoords(bbox:$bbox)
}
 `;

 