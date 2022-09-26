import { ICity } from "@/pages/city";
import { CinemaModel } from "umi";

export interface RootModel {
  cityModel: ICity,
  cinemaModel: CinemaModel
}
