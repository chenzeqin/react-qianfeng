import React, {
  ChangeEvent,
  createRef,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import { Result } from '../type';

interface CinemaItem {
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

export default function Cinema() {
  const [list, setList] = useState<CinemaItem[]>([]);
  const [allList, setAllList] = useState<CinemaItem[]>([]);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    axios
      .get<Result<Record<'cinemas', CinemaItem[]>>>(
        'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5767894',
        {
          headers: {
            'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"16592753012062937216778241","bc":"110100"}`,
            'X-Host': `mall.film-ticket.cinema.list`,
          },
        }
      )
      .then((res) => {
        setAllList(res.data.data.cinemas);
      });
  }, []);

  /* 过滤功能 */
  useEffect(() => {
    const newList = allList.filter((item) => item.name.indexOf(value) > -1);
    setList(newList);
  }, [value, allList]);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);
    setValue(e.currentTarget.value);
  }

  return (
    <div>
      <h4>Cinema</h4>
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <ul>
        {list.map((item) => {
          return <li key={item.cinemaId}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
