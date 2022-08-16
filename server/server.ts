import 'dotenv/config';
import app  from "./src/app";
require('dotenv').config();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Applications is running on port ${port}.`);
});