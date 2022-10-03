import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { IFilm } from './type'

/* useSearchParams */

export default function FilmDetail() {
  const [film, setFilm] = useState<IFilm>({
    name: '',
    filmId: ''
  })
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    axios.get(`https://m.maizuo.com/gateway?filmId=${id}&k=52428`, {
      headers: {
        'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
        'X-Host': `mall.film-ticket.film.info`
      }
    }).then(res => {
      setFilm(res.data.data.film)
    })
  }, [id])
  return (
    <div>FilmDetail
      <h4>{film.name}</h4>
      {/* setSearchParams可直接修改url参数 */}
      <button onClick={() => setSearchParams({ id: '6015' })}>猜你喜欢</button>
    </div>
  )
}
