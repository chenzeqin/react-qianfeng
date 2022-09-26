import React from 'react'
import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { connect, useHistory, useLocation } from 'umi'
import { RootModel } from '@/models/type'
import { ICity } from '../city'

interface Props {
  cityModel: ICity
}

function Cinemas(props: Props) {
  const history = useHistory()
  const back = () => {
    // history.goBack()
     history.push('/cinemas')
  }
  const { name, cityId } = props.cityModel
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
    </div>
  )
}

const mapStateToProps = (models: RootModel) => {
  console.log(models)
  return {
    cityModel: models.cityModel
  }
}

export default connect(mapStateToProps)(Cinemas)
