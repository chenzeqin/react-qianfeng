import React, { useEffect, useState } from 'react'
import { DotLoading, List, NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { connect, useHistory, useLocation } from 'umi'
import { RootModel } from '@/models/type'
import { ICity } from '../city'

interface Props {
  loading: boolean
  cityModel: ICity,
  cinemaList: ICinema[],
  setCinemaList: (cityId: number) => void
}
export interface ICinema {
  name: string,
  cinemaId: string
}

function Cinemas(props: Props) {
  const history = useHistory()
  const back = () => {
    // history.goBack()
    history.push('/city')
  }
  const { name, cityId } = props.cityModel

  useEffect(() => {
    if (!props.cinemaList.length) {
      props.setCinemaList(cityId)
    }
  }, [cityId])

  return (
    <div>
      <NavBar back={name} onBack={back} backArrow={false} right={
        <div style={{ fontSize: 24 }}>
          <Space style={{ '--gap': '16px' }}>
            <SearchOutline />
          </Space>
        </div>
      } >
        影院
      </NavBar>
      {props.loading && <DotLoading color='primary' />}
      <List>
        {props.cinemaList.map((item) => (
          <List.Item key={item.cinemaId}>{item.name}</List.Item>
        ))}
      </List>
    </div>
  )
}

const mapStateToProps = (models: RootModel & any) => {
  console.log(models)
  return {
    cityModel: models.cityModel,
    cinemaList: models.cinemaModel.list,
    loading: models.loading.models.cinemaModel
  }
}

const mapDispatchToProps = {
  setCinemaList: (cityId: number) => ({ type: 'cinemaModel/setCinemaList', cityId })
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)
