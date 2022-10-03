import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { IFilm } from './type'

export default function NowPlaying() {
  const [list, setList] = useState<IFilm[]>([])

  useEffect(() => {
    axios.get('https://m.maizuo.com/gateway?cityId=440300&pageNum=2&pageSize=10&type=1&k=2708383', {
      headers: {
        'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
        'X-Host': `mall.film-ticket.film.list`
      }
    }).then(res => {
      console.log(res.data)
      setList(res.data.data.films)
    })
  }, [])

  const navigate = useNavigate()
  const handleClick = (item: IFilm) => {
    console.log(item)
    navigate(`/filmDetail/${item.filmId}`)
  }

  return (
    <div>
      正在热映
      <ul>
        {
          list.map(item => {
            return (
              <li onClick={() => handleClick(item)} key={item.filmId}>{item.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
