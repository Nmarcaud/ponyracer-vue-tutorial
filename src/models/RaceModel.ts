import { PonyModel } from "./PonyModel";

interface RaceModel {
  id: number,
  name: string,
  ponies: Array<PonyModel>,
  startInstant: string,
}
export default RaceModel;