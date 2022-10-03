import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { IFilm } from './type'


/* 
useParams
*/

export default function FilmDetail() {
  console.log('FilmDetail')
  const [film, setFilm] = useState<IFilm>({
    name: '',
    filmId: ''
  })
  const { id } = useParams()

  useEffect(() => {
    if (!id) return
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
    </div>
  )
}
