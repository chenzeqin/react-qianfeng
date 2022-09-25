import React, { useEffect, useState } from 'react'
interface MaoyanFilmModel {
  videoName: string,
  id: string,
  img: string
}
export default function NowPlaying() {
  const [list, setList] = useState<MaoyanFilmModel[]>([])
  useEffect(() => {
    fetch('/api/mmdb/movie/v3/list/hot.json?ct=%E5%B9%BF%E5%B7%9E&ci=20&channelId=4')
      .then(res => res.json())
      .then(res => {
        console.log(res.data)
        setList(res.data.hot)
      })
  }, [])


  return (
    <div>
      <h3>NowPlaying-正在热映</h3>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <img width={100} src={item.img} alt="" />
            <span>{item.videoName}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
