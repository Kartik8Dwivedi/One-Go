import express from "express";
import {
  getStations,
  trainsBetweenStations, 
  trainLiveStatus,
  getFare,
  autocomplete,
  translateText,
  getLanguages,
} from "../../Controllers/stations.controller.js";

const router = express.Router();

router.get("/stations", getStations);
router.get("/trains", trainsBetweenStations);
router.get("/liveStatus", trainLiveStatus);
router.get("/fare", getFare);
router.get("/autocomplete", autocomplete);
router.post("/translate", translateText)
router.get("/languages", getLanguages);


export default router;
