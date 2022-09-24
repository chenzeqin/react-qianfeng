import React, { useEffect, useState } from 'react'
import styles from './index.less'

interface FilmProps {
  name: string
  filmId: string
  poster: string
}

export default function ComingSoon() {
  const [list, setList] = useState<FilmProps[]>([])
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=7491058', {
      headers: {
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
        "X-Host": `mall.film-ticket.film.list`
      }
    }).then(res => res.json()).then(res => {
      console.log(res)
      setList(res.data.films)
    })
  }, [])
  return (
    <div>
      <h3>即将上映</h3>
      <ul>
        {
          list.map(item => {
            return <li className={styles.filmItem} key={item.filmId}>
              <img src={item.poster} alt="" />
              <span>{item.name}</span>
            </li>
          })
        }
      </ul>
    </div>
  )
}
