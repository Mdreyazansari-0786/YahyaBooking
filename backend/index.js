
import Amadeus from 'amadeus';
import bodyParser from 'body-parser'
import cors from "cors"
import express from "express"

const app = express();
const PORT = 5000;
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:4200'
}));

//list citys
const amadeus = new Amadeus({
    clientId: 'Ke6yTB67R8HS1Ygw3QgHX0MKKmk4VNuq',
    clientSecret: 'lezxiWt7nPD5mHGu',
});
app.get(`/city-and-airport-search/:parameter`, (req, res) => {
    const parameter = req.params.parameter;
    // Which cities or airports start with the parameter variable
    amadeus.referenceData.locations
        .get({
            keyword: parameter,
            subType: Amadeus.location.any,
        })
        .then(function (response) {
            res.send(response.result);
        })
        .catch(function (response) {
            res.send(response);
        });
});

//flight search

app.get(`/flight-search`, (req, res) => {
    const originCode = req.query.originCode;
    const destinationCode = req.query.destinationCode;
    const dateOfDeparture = req.query.dateOfDeparture
    // Find the cheapest flights
    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: originCode,
        destinationLocationCode: destinationCode,
        departureDate: dateOfDeparture,
        adults: '1',
        max: '7'
    }).then(function (response) {
        res.send(response.result);
        console.log(response.result);
    }).catch(function (response) {
        res.send(response);
    });
});


app.get('/',(req, res) => [
    res.send("hello from /")
])

app.listen(PORT, () =>
    console.log(`Server is running on  port: http://localhost:${PORT}`)
);