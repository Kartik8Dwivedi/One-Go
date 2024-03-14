import express from "express";
import {
  getStations,
  trainsBetweenStations, 
  trainLiveStatus,
  getFare,
} from "../../Controllers/stations.controller.js";

const router = express.Router();

router.get("/stations", getStations);
router.get("/trains", trainsBetweenStations);
router.get("/liveStatus", trainLiveStatus);
router.get("/fare", getFare);

export default router;
