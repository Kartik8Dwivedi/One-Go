import dotenv from "dotenv";

import rateLimiter from "./ratelimiter.js";

dotenv.config();

export default {
  PORT: process.env.PORT,
  RateLimiter: rateLimiter,
  StationsURI: process.env.STATIONS_URI,
  RapidAPIKey: process.env.RAPID_API_KEY,
  RapidAPIHost: process.env.RAPID_API_HOST,
  RapidAPIHostAutocomplete: process.env.RAPID_API_HOST_AUTOCOMPLETE,
  TrainBetweenStationsURI: process.env.TRAINS_BETWEEN_STATIONS_URI,
  TrainLiveStatusURI: process.env.TRAIN_LIVE_STATUS_URI,
  FareURI: process.env.TRAIN_FARE_URI,
  AutoCompleteURI: process.env.AUTO_COMPLETE_URI,
  AutoCompleteKey: process.env.RAPID_API_KEY_AUTOCOMPLETE,
  TranslateURI: process.env.TRANSLATE_URI,
  TranslateKEY: process.env.RAPID_API_KEY_TRANSLATE,
  TranslateHost: process.env.RAPID_API_HOST_TRANSLATE,
  LanguagesURI: process.env.LANGUAGES_URI,
};