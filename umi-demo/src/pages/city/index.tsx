import React, { useEffect, useMemo, useState } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { connect, useHistory } from 'umi'
export interface ICity {
  name: string
  pinyin: string
  cityId: number,
  isHot: 0 | 1
}
interface Props {
  setCity: (city: ICity) => void
  clearCinemaList: () => void
}

function City(props: Props) {
  const [cityList, setCityList] = useState<ICity[]>([])

  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?k=1592441', {
      headers: {
        'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
        'X-Host': `mall.film-ticket.city.list`
      }
    })
      .then(res => res.json())
      .then(res => {
        setCityList(res.data.cities)
      })
  }, [])

  const groups = useMemo(() => {
    // 生成[A-Z]
    const charCodeOfA = 'A'.charCodeAt(0)
    return Array(26)
      .fill('')
      .map((_, i) => {
        const letter = String.fromCharCode(charCodeOfA + i)
        return {
          title: letter,
          items: cityList.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter) // 按照首字母分类
        }
      }).filter(group => group.items.length > 0)
  }, [cityList])

  const history = useHistory()
  const handleItemClick = (item: ICity) => {
    console.log(item)
    props.clearCinemaList()
    props.setCity(item)
    history.push('/cinemas')
  }

  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {groups.map(group => {
          const { title, items } = group
          return (
            <IndexBar.Panel
              index={title}
              title={`标题${title}`}
              key={`标题${title}`}
            >
              <List>
                {items.map((item) => (
                  <List.Item onClick={() => handleItemClick(item)} key={item.cityId}>{item.name}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
  )
}

const mapDispatchToProps = {
  setCity: (city: ICity) => ({ type: 'cityModel/setCity', payload: city }),
  clearCinemaList: () => ({ type: 'cinemaModel/changeList', payload: [] })
}

export default connect(null, mapDispatchToProps)(City)
