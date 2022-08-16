import * as turf from '@turf/turf' 
export const generateCoordinatesFromBBox =  (bbox:any) =>{
      const poly = turf.bboxPolygon(bbox.split(","));
      return poly;
 } 