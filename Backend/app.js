require("dotenv").config();
let express = require('express')
const leadRoutes = require("./routes/lead");
const mongoose = require("mongoose");
const cors = require("cors");
const HttpError = require("./Exceptions/http-error");
var port = 8080;
const uri = process.env.CONNECTION_URI;

const app = express();
app.use(express.json());
app.use(cors());
startServer(app);

app.use("/leads", leadRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Resource not found', 404);
    next(error);
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', err => console.log(err));

async function startServer(app) {
    await mongoose.connect(uri);

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}!`);
    });
};