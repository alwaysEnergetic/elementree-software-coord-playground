import express from 'express';  
const cors = require("cors");
const app = express();
const coordinateRoute =  require('./routes/coordinateRoute');
app.use(cors());
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
}); 
app.use('/', coordinateRoute)
export default app;