import axios from "axios";
import Config from "../Config/serverConfig.js";
class Stations {
  async getStation(data) {
    try {
      const options = {
        method: "GET",
        url: Config.StationsURI,
        params: { query: data },
        headers: {
          "X-RapidAPI-Key": Config.RapidAPIKey,
          "X-RapidAPI-Host": Config.RapidAPIHost,
        },
      };
      const response = await axios.request(options);
      return response.data.data;
    } catch (error) {
      console.log("Error in station service layer", error);
      throw new Error(error);
    }
  }

  async trainsBetweenStations({ from, to, date }) {
    try {
      const options = {
        method: "GET",
        url: Config.TrainBetweenStationsURI,
        params: {
          fromStationCode: from,
          toStationCode: to,
          dateOfJourney: date,
        },
        headers: {
          "X-RapidAPI-Key": Config.RapidAPIKey,
          "X-RapidAPI-Host": Config.RapidAPIHost,
        },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.log(
        "Error in service layer while fetching trains between stations: ",
        error
      );
      throw new Error(error);
    }
  }

  async trainLiveStatus({ trainNumber }) {
    try {
      const options = {
        method: "GET",
        url: Config.TrainLiveStatusURI,
        params: {
          trainNo: trainNumber,
          startDay: "1",
        },
        headers: {
          "X-RapidAPI-Key": Config.RapidAPIKey,
          "X-RapidAPI-Host": Config.RapidAPIHost,
        },
      };
      const response = await axios.request(options);
      return response.data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fare({ from, to, trainNumber }) {
    try {
      const options = {
        method: "GET",
        url: Config.FareURI,
        params: {
          trainNo: trainNumber,
          fromStationCode: from,
          toStationCode: to,
        },
        headers: {
          "X-RapidAPI-Key": Config.RapidAPIKey,
          "X-RapidAPI-Host": Config.RapidAPIHost,
        },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default Stations;
