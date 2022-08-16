import express from 'express'; 
import { coordinateController } from '../controller/coordinateController';
const coordinateRoute = express()
coordinateRoute.use('/coordinates',  coordinateController)
module.exports = coordinateRoute