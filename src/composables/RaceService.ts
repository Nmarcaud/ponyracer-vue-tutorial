import RaceModel from "@/models/RaceModel";
import axios from "axios";

export function useRaceService() {
  return {
    list(): Promise<Array<RaceModel>> {
      
      
      axios.get<Array<RaceModel>>('https://ponyracer.ninja-squad.com/api/races')
        .then(response => {
          console.log(response.data)
          return response.data;
        })
      

      /*
      const getData = async () => {
        try {
            const resp = await axios.get<Array<RaceModel>>('https://ponyracer.ninja-squad.com/api/races');
            console.log(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
        */
    
      

      // TODO return a Promise of an array of 2 races
      return Promise.resolve();
      
    }
  }
}