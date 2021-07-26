const express = require('express');
require('dotenv').config()
require('./utils/sql/sql').connect();
const cookieParser = require('cookie-parser');
const appConfig = require('./utils/config').app;
const bodyParser = require('body-parser');
const cors = require('cors');
const {CORS_OPTIONS} = require('./utils/consts');
const app = express();

/********************ROUTES******************/
const userRoute = require('./routes/user.route');
const offerRoute = require('./routes/offer.route');
const offerTypeRoute = require('./routes/offer-type.route');

app.use(cors(CORS_OPTIONS));
app.use(cookieParser());
app.use(bodyParser.json())
app.use("/users", userRoute);
app.use("/offers", offerRoute);
app.use("/offerTypes", offerTypeRoute);

app.listen(appConfig.port, () => {
    console.info(`${appConfig.name} listening at http://localhost:${appConfig.port}`)
})
