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
