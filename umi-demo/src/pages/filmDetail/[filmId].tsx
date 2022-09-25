import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'umi'
import type { FilmProps } from '../films/type'

export default function FilmDetail() {
  const params = useParams<{ filmId: string }>()
  const [film, setFilm] = useState<FilmProps>()
  useEffect(() => {
    fetch(`https://m.maizuo.com/gateway?filmId=${params.filmId}&k=4765375`, {
      headers: {
        'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
        'X-Host': `mall.film-ticket.film.info`
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res.data)
        setFilm(res.data.film)
      })
  }, [params.filmId])


  return (
    <div>
      {
        film ?
          (<div>
            <img width="100" src={film.poster} alt="film poster" />
            <span>{film.name}</span>
          </div>)
          : <div>loading</div>
      }
    </div>
  )
}
