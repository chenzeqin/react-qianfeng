export interface Result<T> {
  data: T,
  msg: string
  status: number
}

export interface CinemaItem {
  Distance: number;
  address: string;
  businessTime: string;
  cinemaId: number;
  cityId: number;
  cityName: string;
  district: { districtId: number; name: string };
  districtId: number;
  districtName: string;
  eTicketFlag: number;
  gpsAddress: string;
  isVisited: number;
  latitude: number;
  logoUrl: string;
  longitude: number;
  lowPrice: number;
  name: string;
  notice: '';
  phone: string;
  seatFlag: number;
  telephones: string[];
  ticketTypes: null;
}

interface Actor {
  name: string,
  role: string
}
interface FilmType {
  name: string,
  value: string
}
interface Item {
  name: string
  type: number
}
export interface FilmItem {
  actors: Actor[]
  category: string
  director: string
  filmId: number
  filmType: FilmType
  grade: string
  isPresale: boolean
  isSale: boolean
  item: Item
  language: ""
  name: string
  nation: string
  poster: string
  premiereAt: number
  runtime: number
  synopsis: string
  timeType: number
  videoId: string
}