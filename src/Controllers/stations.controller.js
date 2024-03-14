import Stations from "../Services/stations.service.js";
import { appError, appSuccess } from "../Config/response.js";

const stations = new Stations();

export const getStations = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      console.log("Request body was empty, returning from controller layer");
      return appError(
        res,
        400,
        "Request body is empty",
        "Status code is required"
      );
    }
    if (!req.body.stationCode) {
      console.log("stationCode attribute is required");
      return appError(
        res,
        400,
        "Request body is empty",
        "Status code is required"
      );
    }
    const stationCode = req.body.stationCode.toUpperCase();
    const data = await stations.getStation(stationCode);
    return appSuccess(res, 200, data, "Station fetched successfully");
  } catch (error) {
    console.log("Error in getStations controller layer: ", error);
    return appError(res, 500, error.message, "Internal server error");
  }
};

export const trainsBetweenStations = async (req, res) => {
  try {
    const validationResult = validate(req.body);
    if (validationResult !== true) return validationResult;

    const { from, to, date } = req.body;
    const data = await stations.trainsBetweenStations({ from, to, date });

    return appSuccess(
      res,
      200,
      data.data,
      `Trains between ${from} and ${to} stations are fetched successfully for date ${date}`
    );
  } catch (error) {
    console.log("Error: ", error);
    return appError(res, 500, error.message, "Internal server error");
  }
};

const validate = (body) => {
  if (!body || Object.keys(body).length === 0) {
    return appError(
      400,
      "Request body is empty",
      "from, to and date parameters are required"
    );
  }
  if (!body.from) {
    return appError(
      400,
      "Payload validation error",
      "Attribute 'from' is required"
    );
  }
  if (!body.to) {
    return appError(
      400,
      "Payload validation error",
      "Attribute 'to' is required"
    );
  }
  if (!body.date || !isValidDateFormat(body.date)) {
    return appError(
      400,
      "Payload validation error",
      "Invalid date format. Date must be in YYYY-MM-DD format"
    );
  }
  return true;
};

const isValidDateFormat = (date) => {
  const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
  return dateFormat.test(date);
};

export const trainLiveStatus = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      console.log("Request body was empty, returning from controller layer");
      return appError(
        res,
        400,
        "Request body is empty",
        "trainBody attribute is required"
      );
    }
    if (!req.body.trainNumber) {
      return appError(
        400,
        "Payload validation error",
        "Attribute 'trainNumber' is required"
      );
    }
    const data = await stations.trainLiveStatus(req.body);
    return appSuccess(res, 200, data, "Train status fetched successfully");
  } catch (error) {
    console.log("Error in getStations controller layer: ", error);
    return appError(res, 500, error.message, "Internal server error");
  }
};

export const getFare = async (req, res) => {
  try {
    const validationResult = validateFare(req.body, res);
    if (validationResult !== true) {
      return validationResult;
    }
    const fare = await stations.fare(req.body);
    return appSuccess(res, 200, fare, "Fare fetched successfully");
  } catch (error) {
    console.error("Error fetching fare:", error);
    return appError(res, 500, "Internal server error", error.message);
  }
};

const validateFare = (body, res) => {
  if (!body || Object.keys(body).length === 0) {
    return appError(
      res,
      400,
      "Request body is empty",
      "trainBody attribute is required"
    );
  }
  if (!body.from || !body.to || !body.trainNumber) {
    return appError(
      res,
      400,
      "Payload validation error",
      "Attributes 'from', 'to', and 'trainNumber' are required"
    );
  }
  return true;
};
