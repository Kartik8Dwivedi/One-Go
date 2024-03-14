import dotenv from "dotenv";

import rateLimiter from "./ratelimiter.js";

dotenv.config();

export default {
  PORT: process.env.PORT,
  RateLimiter: rateLimiter,
  StationsURI: process.env.STATIONS_URI,
  RapidAPIKey: process.env.RAPID_API_KEY,
  RapidAPIHost: process.env.RAPID_API_HOST,
  TrainBetweenStationsURI: process.env.TRAINS_BETWEEN_STATIONS_URI,
  TrainLiveStatusURI: process.env.TRAIN_LIVE_STATUS_URI,
  FareURI: process.env.TRAIN_FARE_URI,
};