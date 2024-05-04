//Controller to call the Open AI API for information on destinations for the itinerary
// import { Configuration, OpenAI } from "openai";
const OpenAI = require('openai');
const express = require('express');
const app = express();
const Itinerary = require('../models/Itinerary');
const { recompileSchema } = require('../models/User');

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

const tripController = {
  // buildTrip - To fetch itinerary from API request to Open AI
  async buildTrip(req, res, next) {
    console.log("buildTrip invoked");
    const { destination, startDate, endDate, budget, hotelBudget } = req.body;
    res.locals.tripName = `${destination} from ${startDate} to ${endDate}`;
    // Update prompt below to reflect req.body information - DONE (J.H.)
    const parsedEndDate = Date.parse(endDate)
    const parsedStartDate = Date.parse(startDate)
    const timeDiff = Math.round((parsedEndDate - parsedStartDate) / (1000 * 60 * 60 * 24))
    console.log("We have " + timeDiff + " days")
    

    // const prompt = `Make an itinerary for a honeymoon to ${destination} from ${startDate} until ${endDate}.` +  
    const prompt = `Make an itinerary for a honeymoon to ${destination} for ${timeDiff} days` +
    `I do not want to spend more than ${budget} dollars on activities and ${hotelBudget} on hotels.` +
    `Organize the itinerary by the following times of day: morning and evening.`+
    `Recommend specific places of interest with their specific addresses and zipcodes or postal codes as well as a short description` +
    `Limit cross-city commutes by grouping places of interest by geography for each day. Please provide three hotel suggestions. ` + 
    `Give the names of the hotels with their addresses and their zipcodes or postal codes.` +
    `Please provide seven restaurant suggestions. ` + 
    `Give the names of the restaurants with their addresses and their zipcodes or postal codes.` +
     `Output the response in json format following this schema:
     {
        itinerary: {
            day number: [{
              timeOfDay: string,
              placeName: string,
              address: string,
              zipcode: string,
              description: string,
         }]
        },
        hotels: [{
          name: string
          address: string
          zipcode: string
          }]
        restaurants: [{
          name: string
          address: string
          zipcode: string
          }]
     }
     Thank you.`;

    // console.log(prompt);
    try {
      const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a helpful travel planning assistant."},
            {
              "role": "user", 
              "content": prompt,
            }],
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
      });
      
      //console.log(JSON.parse(completion.choices[0].message.content));
      res.locals.itinerary = JSON.parse(completion.choices[0].message.content);
      console.log((res.locals.itinerary))
      return next();
    } catch (err) {
      console.log(err);
    }
  },

  // Build a new individual activity within a trip
  async buildNewActivity(req, res, next) {
    const {itinerary, activity, description, address} = req.body;
    const prompt = `Thank you so much for helping me plan my honeymoon. This is the current itinerary you generated for me: ${itinerary}. 
                    I would like make a slight change. I would like to replace the activity ${activity} that has a description ${description}
                    and a location ${address} with a different activity. I would like the activity to fit the location and theme of the current
                    trip that I showed you the itinerary for.
                    Please output the response in JSON format following this schema:
                    {placeName: string,
                     description: string,
                     address: string,
                     zipcode: string}
                    Thank you, I'm so excited for my honeymoon.`
    try {
      const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a helpful travel planning assistant."},
            {
              "role": "user", 
              "content": prompt,
            }],
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
      });
      res.locals.newActivity = JSON.parse(completion.choices[0].message.content);
      return next();
    } catch (error) { console.log('Error in buildNewActivity: ', error)};
  },

  // saveTrip - To save the contents of the generated itinerary into the database
  saveTrip(req, res, next) {
    console.log("req body")
    console.log(req.body)
    console.log("res locals")
    console.log(res.locals.itinerary)
    // const { email } = req.body;
    Itinerary.create({
      // email: req.body.email,
      user: res.locals.user._id,
      tripName: res.locals.tripName,
      destination: req.body.destination,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      trip: JSON.stringify(res.locals.itinerary),
    })
      .then (result => {
        //console.log(result)
        
        res.locals.itinerary.tripId = result["_id"]
        console.log("itinerary successfully saved in database");
        return next();
      })
      .catch (err => {
        console.log("could not add itinerary to database - saveTrip middleware");
        console.error("saveTrip ERROR =>", err);
      })
  },
  
  // deleteTrip - To delete the itinerary from the database based on the ObjectId
  deleteTrip(req, res, next) {
    console.log(req.body);
    console.log("deleteTrip Middleware - tripId:", req.body.tripId);
    Itinerary.findOneAndDelete({ "_id" : `${req.body.tripId}` })
      .then( result => {
        if(result) {
          console.log("Itinerary deleted from the database - deleteTrip");
        } else {
          console.log("ObjectId not found. Nothing deleted");
        }
        return next();
      })
      .catch (err => {
        console.log("could not locate itinerary based on id passed in - deleteTrip middleware");
        console.error("deleteTrip ERROR =>", err);
      })
  },

  // Update trip itinerary in database
  patchTrip(req, res, next) {
    const {itinerary, hotels, restaurants, tripId} = req.body;
    const tripObj = { itinerary: itinerary, hotels: hotels, restaurants: restaurants };
    console.log('tripObj', tripObj)
    Itinerary.findByIdAndUpdate(tripId, {trip: JSON.stringify(tripObj)})
      .then(result => {
        next();
      })
      .catch (err => {console.log('Error updating trip in DB: ', err)});
  },

  // retrieveAll - To retrieve all trips saved for a specific user
  retrieveAll(req, res, next) {
    console.log('user', res.locals.user)
    Itinerary.find({
      "user": res.locals.user._id,
    })
      .then (result => {
        res.locals.allTrips = result;
        return next();
      })
      .catch (err => {
        console.log("could not retrieve all trips - retrieveAllTrips middleware");
        console.error("retrieveAllTrips ERROR =>", err);
      })
  },
}

module.exports = tripController;