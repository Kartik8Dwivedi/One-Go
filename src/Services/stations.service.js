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

  async autocomplete(query){
    try {
        const options = {
          method: "GET",
          url: Config.AutoCompleteURI,
          params: {
            input: query,
            radius: "500",
          },
          headers: {
            "X-RapidAPI-Key": Config.AutoCompleteKey,
            "X-RapidAPI-Host": Config.RapidAPIHostAutocomplete,
          },
        };

        const response = await axios.request(options);

        return response.data.predictions;
    } catch (error) {
        throw new Error(error);
    }
  }

  async translate({from, to, text}){
    try {
      const encodedParams = new URLSearchParams();
      encodedParams.set("from", from);
      encodedParams.set("to", to);
      encodedParams.set("text", text);
      const options = {
        method: "POST",
        url: Config.TranslateURI,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": Config.TranslateKEY,
          "X-RapidAPI-Host": Config.TranslateHost,
        },
        data: encodedParams,
      };

      const response = await axios.request(options);
      return response.data.trans;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getLanguages(){
    try {
      const options = {
        method: "GET",
        url: Config.LanguagesURI,
        headers: {
          "X-RapidAPI-Key": Config.TranslateKEY,
          "X-RapidAPI-Host": Config.TranslateHost,
        },
      };

      const response = await axios.request(options);

      return response.data;
    } catch (error) {
       throw new Error(error);
    }
  }

  async translateJson({ from, to, json }){
    try {
      const encodedParams = new URLSearchParams();
      encodedParams.set("from", from);
      encodedParams.set("to", to);
      encodedParams.set("json", json);
      encodedParams.set("protected_paths[0]", "extra.last_comment.author");

      const options = {
        method: "POST",
        url: Config.TranslateJsonUri,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": Config.TranslateKEY,
          "X-RapidAPI-Host": Config.TranslateHost,
        },
        data: encodedParams,
      };

      const response = await axios.request(options);

      return response.data.trans;
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default Stations;
