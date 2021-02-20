const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IMVufGNCNDdPhcqgX20BLpZSVO192t6XDeaWmEgluyefHZ3utaPsD6hD787pSkSEpvl0U9m0OcRtItKjMhCoEFJ00KpY6kV8e')

//API

//-App config
const app = express();

//-Middlewarts
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!! for this  amount',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })


})

//-Listen command
exports.api = functions.https.onRequest(app)


// example end point
// http://localhost:5001/challenge-eb23f/us-central1/api

// These are the set up needed to run cloud function in a express as a backend.