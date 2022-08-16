import { generateCoordinatesFromBBox } from "../../utils";
export const coordinatesResolver = {
    getCoords: args => {
        return `${JSON.stringify(generateCoordinatesFromBBox(args.bbox))}`
    },
}