const express = require ('express');
const path = require ('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const fetch = require('node-fetch');


//use environmental variables
dotenv.config({ path: './config.env' });

// connect to MongoDB cluster
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

connectDB();

// TEST CODE - CAN DELETE WHEN FINISHED
// const tripController = require('./controllers/itinerary_controller');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.urlencoded({ extended: true })); //parse urlencoded bodies

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/trip', require('./routes/itineraryRoutes'));



app.post('/getInfo', (req,res) => {
  console.log('reqbody', req.body)
  const url = `https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${req.body.name}&address=${req.body.zipcode}&language=en&key=FDAAA163EC34403D9E9B38D6C9522965`;
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      const dataURL = `https://api.content.tripadvisor.com/api/v1/location/${data.data[0].location_id}/details?language=en&currency=USD&key=FDAAA163EC34403D9E9B38D6C9522965`;
      const options = {method: 'GET', headers: {accept: 'application/json'}};
      return fetch(dataURL, options)})
    .then(res => res.json())
    .then(json => {
        res.locals.hotelData = json
        res.json(res.locals.hotelData)
      })
    .catch(err => console.error('error:' + err))
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'../index.html'))
})


app.listen(port, () => console.log(`Server is running on ${port}`));